import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { UserRole, UserStatus } from "../../generated/prisma/enums";
import { prisma } from "./prisma";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  baseURL: process.env.BETTER_AUTH_URL!,
  secret: process.env.BETTER_AUTH_SECRET!,
  trustedOrigins: [process.env.CORS_ORIGIN!],
  cookie: {
    namePrefix: "ba",
    attributes: {
      secure: process.env.NODE_ENV === "production",
      sameSite: "none",
    },
  },
  advanced: {
    useSecureCookies: process.env.NODE_ENV === "production",
  },
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
    requireEmailVerification: false,
  },

  // extend with additional models or fields as needed
  user: {
    additionalFields: {
      role: {
        type: "string",
        required: false,
        default: UserRole.customer,
      },
      phone: {
        type: "string",
        required: false,
      },
      status: {
        type: "string",
        required: false,
        default: UserStatus.active,
      },
    },
  },
});
