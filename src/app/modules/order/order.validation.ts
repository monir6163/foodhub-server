import { z } from "zod";

export const createOrderZodSchema = z.object({
  body: z.object({
    providerId: z.string().uuid(),
    address: z.string().min(5),
    items: z
      .array(
        z.object({
          mealId: z.string().uuid(),
          quantity: z.number().min(1),
        }),
      )
      .min(1),
  }),
});
