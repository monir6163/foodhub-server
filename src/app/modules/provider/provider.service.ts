import { StatusCodes } from "http-status-codes";
import { prisma } from "../../../utils/prisma";
import ApiError from "../../errors/ApiError";
import { IProviderProfile } from "./provider.interface";

const createProviderProfile = async (payload: IProviderProfile) => {
  const { userId, shopName, description, address, phone, isOpen } = payload;

  const existingProfile = await prisma.providerProfile.findUnique({
    where: { userId },
  });

  if (existingProfile) {
    throw new ApiError(
      StatusCodes.BAD_REQUEST,
      "Provider profile already exists",
    );
  }
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    throw new ApiError(StatusCodes.NOT_FOUND, "User not found");
  }

  const data = await prisma.providerProfile.create({
    data: {
      userId,
      shopName,
      description: description ?? null,
      address,
      phone,
      isOpen: isOpen ?? true,
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          phone: true,
          role: true,
        },
      },
    },
  });

  return data;
};

const getAllProviders = async () => {
  const providers = await prisma.providerProfile.findMany({
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
        },
      },
      meals: {
        select: {
          id: true,
          name: true,
          price: true,
          isAvailable: true,
        },
      },
    },
    orderBy: { createdAt: "desc" },
  });

  return providers;
};

export const ProviderService = {
  createProviderProfile,
  getAllProviders,
};
