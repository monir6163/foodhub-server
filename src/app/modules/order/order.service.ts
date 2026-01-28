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

export const OrderService = {
  createOrder,
};
