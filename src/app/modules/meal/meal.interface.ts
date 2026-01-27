export interface IMeal {
  name: string;
  calories: number;
  ingredients: string[];
  description?: string | undefined;
  price: number;
  image?: string | undefined;
  isAvailable: boolean;
  categoryId?: string;
  providerId?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type UpdateMealPayload = {
  name?: string;
  description?: string;
  price?: number;
  image?: string;
  isAvailable?: boolean;
  calories?: number;
  ingredients?: string[];
  categoryId?: string;
};
