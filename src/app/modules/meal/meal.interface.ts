export interface IMeal {
  name: string;
  calories: number;
  ingredients: string[];
  description?: string | undefined;
  price: number;
  image?: string | undefined;
  isAvailable: boolean;
  categoryId: string;
  providerId: string;
  createdAt?: Date;
  updatedAt?: Date;
}
