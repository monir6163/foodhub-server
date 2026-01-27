import { StatusCodes } from "http-status-codes";
import slugify from "slugify";
import { prisma } from "../../../utils/prisma";
import ApiError from "../../errors/ApiError";
import { ICategory } from "./category.interface";

const createCategory = async (payload: ICategory) => {
  const { name } = payload;
  const data = await prisma.category.create({
    data: {
      name,
      slug: slugify(name, {
        replacement: "-",
        lower: true,
        trim: true,
        remove: /[*+~.()'"!:@]/g,
        strict: true,
      }),
    },
  });
  if (!data) {
    throw new ApiError(StatusCodes.BAD_REQUEST, "Failed to create category");
  }
  return data;
};

const getAllCategories = async (): Promise<ICategory[]> => {
  const categories = await prisma.category.findMany({
    orderBy: { createdAt: "desc" },
  });
  return categories;
};

export const CategoryService = {
  createCategory,
  getAllCategories,
};
