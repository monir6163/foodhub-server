import { StatusCodes } from "http-status-codes";
import { OrderStatus } from "../../../../generated/prisma/client";
import { prisma } from "../../../utils/prisma";
import ApiError from "../../errors/ApiError";
import { CreateOrderPayload } from "./order.interface";

const createOrder = async (payload: CreateOrderPayload, customerId: string) => {
  const mealsId = payload.items.map((item) => item.mealId);

  const meals = await prisma.meal.findMany({
    where: {
      id: { in: mealsId },
    },
  });
  if (meals.length !== payload.items.length) {
    throw new ApiError(StatusCodes.BAD_REQUEST, "Invalid meal detected");
  }

  let totalPrice = 0;
  const orderItems = payload.items.map((item) => {
    const meal = meals.find((m) => m.id === item.mealId)!;
    totalPrice += meal.price * item.quantity;

    return {
      mealId: meal.id,
      quantity: item.quantity,
      price: meal.price,
    };
  });

  const order = await prisma.order.create({
    data: {
      userId: customerId,
      providerId: payload.providerId,
      address: payload.address,
      totalAmount: totalPrice,
      status: OrderStatus.PENDING,
      items: {
        create: orderItems,
      },
    },
    include: {
      items: {
        include: { meal: true },
      },
    },
  });

  return order;
};

const getMyOrders = async (customerId: string) => {
  const orders = await prisma.order.findMany({
    where: {
      userId: customerId,
    },
    include: {
      items: {
        include: {
          meal: {
            select: { id: true, name: true, price: true },
          },
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return orders;
};

const getOrderById = async (orderId: string, customerId: string) => {
  const order = await prisma.order.findFirst({
    where: {
      id: orderId,
      userId: customerId,
    },
    include: {
      items: {
        include: {
          meal: {
            include: { provider: { select: { id: true, shopName: true } } },
          },
        },
      },
    },
  });

  if (!order) {
    throw new ApiError(StatusCodes.NOT_FOUND, "Order not found");
  }

  return order;
};

const updateOrderStatus = async (
  orderId: string,
  status: string,
  providerId: string,
) => {
  const order = await prisma.order.findFirst({
    where: {
      id: orderId,
      providerId: providerId,
    },
  });

  if (!order) {
    throw new ApiError(StatusCodes.NOT_FOUND, "Order not found");
  }

  const updatedOrder = await prisma.order.update({
    where: {
      id: orderId,
    },
    data: {
      status: status as OrderStatus,
    },
    include: {
      items: {
        include: {
          meal: {
            select: { id: true, name: true, price: true },
          },
        },
      },
    },
  });

  return updatedOrder;
};

export const OrderService = {
  createOrder,
  getMyOrders,
  getOrderById,
  updateOrderStatus,
};
