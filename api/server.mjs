var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/tsup/assets/esm_shims.js
import path from "path";
import { fileURLToPath } from "url";
var init_esm_shims = __esm({
  "node_modules/tsup/assets/esm_shims.js"() {
    "use strict";
  }
});

// generated/prisma/enums.js
var require_enums = __commonJS({
  "generated/prisma/enums.js"(exports) {
    "use strict";
    init_esm_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PaymentType = exports.OrderStatus = exports.UserStatus = exports.UserRole = void 0;
    exports.UserRole = {
      admin: "admin",
      customer: "customer",
      provider: "provider"
    };
    exports.UserStatus = {
      active: "active",
      inactive: "inactive"
    };
    exports.OrderStatus = {
      PENDING: "PENDING",
      ACCEPTED: "ACCEPTED",
      COOKING: "COOKING",
      ON_THE_WAY: "ON_THE_WAY",
      DELIVERED: "DELIVERED",
      CANCELLED: "CANCELLED"
    };
    exports.PaymentType = {
      COD: "COD"
    };
  }
});

// src/server.ts
init_esm_shims();

// src/app.ts
init_esm_shims();
import { toNodeHandler } from "better-auth/node";
import cors from "cors";
import express8 from "express";
import { StatusCodes as StatusCodes15 } from "http-status-codes";

// src/app/middleware/GlobalErrorHandler.ts
init_esm_shims();
import { StatusCodes } from "http-status-codes";
import { ZodError } from "zod";

// src/app/middleware/handleZodError.ts
init_esm_shims();
var handleZodError = (error) => {
  return error.issues.map((issue) => {
    return {
      field: issue.path[1] || issue.path[0],
      location: issue.path[0],
      message: issue.message
    };
  });
};

// src/app/middleware/GlobalErrorHandler.ts
var globalErrorHandler = (err, req, res, next) => {
  let statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
  let message = "Something went wrong!";
  let errors = null;
  if (err instanceof ZodError) {
    statusCode = StatusCodes.BAD_REQUEST;
    message = "Validation failed";
    errors = handleZodError(err);
  } else {
    statusCode = err.statusCode || statusCode;
    message = err.message || message;
    errors = err.errors || null;
  }
  res.status(statusCode).json({
    success: false,
    // statusCode,
    message,
    ...errors && { errors },
    ...process.env.NODE_ENV === "development" && {
      stack: err.stack
    }
  });
};
var GlobalErrorHandler_default = globalErrorHandler;

// src/app/middleware/Logger.ts
init_esm_shims();
var logger = (req, res, next) => {
  const start = Date.now();
  console.log(
    `[REQUEST] ${req.method} ${req.originalUrl} - ${(/* @__PURE__ */ new Date()).toISOString()}`
  );
  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(
      `[RESPONSE] ${req.method} ${req.originalUrl} | Status: ${res.statusCode} | ${duration}ms`
    );
  });
  next();
};
var Logger_default = logger;

// src/app/middleware/NotFound.ts
init_esm_shims();
import { StatusCodes as StatusCodes2 } from "http-status-codes";
var notFound = (req, res, next) => {
  res.status(StatusCodes2.NOT_FOUND).json({
    success: false,
    message: "Not Found",
    errorMessages: [
      {
        path: req.originalUrl,
        message: "API Not Found"
      }
    ]
  });
  next();
};
var NotFound_default = notFound;

// src/app/routes/index.ts
init_esm_shims();
import express7 from "express";

// src/app/modules/category/category.route.ts
init_esm_shims();
import express from "express";

// generated/prisma/enums.ts
init_esm_shims();
var UserRole = {
  admin: "admin",
  customer: "customer",
  provider: "provider"
};
var UserStatus = {
  active: "active",
  inactive: "inactive"
};

// src/app/middleware/Auth.ts
init_esm_shims();
import { fromNodeHeaders } from "better-auth/node";
import { StatusCodes as StatusCodes3 } from "http-status-codes";

// generated/prisma/browser.ts
var browser_exports = {};
__export(browser_exports, {
  $Enums: () => $Enums,
  Prisma: () => prismaNamespaceBrowser_exports
});
init_esm_shims();

// generated/prisma/internal/prismaNamespaceBrowser.ts
var prismaNamespaceBrowser_exports = {};
__export(prismaNamespaceBrowser_exports, {
  AccountScalarFieldEnum: () => AccountScalarFieldEnum,
  AnyNull: () => AnyNull2,
  CategoryScalarFieldEnum: () => CategoryScalarFieldEnum,
  DbNull: () => DbNull2,
  Decimal: () => Decimal2,
  JsonNull: () => JsonNull2,
  MealScalarFieldEnum: () => MealScalarFieldEnum,
  ModelName: () => ModelName,
  NullTypes: () => NullTypes2,
  NullsOrder: () => NullsOrder,
  OrderItemScalarFieldEnum: () => OrderItemScalarFieldEnum,
  OrderScalarFieldEnum: () => OrderScalarFieldEnum,
  ProviderProfileScalarFieldEnum: () => ProviderProfileScalarFieldEnum,
  QueryMode: () => QueryMode,
  ReviewScalarFieldEnum: () => ReviewScalarFieldEnum,
  SessionScalarFieldEnum: () => SessionScalarFieldEnum,
  SortOrder: () => SortOrder,
  TransactionIsolationLevel: () => TransactionIsolationLevel,
  UserScalarFieldEnum: () => UserScalarFieldEnum,
  VerificationScalarFieldEnum: () => VerificationScalarFieldEnum
});
init_esm_shims();
import * as runtime from "@prisma/client/runtime/index-browser";
var Decimal2 = runtime.Decimal;
var NullTypes2 = {
  DbNull: runtime.NullTypes.DbNull,
  JsonNull: runtime.NullTypes.JsonNull,
  AnyNull: runtime.NullTypes.AnyNull
};
var DbNull2 = runtime.DbNull;
var JsonNull2 = runtime.JsonNull;
var AnyNull2 = runtime.AnyNull;
var ModelName = {
  User: "User",
  Session: "Session",
  Account: "Account",
  Verification: "Verification",
  Category: "Category",
  Meal: "Meal",
  Order: "Order",
  OrderItem: "OrderItem",
  ProviderProfile: "ProviderProfile",
  Review: "Review"
};
var TransactionIsolationLevel = runtime.makeStrictEnum({
  ReadUncommitted: "ReadUncommitted",
  ReadCommitted: "ReadCommitted",
  RepeatableRead: "RepeatableRead",
  Serializable: "Serializable"
});
var UserScalarFieldEnum = {
  id: "id",
  name: "name",
  email: "email",
  emailVerified: "emailVerified",
  image: "image",
  role: "role",
  status: "status",
  phone: "phone",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var SessionScalarFieldEnum = {
  id: "id",
  expiresAt: "expiresAt",
  token: "token",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
  ipAddress: "ipAddress",
  userAgent: "userAgent",
  userId: "userId"
};
var AccountScalarFieldEnum = {
  id: "id",
  accountId: "accountId",
  providerId: "providerId",
  userId: "userId",
  accessToken: "accessToken",
  refreshToken: "refreshToken",
  idToken: "idToken",
  accessTokenExpiresAt: "accessTokenExpiresAt",
  refreshTokenExpiresAt: "refreshTokenExpiresAt",
  scope: "scope",
  password: "password",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var VerificationScalarFieldEnum = {
  id: "id",
  identifier: "identifier",
  value: "value",
  expiresAt: "expiresAt",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var CategoryScalarFieldEnum = {
  id: "id",
  name: "name",
  slug: "slug",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var MealScalarFieldEnum = {
  id: "id",
  providerId: "providerId",
  categoryId: "categoryId",
  name: "name",
  description: "description",
  price: "price",
  image: "image",
  isAvailable: "isAvailable",
  calories: "calories",
  ingredients: "ingredients",
  cuisine: "cuisine",
  dietary: "dietary",
  mealType: "mealType",
  spiceLevel: "spiceLevel",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var OrderScalarFieldEnum = {
  id: "id",
  orderNumber: "orderNumber",
  userId: "userId",
  providerId: "providerId",
  totalAmount: "totalAmount",
  status: "status",
  address: "address",
  paymentType: "paymentType",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var OrderItemScalarFieldEnum = {
  id: "id",
  orderId: "orderId",
  mealId: "mealId",
  price: "price",
  quantity: "quantity"
};
var ProviderProfileScalarFieldEnum = {
  id: "id",
  userId: "userId",
  shopName: "shopName",
  description: "description",
  address: "address",
  phone: "phone",
  isOpen: "isOpen",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var ReviewScalarFieldEnum = {
  id: "id",
  userId: "userId",
  mealId: "mealId",
  rating: "rating",
  comment: "comment",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var SortOrder = {
  asc: "asc",
  desc: "desc"
};
var QueryMode = {
  default: "default",
  insensitive: "insensitive"
};
var NullsOrder = {
  first: "first",
  last: "last"
};

// generated/prisma/browser.ts
var $Enums = __toESM(require_enums());
__reExport(browser_exports, __toESM(require_enums()));

// src/utils/auth.ts
init_esm_shims();
import { APIError, betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { createAuthMiddleware } from "better-auth/api";

// src/utils/mailService.ts
init_esm_shims();
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import path2 from "path";
dotenv.config({ path: path2.join(process.cwd(), ".env") });
var transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: false,
  tls: {
    rejectUnauthorized: false
  },
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// src/utils/prisma.ts
init_esm_shims();
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

// generated/prisma/client.ts
var client_exports = {};
__export(client_exports, {
  $Enums: () => $Enums2,
  Prisma: () => prismaNamespace_exports,
  PrismaClient: () => PrismaClient
});
init_esm_shims();
import * as path3 from "path";
import { fileURLToPath as fileURLToPath2 } from "url";

// generated/prisma/internal/class.ts
init_esm_shims();
import * as runtime2 from "@prisma/client/runtime/client";
var config = {
  "previewFeatures": [],
  "clientVersion": "7.5.0",
  "engineVersion": "280c870be64f457428992c43c1f6d557fab6e29e",
  "activeProvider": "postgresql",
  "inlineSchema": 'model User {\n  id            String     @id\n  name          String\n  email         String\n  emailVerified Boolean    @default(false)\n  image         String?\n  role          UserRole   @default(customer)\n  status        UserStatus @default(active)\n  phone         String?\n  createdAt     DateTime   @default(now())\n  updatedAt     DateTime   @updatedAt\n  sessions      Session[]\n  accounts      Account[]\n\n  providerProfile ProviderProfile?\n  orders          Order[]\n  reviews         Review[]\n\n  @@unique([email])\n  @@map("user")\n}\n\nmodel Session {\n  id        String   @id\n  expiresAt DateTime\n  token     String\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n  ipAddress String?\n  userAgent String?\n  userId    String\n  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  @@unique([token])\n  @@index([userId])\n  @@map("session")\n}\n\nmodel Account {\n  id                    String    @id\n  accountId             String\n  providerId            String\n  userId                String\n  user                  User      @relation(fields: [userId], references: [id], onDelete: Cascade)\n  accessToken           String?\n  refreshToken          String?\n  idToken               String?\n  accessTokenExpiresAt  DateTime?\n  refreshTokenExpiresAt DateTime?\n  scope                 String?\n  password              String?\n  createdAt             DateTime  @default(now())\n  updatedAt             DateTime  @updatedAt\n\n  @@index([userId])\n  @@map("account")\n}\n\nmodel Verification {\n  id         String   @id\n  identifier String\n  value      String\n  expiresAt  DateTime\n  createdAt  DateTime @default(now())\n  updatedAt  DateTime @updatedAt\n\n  @@index([identifier])\n  @@map("verification")\n}\n\nenum UserRole {\n  admin\n  customer\n  provider\n}\n\nenum UserStatus {\n  active\n  inactive\n}\n\nmodel Category {\n  id   String @id @default(uuid())\n  name String @unique\n  slug String @unique\n\n  meals Meal[]\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n}\n\nmodel Meal {\n  id          String          @id @default(uuid())\n  providerId  String\n  categoryId  String\n  name        String\n  description String?\n  price       Float\n  image       String?\n  isAvailable Boolean         @default(true)\n  calories    Int\n  ingredients String[]        @default([])\n  cuisine     String?\n  dietary     String[]        @default([])\n  mealType    String?\n  spiceLevel  String?\n  provider    ProviderProfile @relation(fields: [providerId], references: [id])\n  category    Category        @relation(fields: [categoryId], references: [id])\n  reviews     Review[]\n  orderItems  OrderItem[]\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n}\n\nmodel Order {\n  id          String      @id @default(uuid())\n  orderNumber String?     @unique\n  userId      String\n  providerId  String\n  totalAmount Float\n  status      OrderStatus\n  address     String\n  paymentType PaymentType @default(COD)\n\n  user     User            @relation(fields: [userId], references: [id])\n  provider ProviderProfile @relation(fields: [providerId], references: [id])\n  items    OrderItem[]\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n}\n\nenum OrderStatus {\n  PENDING\n  ACCEPTED\n  COOKING\n  ON_THE_WAY\n  DELIVERED\n  CANCELLED\n}\n\nenum PaymentType {\n  COD\n}\n\nmodel OrderItem {\n  id       String @id @default(uuid())\n  orderId  String\n  mealId   String\n  price    Float\n  quantity Int\n\n  order Order @relation(fields: [orderId], references: [id])\n  meal  Meal  @relation(fields: [mealId], references: [id])\n}\n\nmodel ProviderProfile {\n  id          String  @id @default(uuid())\n  userId      String  @unique\n  shopName    String\n  description String?\n  address     String\n  phone       String\n  isOpen      Boolean @default(true)\n\n  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)\n  meals     Meal[]\n  orders    Order[]\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n}\n\nmodel Review {\n  id      String  @id @default(uuid())\n  userId  String\n  mealId  String\n  rating  Int\n  comment String?\n\n  user User @relation(fields: [userId], references: [id])\n  meal Meal @relation(fields: [mealId], references: [id])\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@unique([userId, mealId], name: "unique_user_meal_review")\n}\n\ngenerator client {\n  provider = "prisma-client"\n  output   = "../../generated/prisma"\n}\n\ndatasource db {\n  provider = "postgresql"\n}\n',
  "runtimeDataModel": {
    "models": {},
    "enums": {},
    "types": {}
  },
  "parameterizationSchema": {
    "strings": [],
    "graph": ""
  }
};
config.runtimeDataModel = JSON.parse('{"models":{"User":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"email","kind":"scalar","type":"String"},{"name":"emailVerified","kind":"scalar","type":"Boolean"},{"name":"image","kind":"scalar","type":"String"},{"name":"role","kind":"enum","type":"UserRole"},{"name":"status","kind":"enum","type":"UserStatus"},{"name":"phone","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"sessions","kind":"object","type":"Session","relationName":"SessionToUser"},{"name":"accounts","kind":"object","type":"Account","relationName":"AccountToUser"},{"name":"providerProfile","kind":"object","type":"ProviderProfile","relationName":"ProviderProfileToUser"},{"name":"orders","kind":"object","type":"Order","relationName":"OrderToUser"},{"name":"reviews","kind":"object","type":"Review","relationName":"ReviewToUser"}],"dbName":"user"},"Session":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"expiresAt","kind":"scalar","type":"DateTime"},{"name":"token","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"ipAddress","kind":"scalar","type":"String"},{"name":"userAgent","kind":"scalar","type":"String"},{"name":"userId","kind":"scalar","type":"String"},{"name":"user","kind":"object","type":"User","relationName":"SessionToUser"}],"dbName":"session"},"Account":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"accountId","kind":"scalar","type":"String"},{"name":"providerId","kind":"scalar","type":"String"},{"name":"userId","kind":"scalar","type":"String"},{"name":"user","kind":"object","type":"User","relationName":"AccountToUser"},{"name":"accessToken","kind":"scalar","type":"String"},{"name":"refreshToken","kind":"scalar","type":"String"},{"name":"idToken","kind":"scalar","type":"String"},{"name":"accessTokenExpiresAt","kind":"scalar","type":"DateTime"},{"name":"refreshTokenExpiresAt","kind":"scalar","type":"DateTime"},{"name":"scope","kind":"scalar","type":"String"},{"name":"password","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"account"},"Verification":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"identifier","kind":"scalar","type":"String"},{"name":"value","kind":"scalar","type":"String"},{"name":"expiresAt","kind":"scalar","type":"DateTime"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"verification"},"Category":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"slug","kind":"scalar","type":"String"},{"name":"meals","kind":"object","type":"Meal","relationName":"CategoryToMeal"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":null},"Meal":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"providerId","kind":"scalar","type":"String"},{"name":"categoryId","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"description","kind":"scalar","type":"String"},{"name":"price","kind":"scalar","type":"Float"},{"name":"image","kind":"scalar","type":"String"},{"name":"isAvailable","kind":"scalar","type":"Boolean"},{"name":"calories","kind":"scalar","type":"Int"},{"name":"ingredients","kind":"scalar","type":"String"},{"name":"cuisine","kind":"scalar","type":"String"},{"name":"dietary","kind":"scalar","type":"String"},{"name":"mealType","kind":"scalar","type":"String"},{"name":"spiceLevel","kind":"scalar","type":"String"},{"name":"provider","kind":"object","type":"ProviderProfile","relationName":"MealToProviderProfile"},{"name":"category","kind":"object","type":"Category","relationName":"CategoryToMeal"},{"name":"reviews","kind":"object","type":"Review","relationName":"MealToReview"},{"name":"orderItems","kind":"object","type":"OrderItem","relationName":"MealToOrderItem"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":null},"Order":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"orderNumber","kind":"scalar","type":"String"},{"name":"userId","kind":"scalar","type":"String"},{"name":"providerId","kind":"scalar","type":"String"},{"name":"totalAmount","kind":"scalar","type":"Float"},{"name":"status","kind":"enum","type":"OrderStatus"},{"name":"address","kind":"scalar","type":"String"},{"name":"paymentType","kind":"enum","type":"PaymentType"},{"name":"user","kind":"object","type":"User","relationName":"OrderToUser"},{"name":"provider","kind":"object","type":"ProviderProfile","relationName":"OrderToProviderProfile"},{"name":"items","kind":"object","type":"OrderItem","relationName":"OrderToOrderItem"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":null},"OrderItem":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"orderId","kind":"scalar","type":"String"},{"name":"mealId","kind":"scalar","type":"String"},{"name":"price","kind":"scalar","type":"Float"},{"name":"quantity","kind":"scalar","type":"Int"},{"name":"order","kind":"object","type":"Order","relationName":"OrderToOrderItem"},{"name":"meal","kind":"object","type":"Meal","relationName":"MealToOrderItem"}],"dbName":null},"ProviderProfile":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"userId","kind":"scalar","type":"String"},{"name":"shopName","kind":"scalar","type":"String"},{"name":"description","kind":"scalar","type":"String"},{"name":"address","kind":"scalar","type":"String"},{"name":"phone","kind":"scalar","type":"String"},{"name":"isOpen","kind":"scalar","type":"Boolean"},{"name":"user","kind":"object","type":"User","relationName":"ProviderProfileToUser"},{"name":"meals","kind":"object","type":"Meal","relationName":"MealToProviderProfile"},{"name":"orders","kind":"object","type":"Order","relationName":"OrderToProviderProfile"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":null},"Review":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"userId","kind":"scalar","type":"String"},{"name":"mealId","kind":"scalar","type":"String"},{"name":"rating","kind":"scalar","type":"Int"},{"name":"comment","kind":"scalar","type":"String"},{"name":"user","kind":"object","type":"User","relationName":"ReviewToUser"},{"name":"meal","kind":"object","type":"Meal","relationName":"MealToReview"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":null}},"enums":{},"types":{}}');
config.parameterizationSchema = {
  strings: JSON.parse('["where","orderBy","cursor","user","sessions","accounts","provider","meals","_count","category","meal","reviews","items","order","orderItems","orders","providerProfile","User.findUnique","User.findUniqueOrThrow","User.findFirst","User.findFirstOrThrow","User.findMany","data","User.createOne","User.createMany","User.createManyAndReturn","User.updateOne","User.updateMany","User.updateManyAndReturn","create","update","User.upsertOne","User.deleteOne","User.deleteMany","having","_min","_max","User.groupBy","User.aggregate","Session.findUnique","Session.findUniqueOrThrow","Session.findFirst","Session.findFirstOrThrow","Session.findMany","Session.createOne","Session.createMany","Session.createManyAndReturn","Session.updateOne","Session.updateMany","Session.updateManyAndReturn","Session.upsertOne","Session.deleteOne","Session.deleteMany","Session.groupBy","Session.aggregate","Account.findUnique","Account.findUniqueOrThrow","Account.findFirst","Account.findFirstOrThrow","Account.findMany","Account.createOne","Account.createMany","Account.createManyAndReturn","Account.updateOne","Account.updateMany","Account.updateManyAndReturn","Account.upsertOne","Account.deleteOne","Account.deleteMany","Account.groupBy","Account.aggregate","Verification.findUnique","Verification.findUniqueOrThrow","Verification.findFirst","Verification.findFirstOrThrow","Verification.findMany","Verification.createOne","Verification.createMany","Verification.createManyAndReturn","Verification.updateOne","Verification.updateMany","Verification.updateManyAndReturn","Verification.upsertOne","Verification.deleteOne","Verification.deleteMany","Verification.groupBy","Verification.aggregate","Category.findUnique","Category.findUniqueOrThrow","Category.findFirst","Category.findFirstOrThrow","Category.findMany","Category.createOne","Category.createMany","Category.createManyAndReturn","Category.updateOne","Category.updateMany","Category.updateManyAndReturn","Category.upsertOne","Category.deleteOne","Category.deleteMany","Category.groupBy","Category.aggregate","Meal.findUnique","Meal.findUniqueOrThrow","Meal.findFirst","Meal.findFirstOrThrow","Meal.findMany","Meal.createOne","Meal.createMany","Meal.createManyAndReturn","Meal.updateOne","Meal.updateMany","Meal.updateManyAndReturn","Meal.upsertOne","Meal.deleteOne","Meal.deleteMany","_avg","_sum","Meal.groupBy","Meal.aggregate","Order.findUnique","Order.findUniqueOrThrow","Order.findFirst","Order.findFirstOrThrow","Order.findMany","Order.createOne","Order.createMany","Order.createManyAndReturn","Order.updateOne","Order.updateMany","Order.updateManyAndReturn","Order.upsertOne","Order.deleteOne","Order.deleteMany","Order.groupBy","Order.aggregate","OrderItem.findUnique","OrderItem.findUniqueOrThrow","OrderItem.findFirst","OrderItem.findFirstOrThrow","OrderItem.findMany","OrderItem.createOne","OrderItem.createMany","OrderItem.createManyAndReturn","OrderItem.updateOne","OrderItem.updateMany","OrderItem.updateManyAndReturn","OrderItem.upsertOne","OrderItem.deleteOne","OrderItem.deleteMany","OrderItem.groupBy","OrderItem.aggregate","ProviderProfile.findUnique","ProviderProfile.findUniqueOrThrow","ProviderProfile.findFirst","ProviderProfile.findFirstOrThrow","ProviderProfile.findMany","ProviderProfile.createOne","ProviderProfile.createMany","ProviderProfile.createManyAndReturn","ProviderProfile.updateOne","ProviderProfile.updateMany","ProviderProfile.updateManyAndReturn","ProviderProfile.upsertOne","ProviderProfile.deleteOne","ProviderProfile.deleteMany","ProviderProfile.groupBy","ProviderProfile.aggregate","Review.findUnique","Review.findUniqueOrThrow","Review.findFirst","Review.findFirstOrThrow","Review.findMany","Review.createOne","Review.createMany","Review.createManyAndReturn","Review.updateOne","Review.updateMany","Review.updateManyAndReturn","Review.upsertOne","Review.deleteOne","Review.deleteMany","Review.groupBy","Review.aggregate","AND","OR","NOT","id","userId","mealId","rating","comment","createdAt","updatedAt","equals","in","notIn","lt","lte","gt","gte","not","contains","startsWith","endsWith","shopName","description","address","phone","isOpen","every","some","none","orderId","price","quantity","orderNumber","providerId","totalAmount","OrderStatus","status","PaymentType","paymentType","categoryId","name","image","isAvailable","calories","ingredients","cuisine","dietary","mealType","spiceLevel","has","hasEvery","hasSome","slug","identifier","value","expiresAt","accountId","accessToken","refreshToken","idToken","accessTokenExpiresAt","refreshTokenExpiresAt","scope","password","token","ipAddress","userAgent","email","emailVerified","UserRole","role","UserStatus","unique_user_meal_review","is","isNot","connectOrCreate","upsert","createMany","set","disconnect","delete","connect","updateMany","deleteMany","push","increment","decrement","multiply","divide"]'),
  graph: "_QReoAESBAAAygIAIAUAAMsCACALAADNAgAgDwAAqgIAIBAAAMwCACC5AQAAxwIAMLoBAAAsABC7AQAAxwIAMLwBAQAAAAHBAUAApwIAIcIBQACnAgAh0QEBAKUCACHdAQAAyQKBAiLhAQEApAIAIeIBAQClAgAh_AEBAAAAAf0BIACmAgAh_wEAAMgC_wEiAQAAAAEAIAwDAACoAgAguQEAAN4CADC6AQAAAwAQuwEAAN4CADC8AQEApAIAIb0BAQCkAgAhwQFAAKcCACHCAUAApwIAIfABQACnAgAh-QEBAKQCACH6AQEApQIAIfsBAQClAgAhAwMAAMUDACD6AQAA3wIAIPsBAADfAgAgDAMAAKgCACC5AQAA3gIAMLoBAAADABC7AQAA3gIAMLwBAQAAAAG9AQEApAIAIcEBQACnAgAhwgFAAKcCACHwAUAApwIAIfkBAQAAAAH6AQEApQIAIfsBAQClAgAhAwAAAAMAIAEAAAQAMAIAAAUAIBEDAACoAgAguQEAANwCADC6AQAABwAQuwEAANwCADC8AQEApAIAIb0BAQCkAgAhwQFAAKcCACHCAUAApwIAIdoBAQCkAgAh8QEBAKQCACHyAQEApQIAIfMBAQClAgAh9AEBAKUCACH1AUAA3QIAIfYBQADdAgAh9wEBAKUCACH4AQEApQIAIQgDAADFAwAg8gEAAN8CACDzAQAA3wIAIPQBAADfAgAg9QEAAN8CACD2AQAA3wIAIPcBAADfAgAg-AEAAN8CACARAwAAqAIAILkBAADcAgAwugEAAAcAELsBAADcAgAwvAEBAAAAAb0BAQCkAgAhwQFAAKcCACHCAUAApwIAIdoBAQCkAgAh8QEBAKQCACHyAQEApQIAIfMBAQClAgAh9AEBAKUCACH1AUAA3QIAIfYBQADdAgAh9wEBAKUCACH4AQEApQIAIQMAAAAHACABAAAIADACAAAJACAPAwAAqAIAIAcAAKkCACAPAACqAgAguQEAAKMCADC6AQAACwAQuwEAAKMCADC8AQEApAIAIb0BAQCkAgAhwQFAAKcCACHCAUAApwIAIc4BAQCkAgAhzwEBAKUCACHQAQEApAIAIdEBAQCkAgAh0gEgAKYCACEBAAAACwAgFwYAANICACAJAADbAgAgCwAAzQIAIA4AANMCACC5AQAA2gIAMLoBAAANABC7AQAA2gIAMLwBAQCkAgAhwQFAAKcCACHCAUAApwIAIc8BAQClAgAh1wEIAM8CACHaAQEApAIAIeABAQCkAgAh4QEBAKQCACHiAQEApQIAIeMBIACmAgAh5AECANUCACHlAQAAtgIAIOYBAQClAgAh5wEAALYCACDoAQEApQIAIekBAQClAgAhCQYAALcEACAJAAC8BAAgCwAAuAQAIA4AALkEACDPAQAA3wIAIOIBAADfAgAg5gEAAN8CACDoAQAA3wIAIOkBAADfAgAgFwYAANICACAJAADbAgAgCwAAzQIAIA4AANMCACC5AQAA2gIAMLoBAAANABC7AQAA2gIAMLwBAQAAAAHBAUAApwIAIcIBQACnAgAhzwEBAKUCACHXAQgAzwIAIdoBAQCkAgAh4AEBAKQCACHhAQEApAIAIeIBAQClAgAh4wEgAKYCACHkAQIA1QIAIeUBAAC2AgAg5gEBAKUCACHnAQAAtgIAIOgBAQClAgAh6QEBAKUCACEDAAAADQAgAQAADgAwAgAADwAgAwAAAA0AIAEAAA4AMAIAAA8AIAEAAAANACAMAwAAqAIAIAoAANcCACC5AQAA2QIAMLoBAAATABC7AQAA2QIAMLwBAQCkAgAhvQEBAKQCACG-AQEApAIAIb8BAgDVAgAhwAEBAKUCACHBAUAApwIAIcIBQACnAgAhAwMAAMUDACAKAAC7BAAgwAEAAN8CACANAwAAqAIAIAoAANcCACC5AQAA2QIAMLoBAAATABC7AQAA2QIAMLwBAQAAAAG9AQEApAIAIb4BAQCkAgAhvwECANUCACHAAQEApQIAIcEBQACnAgAhwgFAAKcCACGBAgAA2AIAIAMAAAATACABAAAUADACAAAVACAKCgAA1wIAIA0AANYCACC5AQAA1AIAMLoBAAAXABC7AQAA1AIAMLwBAQCkAgAhvgEBAKQCACHWAQEApAIAIdcBCADPAgAh2AECANUCACECCgAAuwQAIA0AALoEACAKCgAA1wIAIA0AANYCACC5AQAA1AIAMLoBAAAXABC7AQAA1AIAMLwBAQAAAAG-AQEApAIAIdYBAQCkAgAh1wEIAM8CACHYAQIA1QIAIQMAAAAXACABAAAYADACAAAZACADAAAAFwAgAQAAGAAwAgAAGQAgAQAAABcAIAEAAAATACABAAAAFwAgEAMAAKgCACAGAADSAgAgDAAA0wIAILkBAADOAgAwugEAAB8AELsBAADOAgAwvAEBAKQCACG9AQEApAIAIcEBQACnAgAhwgFAAKcCACHQAQEApAIAIdkBAQClAgAh2gEBAKQCACHbAQgAzwIAId0BAADQAt0BIt8BAADRAt8BIgQDAADFAwAgBgAAtwQAIAwAALkEACDZAQAA3wIAIBADAACoAgAgBgAA0gIAIAwAANMCACC5AQAAzgIAMLoBAAAfABC7AQAAzgIAMLwBAQAAAAG9AQEApAIAIcEBQACnAgAhwgFAAKcCACHQAQEApAIAIdkBAQAAAAHaAQEApAIAIdsBCADPAgAh3QEAANAC3QEi3wEAANEC3wEiAwAAAB8AIAEAACAAMAIAACEAIAEAAAANACABAAAAHwAgAwAAAB8AIAEAACAAMAIAACEAIAMAAAATACABAAAUADACAAAVACABAAAAAwAgAQAAAAcAIAEAAAAfACABAAAAEwAgAQAAAAEAIBIEAADKAgAgBQAAywIAIAsAAM0CACAPAACqAgAgEAAAzAIAILkBAADHAgAwugEAACwAELsBAADHAgAwvAEBAKQCACHBAUAApwIAIcIBQACnAgAh0QEBAKUCACHdAQAAyQKBAiLhAQEApAIAIeIBAQClAgAh_AEBAKQCACH9ASAApgIAIf8BAADIAv8BIgcEAAC1BAAgBQAAtgQAIAsAALgEACAPAADHAwAgEAAAtwQAINEBAADfAgAg4gEAAN8CACADAAAALAAgAQAALQAwAgAAAQAgAwAAACwAIAEAAC0AMAIAAAEAIAMAAAAsACABAAAtADACAAABACAPBAAAsAQAIAUAALEEACALAAC0BAAgDwAAswQAIBAAALIEACC8AQEAAAABwQFAAAAAAcIBQAAAAAHRAQEAAAAB3QEAAACBAgLhAQEAAAAB4gEBAAAAAfwBAQAAAAH9ASAAAAAB_wEAAAD_AQIBFgAAMQAgCrwBAQAAAAHBAUAAAAABwgFAAAAAAdEBAQAAAAHdAQAAAIECAuEBAQAAAAHiAQEAAAAB_AEBAAAAAf0BIAAAAAH_AQAAAP8BAgEWAAAzADABFgAAMwAwDwQAAPwDACAFAAD9AwAgCwAAgAQAIA8AAP8DACAQAAD-AwAgvAEBAOUCACHBAUAA6AIAIcIBQADoAgAh0QEBAOcCACHdAQAA-wOBAiLhAQEA5QIAIeIBAQDnAgAh_AEBAOUCACH9ASAA8AIAIf8BAAD6A_8BIgIAAAABACAWAAA2ACAKvAEBAOUCACHBAUAA6AIAIcIBQADoAgAh0QEBAOcCACHdAQAA-wOBAiLhAQEA5QIAIeIBAQDnAgAh_AEBAOUCACH9ASAA8AIAIf8BAAD6A_8BIgIAAAAsACAWAAA4ACACAAAALAAgFgAAOAAgAwAAAAEAIB0AADEAIB4AADYAIAEAAAABACABAAAALAAgBQgAAPcDACAjAAD5AwAgJAAA-AMAINEBAADfAgAg4gEAAN8CACANuQEAAMACADC6AQAAPwAQuwEAAMACADC8AQEAkQIAIcEBQACUAgAhwgFAAJQCACHRAQEAkwIAId0BAADCAoECIuEBAQCRAgAh4gEBAJMCACH8AQEAkQIAIf0BIACgAgAh_wEAAMEC_wEiAwAAACwAIAEAAD4AMCIAAD8AIAMAAAAsACABAAAtADACAAABACABAAAABQAgAQAAAAUAIAMAAAADACABAAAEADACAAAFACADAAAAAwAgAQAABAAwAgAABQAgAwAAAAMAIAEAAAQAMAIAAAUAIAkDAAD2AwAgvAEBAAAAAb0BAQAAAAHBAUAAAAABwgFAAAAAAfABQAAAAAH5AQEAAAAB-gEBAAAAAfsBAQAAAAEBFgAARwAgCLwBAQAAAAG9AQEAAAABwQFAAAAAAcIBQAAAAAHwAUAAAAAB-QEBAAAAAfoBAQAAAAH7AQEAAAABARYAAEkAMAEWAABJADAJAwAA9QMAILwBAQDlAgAhvQEBAOUCACHBAUAA6AIAIcIBQADoAgAh8AFAAOgCACH5AQEA5QIAIfoBAQDnAgAh-wEBAOcCACECAAAABQAgFgAATAAgCLwBAQDlAgAhvQEBAOUCACHBAUAA6AIAIcIBQADoAgAh8AFAAOgCACH5AQEA5QIAIfoBAQDnAgAh-wEBAOcCACECAAAAAwAgFgAATgAgAgAAAAMAIBYAAE4AIAMAAAAFACAdAABHACAeAABMACABAAAABQAgAQAAAAMAIAUIAADyAwAgIwAA9AMAICQAAPMDACD6AQAA3wIAIPsBAADfAgAgC7kBAAC_AgAwugEAAFUAELsBAAC_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_AwAgCwAAwAMAIA4AAMEDACC8AQEAAAABwQFAAAAAAcIBQAAAAAHPAQEAAAAB1wEIAAAAAdoBAQAAAAHgAQEAAAAB4QEBAAAAAeIBAQAAAAHjASAAAAAB5AECAAAAAeUBAAC9AwAg5gEBAAAAAecBAAC-AwAg6AEBAAAAAekBAQAAAAEBFgAApQEAIBC8AQEAAAABwQFAAAAAAcIBQAAAAAHPAQEAAAAB1wEIAAAAAdoBAQAAAAHgAQEAAAAB4QEBAAAAAeIBAQAAAAHjASAAAAAB5AECAAAAAeUBAAC9AwAg5gEBAAAAAecBAAC-AwAg6AEBAAAAAekBAQAAAAEBFgAApwEAMAEWAACnAQAwFAYAANkDACAJAACiAwAgCwAAowMAIA4AAKQDACC8AQEA5QIAIcEBQADoAgAhwgFAAOgCACHPAQEA5wIAIdcBCAD-AgAh2gEBAOUCACHgAQEA5QIAIeEBAQDlAgAh4gEBAOcCACHjASAA8AIAIeQBAgDmAgAh5QEAAJ8DACDmAQEA5wIAIecBAACgAwAg6AEBAOcCACHpAQEA5wIAIQIAAAAPACAWAACqAQAgELwBAQDlAgAhwQFAAOgCACHCAUAA6AIAIc8BAQDnAgAh1wEIAP4CACHaAQEA5QIAIeABAQDlAgAh4QEBAOUCACHiAQEA5wIAIeMBIADwAgAh5AECAOYCACHlAQAAnwMAIOYBAQDnAgAh5wEAAKADACDoAQEA5wIAIekBAQDnAgAhAgAAAA0AIBYAAKwBACACAAAADQAgFgAArAEAIAMAAAAPACAdAAClAQAgHgAAqgEAIAEAAAAPACABAAAADQAgCggAANQDACAjAADXAwAgJAAA1gMAIHUAANUDACB2AADYAwAgzwEAAN8CACDiAQAA3wIAIOYBAADfAgAg6AEAAN8CACDpAQAA3wIAIBO5AQAAtQIAMLoBAACzAQAQuwEAALUCADC8AQEAkQIAIcEBQACUAgAhwgFAAJQCACHPAQEAkwIAIdcBCACsAgAh2gEBAJECACHgAQEAkQIAIeEBAQCRAgAh4gEBAJMCACHjASAAoAIAIeQBAgCSAgAh5QEAALYCACDmAQEAkwIAIecBAAC2AgAg6AEBAJMCACHpAQEAkwIAIQMAAAANACABAACyAQAwIgAAswEAIAMAAAANACABAAAOADACAAAPACABAAAAIQAgAQAAACEAIAMAAAAfACABAAAgADACAAAhACADAAAAHwAgAQAAIAAwAgAAIQAgAwAAAB8AIAEAACAAMAIAACEAIA0DAACTAwAgBgAA0wMAIAwAAJQDACC8AQEAAAABvQEBAAAAAcEBQAAAAAHCAUAAAAAB0AEBAAAAAdkBAQAAAAHaAQEAAAAB2wEIAAAAAd0BAAAA3QEC3wEAAADfAQIBFgAAuwEAIAq8AQEAAAABvQEBAAAAAcEBQAAAAAHCAUAAAAAB0AEBAAAAAdkBAQAAAAHaAQEAAAAB2wEIAAAAAd0BAAAA3QEC3wEAAADfAQIBFgAAvQEAMAEWAAC9AQAwDQMAAIIDACAGAADSAwAgDAAAgwMAILwBAQDlAgAhvQEBAOUCACHBAUAA6AIAIcIBQADoAgAh0AEBAOUCACHZAQEA5wIAIdoBAQDlAgAh2wEIAP4CACHdAQAA_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_wEAIAe8AQEAAAABvQEBAAAAAb4BAQAAAAG_AQIAAAABwAEBAAAAAcEBQAAAAAHCAUAAAAABARYAAIECADABFgAAgQIAMAkDAADpAgAgCgAA6gIAILwBAQDlAgAhvQEBAOUCACG-AQEA5QIAIb8BAgDmAgAhwAEBAOcCACHBAUAA6AIAIcIBQADoAgAhAgAAABUAIBYAAIQCACAHvAEBAOUCACG9AQEA5QIAIb4BAQDlAgAhvwECAOYCACHAAQEA5wIAIcEBQADoAgAhwgFAAOgCACECAAAAEwAgFgAAhgIAIAIAAAATACAWAACGAgAgAwAAABUAIB0AAP8BACAeAACEAgAgAQAAABUAIAEAAAATACAGCAAA4AIAICMAAOMCACAkAADiAgAgdQAA4QIAIHYAAOQCACDAAQAA3wIAIAq5AQAAkAIAMLoBAACNAgAQuwEAAJACADC8AQEAkQIAIb0BAQCRAgAhvgEBAJECACG_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_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_wEAAMEC_wEiBwgAAJYCACAjAADGAgAgJAAAxgIAIMMBAAAA_wECxAEAAAD_AQjFAQAAAP8BCMoBAADFAv8BIgcIAACWAgAgIwAAxAIAICQAAMQCACDDAQAAAIECAsQBAAAAgQIIxQEAAACBAgjKAQAAwwKBAiIHCAAAlgIAICMAAMQCACAkAADEAgAgwwEAAACBAgLEAQAAAIECCMUBAAAAgQIIygEAAMMCgQIiBMMBAAAAgQICxAEAAACBAgjFAQAAAIECCMoBAADEAoECIgcIAACWAgAgIwAAxgIAICQAAMYCACDDAQAAAP8BAsQBAAAA_wEIxQEAAAD_AQjKAQAAxQL_ASIEwwEAAAD_AQLEAQAAAP8BCMUBAAAA_wEIygEAAMYC_wEiEgQAAMoCACAFAADLAgAgCwAAzQIAIA8AAKoCACAQAADMAgAguQEAAMcCADC6AQAALAAQuwEAAMcCADC8AQEApAIAIcEBQACnAgAhwgFAAKcCACHRAQEApQIAId0BAADJAoECIuEBAQCkAgAh4gEBAKUCACH8AQEApAIAIf0BIACmAgAh_wEAAMgC_wEiBMMBAAAA_wECxAEAAAD_AQjFAQAAAP8BCMoBAADGAv8BIgTDAQAAAIECAsQBAAAAgQIIxQEAAACBAgjKAQAAxAKBAiID0wEAAAMAINQBAAADACDVAQAAAwAgA9MBAAAHACDUAQAABwAg1QEAAAcAIBEDAACoAgAgBwAAqQIAIA8AAKoCACC5AQAAowIAMLoBAAALABC7AQAAowIAMLwBAQCkAgAhvQEBAKQCACHBAUAApwIAIcIBQACnAgAhzgEBAKQCACHPAQEApQIAIdABAQCkAgAh0QEBAKQCACHSASAApgIAIYICAAALACCDAgAACwAgA9MBAAATACDUAQAAEwAg1QEAABMAIBADAACoAgAgBgAA0gIAIAwAANMCACC5AQAAzgIAMLoBAAAfABC7AQAAzgIAMLwBAQCkAgAhvQEBAKQCACHBAUAApwIAIcIBQACnAgAh0AEBAKQCACHZAQEApQIAIdoBAQCkAgAh2wEIAM8CACHdAQAA0ALdASLfAQAA0QLfASIIwwEIAAAAAcQBCAAAAATFAQgAAAAExgEIAAAAAccBCAAAAAHIAQgAAAAByQEIAAAAAcoBCACcAgAhBMMBAAAA3QECxAEAAADdAQjFAQAAAN0BCMoBAAC0At0BIgTDAQAAAN8BAsQBAAAA3wEIxQEAAADfAQjKAQAAsgLfASIRAwAAqAIAIAcAAKkCACAPAACqAgAguQEAAKMCADC6AQAACwAQuwEAAKMCADC8AQEApAIAIb0BAQCkAgAhwQFAAKcCACHCAUAApwIAIc4BAQCkAgAhzwEBAKUCACHQAQEApAIAIdEBAQCkAgAh0gEgAKYCACGCAgAACwAggwIAAAsAIAPTAQAAFwAg1AEAABcAINUBAAAXACAKCgAA1wIAIA0AANYCACC5AQAA1AIAMLoBAAAXABC7AQAA1AIAMLwBAQCkAgAhvgEBAKQCACHWAQEApAIAIdcBCADPAgAh2AECANUCACEIwwECAAAAAcQBAgAAAATFAQIAAAAExgECAAAAAccBAgAAAAHIAQIAAAAByQECAAAAAcoBAgCWAgAhEgMAAKgCACAGAADSAgAgDAAA0wIAILkBAADOAgAwugEAAB8AELsBAADOAgAwvAEBAKQCACG9AQEApAIAIcEBQACnAgAhwgFAAKcCACHQAQEApAIAIdkBAQClAgAh2gEBAKQCACHbAQgAzwIAId0BAADQAt0BIt8BAADRAt8BIoICAAAfACCDAgAAHwAgGQYAANICACAJAADbAgAgCwAAzQIAIA4AANMCACC5AQAA2gIAMLoBAAANABC7AQAA2gIAMLwBAQCkAgAhwQFAAKcCACHCAUAApwIAIc8BAQClAgAh1wEIAM8CACHaAQEApAIAIeABAQCkAgAh4QEBAKQCACHiAQEApQIAIeMBIACmAgAh5AECANUCACHlAQAAtgIAIOYBAQClAgAh5wEAALYCACDoAQEApQIAIekBAQClAgAhggIAAA0AIIMCAAANACACvQEBAAAAAb4BAQAAAAEMAwAAqAIAIAoAANcCACC5AQAA2QIAMLoBAAATABC7AQAA2QIAMLwBAQCkAgAhvQEBAKQCACG-AQEApAIAIb8BAgDVAgAhwAEBAKUCACHBAUAApwIAIcIBQACnAgAhFwYAANICACAJAADbAgAgCwAAzQIAIA4AANMCACC5AQAA2gIAMLoBAAANABC7AQAA2gIAMLwBAQCkAgAhwQFAAKcCACHCAUAApwIAIc8BAQClAgAh1wEIAM8CACHaAQEApAIAIeABAQCkAgAh4QEBAKQCACHiAQEApQIAIeMBIACmAgAh5AECANUCACHlAQAAtgIAIOYBAQClAgAh5wEAALYCACDoAQEApQIAIekBAQClAgAhCwcAAKkCACC5AQAAuAIAMLoBAACKAQAQuwEAALgCADC8AQEApAIAIcEBQACnAgAhwgFAAKcCACHhAQEApAIAIe0BAQCkAgAhggIAAIoBACCDAgAAigEAIBEDAACoAgAguQEAANwCADC6AQAABwAQuwEAANwCADC8AQEApAIAIb0BAQCkAgAhwQFAAKcCACHCAUAApwIAIdoBAQCkAgAh8QEBAKQCACHyAQEApQIAIfMBAQClAgAh9AEBAKUCACH1AUAA3QIAIfYBQADdAgAh9wEBAKUCACH4AQEApQIAIQjDAUAAAAABxAFAAAAABcUBQAAAAAXGAUAAAAABxwFAAAAAAcgBQAAAAAHJAUAAAAABygFAAL4CACEMAwAAqAIAILkBAADeAgAwugEAAAMAELsBAADeAgAwvAEBAKQCACG9AQEApAIAIcEBQACnAgAhwgFAAKcCACHwAUAApwIAIfkBAQCkAgAh-gEBAKUCACH7AQEApQIAIQAAAAAAAAGHAgEAAAABBYcCAgAAAAGOAgIAAAABjwICAAAAAZACAgAAAAGRAgIAAAABAYcCAQAAAAEBhwJAAAAAAQUdAAD2BAAgHgAA_AQAIIQCAAD3BAAghQIAAPsEACCKAgAAAQAgBR0AAPQEACAeAAD5BAAghAIAAPUEACCFAgAA-AQAIIoCAAAPACADHQAA9gQAIIQCAAD3BAAgigIAAAEAIAMdAAD0BAAghAIAAPUEACCKAgAADwAgAAAAAYcCIAAAAAEFHQAA1gQAIB4AAPIEACCEAgAA1wQAIIUCAADxBAAgigIAAAEAIAsdAACVAwAwHgAAmgMAMIQCAACWAwAwhQIAAJcDADCGAgAAmAMAIIcCAACZAwAwiAIAAJkDADCJAgAAmQMAMIoCAACZAwAwiwIAAJsDADCMAgAAnAMAMAsdAAD0AgAwHgAA-QIAMIQCAAD1AgAwhQIAAPYCADCGAgAA9wIAIIcCAAD4AgAwiAIAAPgCADCJAgAA-AIAMIoCAAD4AgAwiwIAAPoCADCMAgAA-wIAMAsDAACTAwAgDAAAlAMAILwBAQAAAAG9AQEAAAABwQFAAAAAAcIBQAAAAAHQAQEAAAAB2QEBAAAAAdsBCAAAAAHdAQAAAN0BAt8BAAAA3wECAgAAACEAIB0AAJIDACADAAAAIQAgHQAAkgMAIB4AAIEDACABFgAA8AQAMBADAACoAgAgBgAA0gIAIAwAANMCACC5AQAAzgIAMLoBAAAfABC7AQAAzgIAMLwBAQAAAAG9AQEApAIAIcEBQACnAgAhwgFAAKcCACHQAQEApAIAIdkBAQAAAAHaAQEApAIAIdsBCADPAgAh3QEAANAC3QEi3wEAANEC3wEiAgAAACEAIBYAAIEDACACAAAA_AIAIBYAAP0CACANuQEAAPsCADC6AQAA_AIAELsBAAD7AgAwvAEBAKQCACG9AQEApAIAIcEBQACnAgAhwgFAAKcCACHQAQEApAIAIdkBAQClAgAh2gEBAKQCACHbAQgAzwIAId0BAADQAt0BIt8BAADRAt8BIg25AQAA-wIAMLoBAAD8AgAQuwEAAPsCADC8AQEApAIAIb0BAQCkAgAhwQFAAKcCACHCAUAApwIAIdABAQCkAgAh2QEBAKUCACHaAQEApAIAIdsBCADPAgAh3QEAANAC3QEi3wEAANEC3wEiCbwBAQDlAgAhvQEBAOUCACHBAUAA6AIAIcIBQADoAgAh0AEBAOUCACHZAQEA5wIAIdsBCAD-AgAh3QEAAP8C3QEi3wEAAIAD3wEiBYcCCAAAAAGOAggAAAABjwIIAAAAAZACCAAAAAGRAggAAAABAYcCAAAA3QECAYcCAAAA3wECCwMAAIIDACAMAACDAwAgvAEBAOUCACG9AQEA5QIAIcEBQADoAgAhwgFAAOgCACHQAQEA5QIAIdkBAQDnAgAh2wEIAP4CACHdAQAA_wLdASLfAQAAgAPfASIFHQAA5QQAIB4AAO4EACCEAgAA5gQAIIUCAADtBAAgigIAAAEAIAsdAACEAwAwHgAAiQMAMIQCAACFAwAwhQIAAIYDADCGAgAAhwMAIIcCAACIAwAwiAIAAIgDADCJAgAAiAMAMIoCAACIAwAwiwIAAIoDADCMAgAAiwMAMAUKAACRAwAgvAEBAAAAAb4BAQAAAAHXAQgAAAAB2AECAAAAAQIAAAAZACAdAACQAwAgAwAAABkAIB0AAJADACAeAACOAwAgARYAAOwEADAKCgAA1wIAIA0AANYCACC5AQAA1AIAMLoBAAAXABC7AQAA1AIAMLwBAQAAAAG-AQEApAIAIdYBAQCkAgAh1wEIAM8CACHYAQIA1QIAIQIAAAAZACAWAACOAwAgAgAAAIwDACAWAACNAwAgCLkBAACLAwAwugEAAIwDABC7AQAAiwMAMLwBAQCkAgAhvgEBAKQCACHWAQEApAIAIdcBCADPAgAh2AECANUCACEIuQEAAIsDADC6AQAAjAMAELsBAACLAwAwvAEBAKQCACG-AQEApAIAIdYBAQCkAgAh1wEIAM8CACHYAQIA1QIAIQS8AQEA5QIAIb4BAQDlAgAh1wEIAP4CACHYAQIA5gIAIQUKAACPAwAgvAEBAOUCACG-AQEA5QIAIdcBCAD-AgAh2AECAOYCACEFHQAA5wQAIB4AAOoEACCEAgAA6AQAIIUCAADpBAAgigIAAA8AIAUKAACRAwAgvAEBAAAAAb4BAQAAAAHXAQgAAAAB2AECAAAAAQMdAADnBAAghAIAAOgEACCKAgAADwAgCwMAAJMDACAMAACUAwAgvAEBAAAAAb0BAQAAAAHBAUAAAAABwgFAAAAAAdABAQAAAAHZAQEAAAAB2wEIAAAAAd0BAAAA3QEC3wEAAADfAQIDHQAA5QQAIIQCAADmBAAgigIAAAEAIAQdAACEAwAwhAIAAIUDADCGAgAAhwMAIIoCAACIAwAwEgkAAL8DACALAADAAwAgDgAAwQMAILwBAQAAAAHBAUAAAAABwgFAAAAAAc8BAQAAAAHXAQgAAAAB4AEBAAAAAeEBAQAAAAHiAQEAAAAB4wEgAAAAAeQBAgAAAAHlAQAAvQMAIOYBAQAAAAHnAQAAvgMAIOgBAQAAAAHpAQEAAAABAgAAAA8AIB0AALwDACADAAAADwAgHQAAvAMAIB4AAKEDACABFgAA5AQAMBcGAADSAgAgCQAA2wIAIAsAAM0CACAOAADTAgAguQEAANoCADC6AQAADQAQuwEAANoCADC8AQEAAAABwQFAAKcCACHCAUAApwIAIc8BAQClAgAh1wEIAM8CACHaAQEApAIAIeABAQCkAgAh4QEBAKQCACHiAQEApQIAIeMBIACmAgAh5AECANUCACHlAQAAtgIAIOYBAQClAgAh5wEAALYCACDoAQEApQIAIekBAQClAgAhAgAAAA8AIBYAAKEDACACAAAAnQMAIBYAAJ4DACATuQEAAJwDADC6AQAAnQMAELsBAACcAwAwvAEBAKQCACHBAUAApwIAIcIBQACnAgAhzwEBAKUCACHXAQgAzwIAIdoBAQCkAgAh4AEBAKQCACHhAQEApAIAIeIBAQClAgAh4wEgAKYCACHkAQIA1QIAIeUBAAC2AgAg5gEBAKUCACHnAQAAtgIAIOgBAQClAgAh6QEBAKUCACETuQEAAJwDADC6AQAAnQMAELsBAACcAwAwvAEBAKQCACHBAUAApwIAIcIBQACnAgAhzwEBAKUCACHXAQgAzwIAIdoBAQCkAgAh4AEBAKQCACHhAQEApAIAIeIBAQClAgAh4wEgAKYCACHkAQIA1QIAIeUBAAC2AgAg5gEBAKUCACHnAQAAtgIAIOgBAQClAgAh6QEBAKUCACEPvAEBAOUCACHBAUAA6AIAIcIBQADoAgAhzwEBAOcCACHXAQgA_gIAIeABAQDlAgAh4QEBAOUCACHiAQEA5wIAIeMBIADwAgAh5AECAOYCACHlAQAAnwMAIOYBAQDnAgAh5wEAAKADACDoAQEA5wIAIekBAQDnAgAhAocCAQAAAASNAgEAAAAFAocCAQAAAASNAgEAAAAFEgkAAKIDACALAACjAwAgDgAApAMAILwBAQDlAgAhwQFAAOgCACHCAUAA6AIAIc8BAQDnAgAh1wEIAP4CACHgAQEA5QIAIeEBAQDlAgAh4gEBAOcCACHjASAA8AIAIeQBAgDmAgAh5QEAAJ8DACDmAQEA5wIAIecBAACgAwAg6AEBAOcCACHpAQEA5wIAIQUdAADYBAAgHgAA4gQAIIQCAADZBAAghQIAAOEEACCKAgAAhwEAIAsdAACwAwAwHgAAtQMAMIQCAACxAwAwhQIAALIDADCGAgAAswMAIIcCAAC0AwAwiAIAALQDADCJAgAAtAMAMIoCAAC0AwAwiwIAALYDADCMAgAAtwMAMAsdAAClAwAwHgAAqQMAMIQCAACmAwAwhQIAAKcDADCGAgAAqAMAIIcCAACIAwAwiAIAAIgDADCJAgAAiAMAMIoCAACIAwAwiwIAAKoDADCMAgAAiwMAMAUNAACvAwAgvAEBAAAAAdYBAQAAAAHXAQgAAAAB2AECAAAAAQIAAAAZACAdAACuAwAgAwAAABkAIB0AAK4DACAeAACsAwAgARYAAOAEADACAAAAGQAgFgAArAMAIAIAAACMAwAgFgAAqwMAIAS8AQEA5QIAIdYBAQDlAgAh1wEIAP4CACHYAQIA5gIAIQUNAACtAwAgvAEBAOUCACHWAQEA5QIAIdcBCAD-AgAh2AECAOYCACEFHQAA2wQAIB4AAN4EACCEAgAA3AQAIIUCAADdBAAgigIAACEAIAUNAACvAwAgvAEBAAAAAdYBAQAAAAHXAQgAAAAB2AECAAAAAQMdAADbBAAghAIAANwEACCKAgAAIQAgBwMAAOsCACC8AQEAAAABvQEBAAAAAb8BAgAAAAHAAQEAAAABwQFAAAAAAcIBQAAAAAECAAAAFQAgHQAAuwMAIAMAAAAVACAdAAC7AwAgHgAAugMAIAEWAADaBAAwDQMAAKgCACAKAADXAgAguQEAANkCADC6AQAAEwAQuwEAANkCADC8AQEAAAABvQEBAKQCACG-AQEApAIAIb8BAgDVAgAhwAEBAKUCACHBAUAApwIAIcIBQACnAgAhgQIAANgCACACAAAAFQAgFgAAugMAIAIAAAC4AwAgFgAAuQMAIAq5AQAAtwMAMLoBAAC4AwAQuwEAALcDADC8AQEApAIAIb0BAQCkAgAhvgEBAKQCACG_AQIA1QIAIcABAQClAgAhwQFAAKcCACHCAUAApwIAIQq5AQAAtwMAMLoBAAC4AwAQuwEAALcDADC8AQEApAIAIb0BAQCkAgAhvgEBAKQCACG_AQIA1QIAIcABAQClAgAhwQFAAKcCACHCAUAApwIAIQa8AQEA5QIAIb0BAQDlAgAhvwECAOYCACHAAQEA5wIAIcEBQADoAgAhwgFAAOgCACEHAwAA6QIAILwBAQDlAgAhvQEBAOUCACG_AQIA5gIAIcABAQDnAgAhwQFAAOgCACHCAUAA6AIAIQcDAADrAgAgvAEBAAAAAb0BAQAAAAG_AQIAAAABwAEBAAAAAcEBQAAAAAHCAUAAAAABEgkAAL8DACALAADAAwAgDgAAwQMAILwBAQAAAAHBAUAAAAABwgFAAAAAAc8BAQAAAAHXAQgAAAAB4AEBAAAAAeEBAQAAAAHiAQEAAAAB4wEgAAAAAeQBAgAAAAHlAQAAvQMAIOYBAQAAAAHnAQAAvgMAIOgBAQAAAAHpAQEAAAABAYcCAQAAAAQBhwIBAAAABAMdAADYBAAghAIAANkEACCKAgAAhwEAIAQdAACwAwAwhAIAALEDADCGAgAAswMAIIoCAAC0AwAwBB0AAKUDADCEAgAApgMAMIYCAACoAwAgigIAAIgDADADHQAA1gQAIIQCAADXBAAgigIAAAEAIAQdAACVAwAwhAIAAJYDADCGAgAAmAMAIIoCAACZAwAwBB0AAPQCADCEAgAA9QIAMIYCAAD3AgAgigIAAPgCADAHBAAAtQQAIAUAALYEACALAAC4BAAgDwAAxwMAIBAAALcEACDRAQAA3wIAIOIBAADfAgAgAAAAAAAAAAAAAAAABR0AANEEACAeAADUBAAghAIAANIEACCFAgAA0wQAIIoCAADiAQAgAx0AANEEACCEAgAA0gQAIIoCAADiAQAgAAAAAAAFHQAAzAQAIB4AAM8EACCEAgAAzQQAIIUCAADOBAAgigIAAOIBACADHQAAzAQAIIQCAADNBAAgigIAAOIBACAAAAALHQAA3wMAMB4AAOMDADCEAgAA4AMAMIUCAADhAwAwhgIAAOIDACCHAgAAmQMAMIgCAACZAwAwiQIAAJkDADCKAgAAmQMAMIsCAADkAwAwjAIAAJwDADASBgAA2gMAIAsAAMADACAOAADBAwAgvAEBAAAAAcEBQAAAAAHCAUAAAAABzwEBAAAAAdcBCAAAAAHaAQEAAAAB4QEBAAAAAeIBAQAAAAHjASAAAAAB5AECAAAAAeUBAAC9AwAg5gEBAAAAAecBAAC-AwAg6AEBAAAAAekBAQAAAAECAAAADwAgHQAA5wMAIAMAAAAPACAdAADnAwAgHgAA5gMAIAEWAADLBAAwAgAAAA8AIBYAAOYDACACAAAAnQMAIBYAAOUDACAPvAEBAOUCACHBAUAA6AIAIcIBQADoAgAhzwEBAOcCACHXAQgA_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_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_AEBAAAAAf0BIAAAAAH_AQAAAP8BAgIAAAABACAdAADBBAAgAwAAACwAIB0AAMEEACAeAADFBAAgEAAAACwAIAUAAP0DACALAACABAAgDwAA_wMAIBAAAP4DACAWAADFBAAgvAEBAOUCACHBAUAA6AIAIcIBQADoAgAh0QEBAOcCACHdAQAA-wOBAiLhAQEA5QIAIeIBAQDnAgAh_AEBAOUCACH9ASAA8AIAIf8BAAD6A_8BIg4FAAD9AwAgCwAAgAQAIA8AAP8DACAQAAD-AwAgvAEBAOUCACHBAUAA6AIAIcIBQADoAgAh0QEBAOcCACHdAQAA-wOBAiLhAQEA5QIAIeIBAQDnAgAh_AEBAOUCACH9ASAA8AIAIf8BAAD6A_8BIg4EAACwBAAgCwAAtAQAIA8AALMEACAQAACyBAAgvAEBAAAAAcEBQAAAAAHCAUAAAAAB0QEBAAAAAd0BAAAAgQIC4QEBAAAAAeIBAQAAAAH8AQEAAAAB_QEgAAAAAf8BAAAA_wECAgAAAAEAIB0AAMYEACADAAAALAAgHQAAxgQAIB4AAMoEACAQAAAALAAgBAAA_AMAIAsAAIAEACAPAAD_AwAgEAAA_gMAIBYAAMoEACC8AQEA5QIAIcEBQADoAgAhwgFAAOgCACHRAQEA5wIAId0BAAD7A4ECIuEBAQDlAgAh4gEBAOcCACH8AQEA5QIAIf0BIADwAgAh_wEAAPoD_wEiDgQAAPwDACALAACABAAgDwAA_wMAIBAAAP4DACC8AQEA5QIAIcEBQADoAgAhwgFAAOgCACHRAQEA5wIAId0BAAD7A4ECIuEBAQDlAgAh4gEBAOcCACH8AQEA5QIAIf0BIADwAgAh_wEAAPoD_wEiD7wBAQAAAAHBAUAAAAABwgFAAAAAAc8BAQAAAAHXAQgAAAAB2gEBAAAAAeEBAQAAAAHiAQEAAAAB4wEgAAAAAeQBAgAAAAHlAQAAvQMAIOYBAQAAAAHnAQAAvgMAIOgBAQAAAAHpAQEAAAABCwMAAMIDACAPAADEAwAgvAEBAAAAAb0BAQAAAAHBAUAAAAABwgFAAAAAAc4BAQAAAAHPAQEAAAAB0AEBAAAAAdEBAQAAAAHSASAAAAABAgAAAOIBACAdAADMBAAgAwAAAAsAIB0AAMwEACAeAADQBAAgDQAAAAsAIAMAAPECACAPAADzAgAgFgAA0AQAILwBAQDlAgAhvQEBAOUCACHBAUAA6AIAIcIBQADoAgAhzgEBAOUCACHPAQEA5wIAIdABAQDlAgAh0QEBAOUCACHSASAA8AIAIQsDAADxAgAgDwAA8wIAILwBAQDlAgAhvQEBAOUCACHBAUAA6AIAIcIBQADoAgAhzgEBAOUCACHPAQEA5wIAIdABAQDlAgAh0QEBAOUCACHSASAA8AIAIQsDAADCAwAgBwAAwwMAILwBAQAAAAG9AQEAAAABwQFAAAAAAcIBQAAAAAHOAQEAAAABzwEBAAAAAdABAQAAAAHRAQEAAAAB0gEgAAAAAQIAAADiAQAgHQAA0QQAIAMAAAALACAdAADRBAAgHgAA1QQAIA0AAAALACADAADxAgAgBwAA8gIAIBYAANUEACC8AQEA5QIAIb0BAQDlAgAhwQFAAOgCACHCAUAA6AIAIc4BAQDlAgAhzwEBAOcCACHQAQEA5QIAIdEBAQDlAgAh0gEgAPACACELAwAA8QIAIAcAAPICACC8AQEA5QIAIb0BAQDlAgAhwQFAAOgCACHCAUAA6AIAIc4BAQDlAgAhzwEBAOcCACHQAQEA5QIAIdEBAQDlAgAh0gEgAPACACEOBAAAsAQAIAUAALEEACALAAC0BAAgDwAAswQAILwBAQAAAAHBAUAAAAABwgFAAAAAAdEBAQAAAAHdAQAAAIECAuEBAQAAAAHiAQEAAAAB_AEBAAAAAf0BIAAAAAH_AQAAAP8BAgIAAAABACAdAADWBAAgBbwBAQAAAAHBAUAAAAABwgFAAAAAAeEBAQAAAAHtAQEAAAABAgAAAIcBACAdAADYBAAgBrwBAQAAAAG9AQEAAAABvwECAAAAAcABAQAAAAHBAUAAAAABwgFAAAAAAQwDAACTAwAgBgAA0wMAILwBAQAAAAG9AQEAAAABwQFAAAAAAcIBQAAAAAHQAQEAAAAB2QEBAAAAAdoBAQAAAAHbAQgAAAAB3QEAAADdAQLfAQAAAN8BAgIAAAAhACAdAADbBAAgAwAAAB8AIB0AANsEACAeAADfBAAgDgAAAB8AIAMAAIIDACAGAADSAwAgFgAA3wQAILwBAQDlAgAhvQEBAOUCACHBAUAA6AIAIcIBQADoAgAh0AEBAOUCACHZAQEA5wIAIdoBAQDlAgAh2wEIAP4CACHdAQAA_wLdASLfAQAAgAPfASIMAwAAggMAIAYAANIDACC8AQEA5QIAIb0BAQDlAgAhwQFAAOgCACHCAUAA6AIAIdABAQDlAgAh2QEBAOcCACHaAQEA5QIAIdsBCAD-AgAh3QEAAP8C3QEi3wEAAIAD3wEiBLwBAQAAAAHWAQEAAAAB1wEIAAAAAdgBAgAAAAEDAAAAigEAIB0AANgEACAeAADjBAAgBwAAAIoBACAWAADjBAAgvAEBAOUCACHBAUAA6AIAIcIBQADoAgAh4QEBAOUCACHtAQEA5QIAIQW8AQEA5QIAIcEBQADoAgAhwgFAAOgCACHhAQEA5QIAIe0BAQDlAgAhD7wBAQAAAAHBAUAAAAABwgFAAAAAAc8BAQAAAAHXAQgAAAAB4AEBAAAAAeEBAQAAAAHiAQEAAAAB4wEgAAAAAeQBAgAAAAHlAQAAvQMAIOYBAQAAAAHnAQAAvgMAIOgBAQAAAAHpAQEAAAABDgQAALAEACAFAACxBAAgCwAAtAQAIBAAALIEACC8AQEAAAABwQFAAAAAAcIBQAAAAAHRAQEAAAAB3QEAAACBAgLhAQEAAAAB4gEBAAAAAfwBAQAAAAH9ASAAAAAB_wEAAAD_AQICAAAAAQAgHQAA5QQAIBMGAADaAwAgCQAAvwMAIAsAAMADACC8AQEAAAABwQFAAAAAAcIBQAAAAAHPAQEAAAAB1wEIAAAAAdoBAQAAAAHgAQEAAAAB4QEBAAAAAeIBAQAAAAHjASAAAAAB5AECAAAAAeUBAAC9AwAg5gEBAAAAAecBAAC-AwAg6AEBAAAAAekBAQAAAAECAAAADwAgHQAA5wQAIAMAAAANACAdAADnBAAgHgAA6wQAIBUAAAANACAGAADZAwAgCQAAogMAIAsAAKMDACAWAADrBAAgvAEBAOUCACHBAUAA6AIAIcIBQADoAgAhzwEBAOcCACHXAQgA_gIAIdoBAQDlAgAh4AEBAOUCACHhAQEA5QIAIeIBAQDnAgAh4wEgAPACACHkAQIA5gIAIeUBAACfAwAg5gEBAOcCACHnAQAAoAMAIOgBAQDnAgAh6QEBAOcCACETBgAA2QMAIAkAAKIDACALAACjAwAgvAEBAOUCACHBAUAA6AIAIcIBQADoAgAhzwEBAOcCACHXAQgA_gIAIdoBAQDlAgAh4AEBAOUCACHhAQEA5QIAIeIBAQDnAgAh4wEgAPACACHkAQIA5gIAIeUBAACfAwAg5gEBAOcCACHnAQAAoAMAIOgBAQDnAgAh6QEBAOcCACEEvAEBAAAAAb4BAQAAAAHXAQgAAAAB2AECAAAAAQMAAAAsACAdAADlBAAgHgAA7wQAIBAAAAAsACAEAAD8AwAgBQAA_QMAIAsAAIAEACAQAAD-AwAgFgAA7wQAILwBAQDlAgAhwQFAAOgCACHCAUAA6AIAIdEBAQDnAgAh3QEAAPsDgQIi4QEBAOUCACHiAQEA5wIAIfwBAQDlAgAh_QEgAPACACH_AQAA-gP_ASIOBAAA_AMAIAUAAP0DACALAACABAAgEAAA_gMAILwBAQDlAgAhwQFAAOgCACHCAUAA6AIAIdEBAQDnAgAh3QEAAPsDgQIi4QEBAOUCACHiAQEA5wIAIfwBAQDlAgAh_QEgAPACACH_AQAA-gP_ASIJvAEBAAAAAb0BAQAAAAHBAUAAAAABwgFAAAAAAdABAQAAAAHZAQEAAAAB2wEIAAAAAd0BAAAA3QEC3wEAAADfAQIDAAAALAAgHQAA1gQAIB4AAPMEACAQAAAALAAgBAAA_AMAIAUAAP0DACALAACABAAgDwAA_wMAIBYAAPMEACC8AQEA5QIAIcEBQADoAgAhwgFAAOgCACHRAQEA5wIAId0BAAD7A4ECIuEBAQDlAgAh4gEBAOcCACH8AQEA5QIAIf0BIADwAgAh_wEAAPoD_wEiDgQAAPwDACAFAAD9AwAgCwAAgAQAIA8AAP8DACC8AQEA5QIAIcEBQADoAgAhwgFAAOgCACHRAQEA5wIAId0BAAD7A4ECIuEBAQDlAgAh4gEBAOcCACH8AQEA5QIAIf0BIADwAgAh_wEAAPoD_wEiEwYAANoDACAJAAC_AwAgDgAAwQMAILwBAQAAAAHBAUAAAAABwgFAAAAAAc8BAQAAAAHXAQgAAAAB2gEBAAAAAeABAQAAAAHhAQEAAAAB4gEBAAAAAeMBIAAAAAHkAQIAAAAB5QEAAL0DACDmAQEAAAAB5wEAAL4DACDoAQEAAAAB6QEBAAAAAQIAAAAPACAdAAD0BAAgDgQAALAEACAFAACxBAAgDwAAswQAIBAAALIEACC8AQEAAAABwQFAAAAAAcIBQAAAAAHRAQEAAAAB3QEAAACBAgLhAQEAAAAB4gEBAAAAAfwBAQAAAAH9ASAAAAAB_wEAAAD_AQICAAAAAQAgHQAA9gQAIAMAAAANACAdAAD0BAAgHgAA-gQAIBUAAAANACAGAADZAwAgCQAAogMAIA4AAKQDACAWAAD6BAAgvAEBAOUCACHBAUAA6AIAIcIBQADoAgAhzwEBAOcCACHXAQgA_gIAIdoBAQDlAgAh4AEBAOUCACHhAQEA5QIAIeIBAQDnAgAh4wEgAPACACHkAQIA5gIAIeUBAACfAwAg5gEBAOcCACHnAQAAoAMAIOgBAQDnAgAh6QEBAOcCACETBgAA2QMAIAkAAKIDACAOAACkAwAgvAEBAOUCACHBAUAA6AIAIcIBQADoAgAhzwEBAOcCACHXAQgA_gIAIdoBAQDlAgAh4AEBAOUCACHhAQEA5QIAIeIBAQDnAgAh4wEgAPACACHkAQIA5gIAIeUBAACfAwAg5gEBAOcCACHnAQAAoAMAIOgBAQDnAgAh6QEBAOcCACEDAAAALAAgHQAA9gQAIB4AAP0EACAQAAAALAAgBAAA_AMAIAUAAP0DACAPAAD_AwAgEAAA_gMAIBYAAP0EACC8AQEA5QIAIcEBQADoAgAhwgFAAOgCACHRAQEA5wIAId0BAAD7A4ECIuEBAQDlAgAh4gEBAOcCACH8AQEA5QIAIf0BIADwAgAh_wEAAPoD_wEiDgQAAPwDACAFAAD9AwAgDwAA_wMAIBAAAP4DACC8AQEA5QIAIcEBQADoAgAhwgFAAOgCACHRAQEA5wIAId0BAAD7A4ECIuEBAQDlAgAh4gEBAOcCACH8AQEA5QIAIf0BIADwAgAh_wEAAPoD_wEiBgQGAgUKAwgADgsmCA8lChAMBAEDAAEBAwABBAMAAQcQBQgADQ8iCgUGAAQIAAwJAAYLFggOGgkCBxEFCAAHAQcSAAIDAAEKAAUCCgAFDQAKBAMAAQYABAgACwwbCQEMHAACCx0ADh4AAgcjAA8kAAQEJwAFKAALKgAPKQAAAAADCAATIwAUJAAVAAAAAwgAEyMAFCQAFQEDAAEBAwABAwgAGiMAGyQAHAAAAAMIABojABskABwBAwABAQMAAQMIACEjACIkACMAAAADCAAhIwAiJAAjAAAAAwgAKSMAKiQAKwAAAAMIACkjACokACsAAAMIADAjADEkADIAAAADCAAwIwAxJAAyAgYABAkABgIGAAQJAAYFCAA3IwA6JAA7dQA4dgA5AAAAAAAFCAA3IwA6JAA7dQA4dgA5AgMAAQYABAIDAAEGAAQFCABAIwBDJABEdQBBdgBCAAAAAAAFCABAIwBDJABEdQBBdgBCAgoABQ0ACgIKAAUNAAoFCABJIwBMJABNdQBKdgBLAAAAAAAFCABJIwBMJABNdQBKdgBLAQMAAQEDAAEDCABSIwBTJABUAAAAAwgAUiMAUyQAVAIDAAEKAAUCAwABCgAFBQgAWSMAXCQAXXUAWnYAWwAAAAAABQgAWSMAXCQAXXUAWnYAWxECARIrARMuARQvARUwARcyARg0Dxk1EBo3ARs5Dxw6ER87ASA8ASE9DyVAEiZBFidCAihDAilEAipFAitGAixIAi1KDy5LFy9NAjBPDzFQGDJRAjNSAjRTDzVWGTZXHTdYAzhZAzlaAzpbAztcAzxeAz1gDz5hHj9jA0BlD0FmH0JnA0NoA0RpD0VsIEZtJEdvJUhwJUlzJUp0JUt1JUx3JU15D056Jk98JVB-D1F_J1KAASVTgQElVIIBD1WFAShWhgEsV4gBBliJAQZZjAEGWo0BBluOAQZckAEGXZIBD16TAS1flQEGYJcBD2GYAS5imQEGY5oBBmSbAQ9lngEvZp8BM2egAQVooQEFaaIBBWqjAQVrpAEFbKYBBW2oAQ9uqQE0b6sBBXCtAQ9xrgE1cq8BBXOwAQV0sQEPd7QBNni1ATx5tgEKercBCnu4AQp8uQEKfboBCn68AQp_vgEPgAG_AT2BAcEBCoIBwwEPgwHEAT6EAcUBCoUBxgEKhgHHAQ-HAcoBP4gBywFFiQHMAQmKAc0BCYsBzgEJjAHPAQmNAdABCY4B0gEJjwHUAQ-QAdUBRpEB1wEJkgHZAQ-TAdoBR5QB2wEJlQHcAQmWAd0BD5cB4AFImAHhAU6ZAeMBBJoB5AEEmwHmAQScAecBBJ0B6AEEngHqAQSfAewBD6AB7QFPoQHvAQSiAfEBD6MB8gFQpAHzAQSlAfQBBKYB9QEPpwH4AVGoAfkBVakB-gEIqgH7AQirAfwBCKwB_QEIrQH-AQiuAYACCK8BggIPsAGDAlaxAYUCCLIBhwIPswGIAle0AYkCCLUBigIItgGLAg-3AY4CWLgBjwJe"
};
async function decodeBase64AsWasm(wasmBase64) {
  const { Buffer: Buffer2 } = await import("buffer");
  const wasmArray = Buffer2.from(wasmBase64, "base64");
  return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
  getRuntime: async () => await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.mjs"),
  getQueryCompilerWasmModule: async () => {
    const { wasm } = await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.mjs");
    return await decodeBase64AsWasm(wasm);
  },
  importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
  return runtime2.getPrismaClient(config);
}

// generated/prisma/internal/prismaNamespace.ts
var prismaNamespace_exports = {};
__export(prismaNamespace_exports, {
  AccountScalarFieldEnum: () => AccountScalarFieldEnum2,
  AnyNull: () => AnyNull4,
  CategoryScalarFieldEnum: () => CategoryScalarFieldEnum2,
  DbNull: () => DbNull4,
  Decimal: () => Decimal4,
  JsonNull: () => JsonNull4,
  MealScalarFieldEnum: () => MealScalarFieldEnum2,
  ModelName: () => ModelName2,
  NullTypes: () => NullTypes4,
  NullsOrder: () => NullsOrder2,
  OrderItemScalarFieldEnum: () => OrderItemScalarFieldEnum2,
  OrderScalarFieldEnum: () => OrderScalarFieldEnum2,
  PrismaClientInitializationError: () => PrismaClientInitializationError2,
  PrismaClientKnownRequestError: () => PrismaClientKnownRequestError2,
  PrismaClientRustPanicError: () => PrismaClientRustPanicError2,
  PrismaClientUnknownRequestError: () => PrismaClientUnknownRequestError2,
  PrismaClientValidationError: () => PrismaClientValidationError2,
  ProviderProfileScalarFieldEnum: () => ProviderProfileScalarFieldEnum2,
  QueryMode: () => QueryMode2,
  ReviewScalarFieldEnum: () => ReviewScalarFieldEnum2,
  SessionScalarFieldEnum: () => SessionScalarFieldEnum2,
  SortOrder: () => SortOrder2,
  Sql: () => Sql2,
  TransactionIsolationLevel: () => TransactionIsolationLevel2,
  UserScalarFieldEnum: () => UserScalarFieldEnum2,
  VerificationScalarFieldEnum: () => VerificationScalarFieldEnum2,
  defineExtension: () => defineExtension,
  empty: () => empty2,
  getExtensionContext: () => getExtensionContext,
  join: () => join2,
  prismaVersion: () => prismaVersion,
  raw: () => raw2,
  sql: () => sql
});
init_esm_shims();
import * as runtime3 from "@prisma/client/runtime/client";
var PrismaClientKnownRequestError2 = runtime3.PrismaClientKnownRequestError;
var PrismaClientUnknownRequestError2 = runtime3.PrismaClientUnknownRequestError;
var PrismaClientRustPanicError2 = runtime3.PrismaClientRustPanicError;
var PrismaClientInitializationError2 = runtime3.PrismaClientInitializationError;
var PrismaClientValidationError2 = runtime3.PrismaClientValidationError;
var sql = runtime3.sqltag;
var empty2 = runtime3.empty;
var join2 = runtime3.join;
var raw2 = runtime3.raw;
var Sql2 = runtime3.Sql;
var Decimal4 = runtime3.Decimal;
var getExtensionContext = runtime3.Extensions.getExtensionContext;
var prismaVersion = {
  client: "7.5.0",
  engine: "280c870be64f457428992c43c1f6d557fab6e29e"
};
var NullTypes4 = {
  DbNull: runtime3.NullTypes.DbNull,
  JsonNull: runtime3.NullTypes.JsonNull,
  AnyNull: runtime3.NullTypes.AnyNull
};
var DbNull4 = runtime3.DbNull;
var JsonNull4 = runtime3.JsonNull;
var AnyNull4 = runtime3.AnyNull;
var ModelName2 = {
  User: "User",
  Session: "Session",
  Account: "Account",
  Verification: "Verification",
  Category: "Category",
  Meal: "Meal",
  Order: "Order",
  OrderItem: "OrderItem",
  ProviderProfile: "ProviderProfile",
  Review: "Review"
};
var TransactionIsolationLevel2 = runtime3.makeStrictEnum({
  ReadUncommitted: "ReadUncommitted",
  ReadCommitted: "ReadCommitted",
  RepeatableRead: "RepeatableRead",
  Serializable: "Serializable"
});
var UserScalarFieldEnum2 = {
  id: "id",
  name: "name",
  email: "email",
  emailVerified: "emailVerified",
  image: "image",
  role: "role",
  status: "status",
  phone: "phone",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var SessionScalarFieldEnum2 = {
  id: "id",
  expiresAt: "expiresAt",
  token: "token",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
  ipAddress: "ipAddress",
  userAgent: "userAgent",
  userId: "userId"
};
var AccountScalarFieldEnum2 = {
  id: "id",
  accountId: "accountId",
  providerId: "providerId",
  userId: "userId",
  accessToken: "accessToken",
  refreshToken: "refreshToken",
  idToken: "idToken",
  accessTokenExpiresAt: "accessTokenExpiresAt",
  refreshTokenExpiresAt: "refreshTokenExpiresAt",
  scope: "scope",
  password: "password",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var VerificationScalarFieldEnum2 = {
  id: "id",
  identifier: "identifier",
  value: "value",
  expiresAt: "expiresAt",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var CategoryScalarFieldEnum2 = {
  id: "id",
  name: "name",
  slug: "slug",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var MealScalarFieldEnum2 = {
  id: "id",
  providerId: "providerId",
  categoryId: "categoryId",
  name: "name",
  description: "description",
  price: "price",
  image: "image",
  isAvailable: "isAvailable",
  calories: "calories",
  ingredients: "ingredients",
  cuisine: "cuisine",
  dietary: "dietary",
  mealType: "mealType",
  spiceLevel: "spiceLevel",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var OrderScalarFieldEnum2 = {
  id: "id",
  orderNumber: "orderNumber",
  userId: "userId",
  providerId: "providerId",
  totalAmount: "totalAmount",
  status: "status",
  address: "address",
  paymentType: "paymentType",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var OrderItemScalarFieldEnum2 = {
  id: "id",
  orderId: "orderId",
  mealId: "mealId",
  price: "price",
  quantity: "quantity"
};
var ProviderProfileScalarFieldEnum2 = {
  id: "id",
  userId: "userId",
  shopName: "shopName",
  description: "description",
  address: "address",
  phone: "phone",
  isOpen: "isOpen",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var ReviewScalarFieldEnum2 = {
  id: "id",
  userId: "userId",
  mealId: "mealId",
  rating: "rating",
  comment: "comment",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var SortOrder2 = {
  asc: "asc",
  desc: "desc"
};
var QueryMode2 = {
  default: "default",
  insensitive: "insensitive"
};
var NullsOrder2 = {
  first: "first",
  last: "last"
};
var defineExtension = runtime3.Extensions.defineExtension;

// generated/prisma/client.ts
var $Enums2 = __toESM(require_enums());
__reExport(client_exports, __toESM(require_enums()));
globalThis["__dirname"] = path3.dirname(fileURLToPath2(import.meta.url));
var PrismaClient = getPrismaClientClass();

// src/utils/prisma.ts
var connectionString = `${process.env.DATABASE_URL}`;
var adapter = new PrismaPg({ connectionString });
var prisma = new PrismaClient({ adapter });

// src/utils/auth.ts
var auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql"
  }),
  baseURL: process.env.BETTER_AUTH_URL,
  trustedOrigins: [process.env.FRONTEND_URL],
  advanced: {
    crossSubdomainCookies: {
      enabled: true
    },
    defaultCookieAttributes: {
      sameSite: "none",
      // cross-origin এর জন্য জরুরি
      secure: true,
      // HTTPS required
      partitioned: true
      // Chrome-এর CHIPS support
    }
  },
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
    requireEmailVerification: true
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }
  },
  // email verification
  emailVerification: {
    sendOnSignUp: true,
    sendVerificationEmail: async ({ user, url, token }, request) => {
      try {
        const verificationUrl = `${process.env.FRONTEND_URL}/verify-email?token=${token}`;
        const info = await transporter.sendMail({
          from: `"Food Hub" <${process.env.EMAIL_USER}>`,
          to: user.email,
          subject: "Please verify your email for Food Hub",
          html: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Email Verification</title>
    <style>
      body {
        margin: 0;
        padding: 0;
        background-color: #f4f6f8;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Oxygen, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif;
      }
      .container {
        width: 100%;
        padding: 30px 0;
      }
      .card {
        max-width: 600px;
        margin: 0 auto;
        background: #ffffff;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        overflow: hidden;
      }
      .header {
        background: #0f172a;
        color: #ffffff;
        padding: 20px 30px;
        font-size: 20px;
        font-weight: 600;
      }
      .content {
        padding: 30px;
        color: #334155;
        font-size: 15px;
        line-height: 1.6;
      }
      .btn-wrapper {
        text-align: center;
        margin: 30px 0;
      }
      .btn {
        background-color: #2563eb;
        color: #ffffff !important;
        text-decoration: none;
        padding: 12px 28px;
        border-radius: 6px;
        font-size: 15px;
        font-weight: 600;
        display: inline-block;
      }
      .btn:hover {
        background-color: #1d4ed8;
      }
      .footer {
        padding: 20px 30px;
        background: #f8fafc;
        font-size: 12px;
        color: #64748b;
        text-align: center;
      }
      .link {
        word-break: break-all;
        color: #2563eb;
        font-size: 13px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="card">
        <div class="header">Verify your email</div>

        <div class="content">
          <p>Hi <strong>${user.name}</strong>,</p>

          <p>
            Thanks for signing up! Please confirm your email address by clicking
            the button below. This helps us make sure your account is secure.
          </p>

          <div class="btn-wrapper">
            <a href="${verificationUrl}" class="btn">
              Verify Email Address
            </a>
          </div>

          <p>
            If the button doesn\u2019t work, copy and paste the following link into
            your browser:
          </p>

          <p class="link">${verificationUrl}</p>

          <p>
            This verification link will expire soon. If you didn\u2019t create an
            account, you can safely ignore this email.
          </p>

          <p>
            Regards,<br />
            <strong>NexaLogic Tech Team</strong>
          </p>
        </div>

        <div class="footer">
          \xA9 ${(/* @__PURE__ */ new Date()).getFullYear().toString()} NexaLogic Tech. All rights reserved.<br />
          You\u2019re receiving this email because you created an account.
        </div>
      </div>
    </div>
  </body>
</html>
`
        });
        console.log(`${info.messageId}`);
      } catch (error) {
        console.log("email send faield", error);
        throw error;
      }
    }
  },
  // extend with additional models or fields as needed
  user: {
    additionalFields: {
      role: {
        type: "string",
        required: false,
        default: UserRole.customer
      },
      phone: {
        type: "string",
        required: false
      },
      status: {
        type: "string",
        required: false,
        default: UserStatus.active
      }
    }
  },
  // before hooks for custom logic inactive users can't login
  hooks: {
    before: createAuthMiddleware(async (ctx) => {
      if (ctx?.path === "/sign-in/email") {
        const { email } = ctx?.body;
        const user = await prisma.user.findUnique({
          where: { email }
        });
        if (user?.status === UserStatus.inactive) {
          throw new APIError("BAD_REQUEST", {
            message: "Your account is inactive. Please contact support.",
            statusCode: 400
          });
        }
      }
    })
  }
});

// src/app/errors/ApiError.ts
init_esm_shims();
var ApiError = class extends Error {
  statusCode;
  errors;
  constructor(statusCode, message, errors, stack = "") {
    super(message);
    this.statusCode = statusCode;
    this.errors = errors ? errors : message;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
};
var ApiError_default = ApiError;

// src/app/middleware/Auth.ts
var authMiddleware = (...roles) => {
  return async (req, res, next) => {
    try {
      const headers = fromNodeHeaders(req.headers);
      const session = await auth.api.getSession({ headers });
      if (!session || !session.user) {
        throw new ApiError_default(
          StatusCodes3.UNAUTHORIZED,
          "Unauthorized! Please log in to access this resource."
        );
      }
      if (session.user.emailVerified === false) {
        throw new ApiError_default(
          StatusCodes3.FORBIDDEN,
          "Please verify your email to access this resource."
        );
      }
      if (session.user.status === browser_exports.UserStatus.inactive) {
        throw new ApiError_default(
          StatusCodes3.FORBIDDEN,
          "Your account has been blocked. Please contact support."
        );
      }
      req.user = {
        id: session.user.id,
        name: session.user.name,
        email: session.user.email,
        role: session.user.role,
        phone: session.user.phone,
        status: session.user.status,
        emailVerified: session.user.emailVerified,
        createdAt: session.user.createdAt,
        updatedAt: session.user.updatedAt
      };
      if (roles.length && !roles.includes(req?.user?.role)) {
        throw new ApiError_default(
          StatusCodes3.FORBIDDEN,
          "Access Forbidden! You don't have permission."
        );
      }
      next();
    } catch (err) {
      next(err);
    }
  };
};
var Auth_default = authMiddleware;

// src/app/middleware/ValidateRequest.ts
init_esm_shims();
var validateRequest = (schema) => async (req, res, next) => {
  try {
    await schema.parseAsync({
      body: req.body,
      params: req.params,
      query: req.query
    });
    return next();
  } catch (err) {
    next(err);
  }
};
var ValidateRequest_default = validateRequest;

// src/app/modules/category/category.controller.ts
init_esm_shims();
import { StatusCodes as StatusCodes5 } from "http-status-codes";

// src/shared/catchAsync.ts
init_esm_shims();
var catchAsync = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (err) {
      next(err);
    }
  };
};
var catchAsync_default = catchAsync;

// src/shared/sendResponse.ts
init_esm_shims();
var sendResponse = (res, jsonData) => {
  const response = {
    success: jsonData.success
  };
  if (jsonData.message) response.message = jsonData.message;
  if (jsonData.token) response.token = jsonData.token;
  if (jsonData.meta) response.meta = jsonData.meta;
  if (jsonData.data !== void 0 && jsonData.data !== null)
    response.data = jsonData.data;
  res.status(jsonData.statusCode).json(response);
};
var sendResponse_default = sendResponse;

// src/app/modules/category/category.service.ts
init_esm_shims();
import { StatusCodes as StatusCodes4 } from "http-status-codes";
import slugify from "slugify";
var createCategory = async (payload) => {
  const { name } = payload;
  const data = await prisma.category.create({
    data: {
      name,
      slug: slugify(name, {
        replacement: "-",
        lower: true,
        trim: true,
        remove: /[*+~.()'"!:@]/g,
        strict: true
      })
    }
  });
  if (!data) {
    throw new ApiError_default(StatusCodes4.BAD_REQUEST, "Failed to create category");
  }
  return data;
};
var getAllCategories = async () => {
  const categories = await prisma.category.findMany({
    include: {
      _count: {
        select: { meals: true }
      }
    },
    orderBy: {
      createdAt: "desc"
    }
  });
  return categories;
};
var updateCategory = async (id, payload) => {
  const { name } = payload;
  const category = await prisma.category.findUnique({
    where: { id }
  });
  if (!category) {
    throw new ApiError_default(StatusCodes4.NOT_FOUND, "Category not found");
  }
  const data = await prisma.category.update({
    where: { id },
    data: {
      name,
      slug: slugify(name, {
        replacement: "-",
        lower: true,
        trim: true,
        remove: /[*+~.()'"!:@]/g,
        strict: true
      })
    }
  });
  return data;
};
var deleteCategory = async (id) => {
  const category = await prisma.category.findUnique({
    where: { id },
    include: {
      _count: {
        select: { meals: true }
      }
    }
  });
  if (!category) {
    throw new ApiError_default(StatusCodes4.NOT_FOUND, "Category not found");
  }
  if (category._count.meals > 0) {
    throw new ApiError_default(
      StatusCodes4.BAD_REQUEST,
      "Cannot delete category with associated meals"
    );
  }
  await prisma.category.delete({
    where: { id }
  });
  return { message: "Category deleted successfully" };
};
var CategoryService = {
  createCategory,
  getAllCategories,
  updateCategory,
  deleteCategory
};

// src/app/modules/category/category.controller.ts
var createCategory2 = catchAsync_default(async (req, res) => {
  const result = await CategoryService.createCategory(req.body);
  sendResponse_default(res, {
    statusCode: StatusCodes5.CREATED,
    success: true,
    message: "Category created successfully",
    data: result
  });
});
var getAllCategories2 = catchAsync_default(async (req, res) => {
  const result = await CategoryService.getAllCategories();
  sendResponse_default(res, {
    statusCode: StatusCodes5.OK,
    success: true,
    message: "Categories retrieved successfully",
    data: result
  });
});
var updateCategory2 = catchAsync_default(async (req, res) => {
  const { id } = req.params;
  const result = await CategoryService.updateCategory(id, req.body);
  sendResponse_default(res, {
    statusCode: StatusCodes5.OK,
    success: true,
    message: "Category updated successfully",
    data: result
  });
});
var deleteCategory2 = catchAsync_default(async (req, res) => {
  const { id } = req.params;
  const result = await CategoryService.deleteCategory(id);
  sendResponse_default(res, {
    statusCode: StatusCodes5.OK,
    success: true,
    message: result.message,
    data: null
  });
});
var CategoryController = {
  createCategory: createCategory2,
  getAllCategories: getAllCategories2,
  updateCategory: updateCategory2,
  deleteCategory: deleteCategory2
};

// src/app/modules/category/category.validation.ts
init_esm_shims();
import z from "zod";
var CategoryValidation = {
  categoryZodSchema: z.object({
    body: z.object({
      name: z.string().min(2, "Name must be at least 2 characters long")
    })
  })
};

// src/app/modules/category/category.route.ts
var router = express.Router();
router.post(
  "/",
  Auth_default(UserRole.admin),
  ValidateRequest_default(CategoryValidation.categoryZodSchema),
  CategoryController.createCategory
);
router.get("/", CategoryController.getAllCategories);
router.patch(
  "/:id",
  Auth_default(UserRole.admin),
  ValidateRequest_default(CategoryValidation.categoryZodSchema),
  CategoryController.updateCategory
);
router.delete(
  "/:id",
  Auth_default(UserRole.admin),
  CategoryController.deleteCategory
);
var CategoryRoutes = router;

// src/app/modules/meal/meal.route.ts
init_esm_shims();
import express2 from "express";

// src/app/modules/meal/meal.controller.ts
init_esm_shims();
import { StatusCodes as StatusCodes7 } from "http-status-codes";

// src/helper/PaginationSortingHelper.ts
init_esm_shims();
var paginationSortingHelper = (options) => {
  const page = Number(options.page) || 1;
  const limit = Number(options.limit) || 10;
  const skip = (page - 1) * limit;
  const sortBy = options.sortBy || "createdAt";
  const sortOrder = options.sortOrder || "desc";
  return {
    page,
    limit,
    skip,
    sortBy,
    sortOrder
  };
};
var PaginationSortingHelper_default = paginationSortingHelper;

// src/app/modules/meal/meal.service.ts
init_esm_shims();
import { StatusCodes as StatusCodes6 } from "http-status-codes";

// src/helper/QueryHelper.ts
init_esm_shims();
var buildMealQueryCondition = (payload) => {
  const andConditions = [];
  if (payload.search) {
    andConditions.push({
      OR: [
        {
          name: {
            contains: payload.search,
            mode: "insensitive"
          }
        },
        {
          description: {
            contains: payload.search,
            mode: "insensitive"
          }
        }
      ]
    });
  }
  if (payload.cuisine) {
    andConditions.push({
      cuisine: {
        equals: payload.cuisine,
        mode: "insensitive"
      }
    });
  }
  if (payload.dietary) {
    andConditions.push({
      dietary: {
        has: payload.dietary
        // ["halal"]
      }
    });
  }
  if (payload.mealType) {
    andConditions.push({
      mealType: {
        equals: payload.mealType,
        mode: "insensitive"
      }
    });
  }
  if (payload.spiceLevel) {
    andConditions.push({
      spiceLevel: {
        equals: payload.spiceLevel,
        mode: "insensitive"
      }
    });
  }
  return andConditions.length > 0 ? { AND: andConditions } : {};
};

// src/app/modules/meal/meal.service.ts
var createMeal = async (payload) => {
  const {
    name,
    calories,
    ingredients,
    description,
    price,
    image,
    isAvailable,
    categoryId,
    dietary,
    cuisine,
    mealType,
    spiceLevel,
    userId
  } = payload;
  const result = await prisma.$transaction(async (tx) => {
    const providerFind = await tx.providerProfile.findUnique({
      where: { userId }
    });
    console.log(providerFind);
    if (!providerFind) {
      throw new ApiError_default(
        StatusCodes6.NOT_FOUND,
        "Provider profile not found for this user"
      );
    }
    const data = await tx.meal.create({
      data: {
        name,
        calories: Number(calories),
        ingredients,
        description: description ?? null,
        price: Number(price),
        image: image ?? null,
        isAvailable,
        categoryId,
        providerId: providerFind.id,
        dietary,
        cuisine,
        mealType,
        spiceLevel
      }
    });
    return data;
  });
  return result;
};
var getAllMeals = async (payload) => {
  const meals = await prisma.meal.findMany({
    take: Number(payload.limit),
    skip: Number(payload.skip),
    where: buildMealQueryCondition(payload),
    ...payload.sortBy && { orderBy: { [payload.sortBy]: payload.sortOrder } }
  });
  const total = await prisma.meal.count({
    where: buildMealQueryCondition(payload)
  });
  if (!meals || meals.length === 0) {
    throw new ApiError_default(StatusCodes6.NOT_FOUND, "No meals found");
  }
  const totalPages = Math.ceil(total / Number(payload.limit));
  return {
    data: meals,
    pagination: {
      total,
      page: payload.page || 1,
      limit: payload.limit || 10,
      totalPages
    }
  };
};
var getMealsById = async (mealId) => {
  const data = await prisma.meal.findUnique({
    where: { id: mealId },
    include: {
      reviews: true,
      category: true,
      provider: {
        select: {
          id: true,
          shopName: true,
          address: true
        }
      }
    }
  });
  if (!data) {
    throw new ApiError_default(StatusCodes6.NOT_FOUND, "Meal not found");
  }
  return data;
};
var getProviderMeals = async (userId) => {
  const providerProfile = await prisma.providerProfile.findUnique({
    where: { userId }
  });
  if (!providerProfile) {
    throw new ApiError_default(StatusCodes6.FORBIDDEN, "Provider profile not found");
  }
  const meals = await prisma.meal.findMany({
    where: { providerId: providerProfile.id },
    include: {
      category: true,
      reviews: true,
      provider: true
    },
    orderBy: {
      createdAt: "desc"
    }
  });
  return {
    data: meals,
    pagination: {
      total: meals.length
    }
  };
};
var updateMeal = async (mealId, userId, payload) => {
  const providerProfile = await prisma.providerProfile.findUnique({
    where: { userId }
  });
  if (!providerProfile) {
    throw new ApiError_default(StatusCodes6.FORBIDDEN, "Provider profile not found");
  }
  const existingMeal = await prisma.meal.findFirst({
    where: {
      id: mealId,
      providerId: providerProfile.id
    }
  });
  if (!existingMeal) {
    throw new ApiError_default(StatusCodes6.NOT_FOUND, "Meal not found");
  }
  const updatedMeal = await prisma.meal.update({
    where: { id: mealId },
    data: {
      ...payload,
      updatedAt: /* @__PURE__ */ new Date()
    }
  });
  return updatedMeal;
};
var deleteMeal = async (mealId, userId) => {
  const providerProfile = await prisma.providerProfile.findUnique({
    where: { userId }
  });
  if (!providerProfile) {
    throw new ApiError_default(StatusCodes6.FORBIDDEN, "Provider profile not found");
  }
  const existingMeal = await prisma.meal.findFirst({
    where: {
      id: mealId,
      providerId: providerProfile.id
    }
  });
  if (!existingMeal) {
    throw new ApiError_default(StatusCodes6.NOT_FOUND, "Meal not found");
  }
  const runningOrders = await prisma.order.findFirst({
    where: {
      status: {
        in: ["PENDING", "ACCEPTED", "COOKING", "ON_THE_WAY"]
      },
      items: {
        some: {
          mealId
        }
      }
    }
  });
  if (runningOrders) {
    throw new ApiError_default(
      StatusCodes6.BAD_REQUEST,
      "Cannot delete meal with running orders"
    );
  }
  const deletedMeal = await prisma.meal.delete({
    where: { id: mealId }
  });
  return deletedMeal;
};
var getProviderOrders = async (userId) => {
  const providerProfile = await prisma.providerProfile.findUnique({
    where: { userId }
  });
  if (!providerProfile) {
    throw new ApiError_default(StatusCodes6.FORBIDDEN, "Provider profile not found");
  }
  const orders = await prisma.order.findMany({
    where: { providerId: providerProfile.id },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true
        }
      },
      items: {
        include: {
          meal: {
            select: {
              id: true,
              name: true,
              price: true,
              image: true
            }
          }
        }
      }
    },
    orderBy: {
      createdAt: "desc"
    }
  });
  return {
    data: orders,
    pagination: {
      total: orders.length
    }
  };
};
var getPopularMeals = async () => {
  const meals = await prisma.meal.findMany({
    orderBy: {
      reviews: {
        _count: "desc"
      }
    },
    take: 8,
    include: {
      reviews: true,
      category: true,
      provider: {
        select: {
          id: true,
          shopName: true,
          address: true
        }
      }
    }
  });
  return {
    data: meals,
    pagination: {
      total: meals.length
    }
  };
};
var getMealTypes = async () => {
  const mealTypes = await prisma.meal.findMany({
    distinct: ["mealType"],
    select: {
      mealType: true
    }
  });
  return mealTypes.map((meal) => meal.mealType).filter((type) => type !== null);
};
var getDietaryOptions = async () => {
  const dietaryOptions = await prisma.meal.findMany({
    distinct: ["dietary"],
    select: {
      dietary: true
    }
  });
  const dietarySet = /* @__PURE__ */ new Set();
  dietaryOptions.forEach((meal) => {
    meal.dietary.forEach((option) => dietarySet.add(option));
  });
  return Array.from(dietarySet);
};
var getCuisineOptions = async () => {
  const cuisines = await prisma.meal.findMany({
    distinct: ["cuisine"],
    select: {
      cuisine: true
    }
  });
  return cuisines.map((meal) => meal.cuisine).filter((cuisine) => cuisine !== null);
};
var updateOrderStatus = async (userId, orderId, status) => {
  const providerProfile = await prisma.providerProfile.findUnique({
    where: { userId }
  });
  if (!providerProfile) {
    throw new ApiError_default(StatusCodes6.FORBIDDEN, "Provider profile not found");
  }
  const existingOrder = await prisma.order.findFirst({
    where: {
      id: orderId,
      providerId: providerProfile.id
    }
  });
  if (!existingOrder) {
    throw new ApiError_default(StatusCodes6.NOT_FOUND, "Order not found");
  }
  const updatedOrder = await prisma.order.update({
    where: { id: orderId },
    data: {
      status,
      updatedAt: /* @__PURE__ */ new Date()
    }
  });
  return updatedOrder;
};
var MealService = {
  createMeal,
  getAllMeals,
  getMealsById,
  updateMeal,
  deleteMeal,
  getMealTypes,
  getDietaryOptions,
  getCuisineOptions,
  getProviderMeals,
  getProviderOrders,
  updateOrderStatus,
  getPopularMeals
};

// src/app/modules/meal/meal.controller.ts
var createMeal2 = catchAsync_default(async (req, res) => {
  const userId = req.user?.id;
  console.log(req.body);
  const result = await MealService.createMeal({ ...req.body, userId });
  sendResponse_default(res, {
    statusCode: StatusCodes7.CREATED,
    success: true,
    message: "Meal created successfully",
    data: result
  });
});
var getAllMeals2 = catchAsync_default(async (req, res) => {
  const payload = req.query;
  const { page, limit, skip, sortBy, sortOrder } = PaginationSortingHelper_default(payload);
  const result = await MealService.getAllMeals({
    ...payload,
    page,
    limit,
    skip,
    ...sortBy && { sortBy },
    ...sortOrder && { sortOrder }
  });
  sendResponse_default(res, {
    statusCode: StatusCodes7.OK,
    success: true,
    message: "Meals retrieved successfully",
    data: result
  });
});
var getMealsById2 = catchAsync_default(async (req, res) => {
  const mealId = req.params.id;
  const result = await MealService.getMealsById(mealId);
  sendResponse_default(res, {
    statusCode: StatusCodes7.OK,
    success: true,
    message: "Meal retrieved successfully",
    data: result
  });
});
var getProviderMeals2 = catchAsync_default(async (req, res) => {
  const userId = req.user?.id;
  const result = await MealService.getProviderMeals(userId);
  sendResponse_default(res, {
    statusCode: StatusCodes7.OK,
    success: true,
    message: "Provider meals retrieved successfully",
    data: result
  });
});
var updateMeal2 = catchAsync_default(async (req, res) => {
  const mealId = req.params.id;
  const userId = req.user?.id;
  const result = await MealService.updateMeal(
    mealId,
    userId,
    req.body
  );
  sendResponse_default(res, {
    statusCode: StatusCodes7.OK,
    success: true,
    message: "Meal updated successfully",
    data: result
  });
});
var deleteMeal2 = catchAsync_default(async (req, res) => {
  const mealId = req.params.id;
  const userId = req.user?.id;
  const result = await MealService.deleteMeal(mealId, userId);
  sendResponse_default(res, {
    statusCode: StatusCodes7.OK,
    success: true,
    message: "Meal deleted successfully",
    data: result
  });
});
var getProviderOrders2 = catchAsync_default(async (req, res) => {
  const userId = req.user?.id;
  const result = await MealService.getProviderOrders(userId);
  sendResponse_default(res, {
    statusCode: StatusCodes7.OK,
    success: true,
    message: "Provider orders retrieved successfully",
    data: result
  });
});
var updateOrderStatus2 = catchAsync_default(async (req, res) => {
  const userId = req.user?.id;
  const orderId = req.params.id;
  const status = req.body.status;
  const result = await MealService.updateOrderStatus(
    userId,
    orderId,
    status
  );
  sendResponse_default(res, {
    statusCode: StatusCodes7.OK,
    success: true,
    message: "Order status updated successfully",
    data: result
  });
});
var getMealTypes2 = catchAsync_default(async (req, res) => {
  const result = await MealService.getMealTypes();
  sendResponse_default(res, {
    statusCode: StatusCodes7.OK,
    success: true,
    message: "Meal types retrieved successfully",
    data: result
  });
});
var getDietaryOptions2 = catchAsync_default(async (req, res) => {
  const result = await MealService.getDietaryOptions();
  sendResponse_default(res, {
    statusCode: StatusCodes7.OK,
    success: true,
    message: "Dietary options retrieved successfully",
    data: result
  });
});
var getCuisineOptions2 = catchAsync_default(async (req, res) => {
  const result = await MealService.getCuisineOptions();
  sendResponse_default(res, {
    statusCode: StatusCodes7.OK,
    success: true,
    message: "Cuisine options retrieved successfully",
    data: result
  });
});
var getPopularMeals2 = catchAsync_default(async (req, res) => {
  const result = await MealService.getPopularMeals();
  sendResponse_default(res, {
    statusCode: StatusCodes7.OK,
    success: true,
    message: "Popular meals retrieved successfully",
    data: result
  });
});
var MealController = {
  createMeal: createMeal2,
  getAllMeals: getAllMeals2,
  getMealsById: getMealsById2,
  updateMeal: updateMeal2,
  deleteMeal: deleteMeal2,
  getMealTypes: getMealTypes2,
  getDietaryOptions: getDietaryOptions2,
  getCuisineOptions: getCuisineOptions2,
  getProviderMeals: getProviderMeals2,
  getProviderOrders: getProviderOrders2,
  updateOrderStatus: updateOrderStatus2,
  getPopularMeals: getPopularMeals2
};

// src/app/modules/meal/meal.validation.ts
init_esm_shims();
import z2 from "zod";
var MealValidation = {
  mealCreateZodSchema: z2.object({
    body: z2.object({
      name: z2.string().min(2, "Name must be at least 2 characters long"),
      calories: z2.number().min(0, "Calories must be a positive number"),
      ingredients: z2.array(z2.string()).min(1, "At least one ingredient is required"),
      dietary: z2.array(z2.string()).min(1, "At least one dietary preference is required"),
      cuisine: z2.string().min(2, "Cuisine must be at least 2 characters long").optional(),
      description: z2.string().optional(),
      price: z2.number().min(0, "Price must be a positive number"),
      image: z2.string().url("Image must be a valid URL").optional(),
      isAvailable: z2.boolean().optional().default(true),
      categoryId: z2.string().uuid("Category ID must be a valid UUID"),
      mealType: z2.string().optional(),
      spiceLevel: z2.string().optional()
    })
  }),
  mealUpdateZodSchema: z2.object({
    body: z2.object({
      name: z2.string().min(2, "Name must be at least 2 characters long").optional(),
      calories: z2.number().min(0, "Calories must be a positive number").optional(),
      ingredients: z2.array(z2.string()).min(1, "At least one ingredient is required").optional(),
      description: z2.string().optional(),
      price: z2.number().min(0, "Price must be a positive number").optional(),
      image: z2.string().url("Image must be a valid URL").optional(),
      isAvailable: z2.boolean().optional(),
      categoryId: z2.string().uuid("Category ID must be a valid UUID").optional()
    })
  })
};

// src/app/modules/meal/meal.route.ts
var router2 = express2.Router();
router2.get("/", MealController.getAllMeals);
router2.get("/:id", MealController.getMealsById);
router2.get("/types/list", MealController.getMealTypes);
router2.get("/dietary-options/list", MealController.getDietaryOptions);
router2.get("/cuisine-options/list", MealController.getCuisineOptions);
router2.post(
  "/",
  Auth_default(UserRole.provider),
  ValidateRequest_default(MealValidation.mealCreateZodSchema),
  MealController.createMeal
);
router2.get(
  "/provider/meals",
  Auth_default(UserRole.provider),
  MealController.getProviderMeals
);
router2.get("/popular/list", MealController.getPopularMeals);
router2.put(
  "/:id",
  Auth_default(UserRole.provider),
  ValidateRequest_default(MealValidation.mealUpdateZodSchema),
  MealController.updateMeal
);
router2.get(
  "/provider/orders",
  Auth_default(UserRole.provider),
  MealController.getProviderOrders
);
router2.put(
  "/orders/:id/status",
  Auth_default(UserRole.provider),
  MealController.updateOrderStatus
);
router2.delete(
  "/:id",
  Auth_default(UserRole.provider),
  MealController.deleteMeal
);
var MealRoutes = router2;

// src/app/modules/order/order.route.ts
init_esm_shims();
import express3 from "express";

// src/app/modules/order/order.controller.ts
init_esm_shims();
import { StatusCodes as StatusCodes9 } from "http-status-codes";

// src/app/modules/order/order.service.ts
init_esm_shims();
import { StatusCodes as StatusCodes8 } from "http-status-codes";
var createOrder = async (payload, customerId) => {
  const provider = await prisma.providerProfile.findFirst({
    where: {
      id: payload.providerId
    },
    include: {
      user: {
        select: {
          status: true
        }
      }
    }
  });
  if (!provider) {
    throw new ApiError_default(StatusCodes8.NOT_FOUND, "Provider not found or inactive");
  }
  if (provider.user.status === "inactive") {
    throw new ApiError_default(
      StatusCodes8.FORBIDDEN,
      "This provider is currently inactive. Orders cannot be placed."
    );
  }
  const mealsId = payload.items.map((item) => item.mealId);
  const meals = await prisma.meal.findMany({
    where: {
      id: { in: mealsId }
    }
  });
  if (meals.length !== payload.items.length) {
    throw new ApiError_default(StatusCodes8.BAD_REQUEST, "Invalid meal detected");
  }
  let totalPrice = 0;
  const orderItems = payload.items.map((item) => {
    const meal = meals.find((m) => m.id === item.mealId);
    totalPrice += meal.price * item.quantity;
    return {
      mealId: meal.id,
      quantity: item.quantity,
      price: meal.price
    };
  });
  const orderNumber = `ORD-${Date.now()}`;
  const order = await prisma.order.create({
    data: {
      orderNumber,
      userId: customerId,
      providerId: payload.providerId,
      address: payload.address,
      totalAmount: totalPrice,
      status: client_exports.OrderStatus.PENDING,
      items: {
        create: orderItems
      }
    },
    include: {
      items: {
        include: { meal: true }
      }
    }
  });
  return order;
};
var getMyOrders = async (customerId) => {
  const orders = await prisma.order.findMany({
    where: {
      userId: customerId
    },
    include: {
      items: {
        include: {
          meal: {
            select: { id: true, name: true, price: true }
          }
        }
      }
    },
    orderBy: {
      createdAt: "desc"
    }
  });
  return orders;
};
var getOrderById = async (orderId, customerId) => {
  const order = await prisma.order.findFirst({
    where: {
      id: orderId,
      userId: customerId
    },
    include: {
      items: {
        include: {
          meal: {
            include: {
              provider: { select: { id: true, shopName: true, phone: true } }
            }
          }
        }
      },
      provider: {
        select: {
          id: true,
          shopName: true,
          phone: true
        }
      }
    }
  });
  if (!order) {
    throw new ApiError_default(StatusCodes8.NOT_FOUND, "Order not found");
  }
  return order;
};
var updateOrderStatus3 = async (orderId, status, providerId) => {
  const order = await prisma.order.findFirst({
    where: {
      id: orderId,
      providerId
    }
  });
  if (!order) {
    throw new ApiError_default(StatusCodes8.NOT_FOUND, "Order not found");
  }
  const updatedOrder = await prisma.order.update({
    where: {
      id: orderId
    },
    data: {
      status
    },
    include: {
      items: {
        include: {
          meal: {
            select: { id: true, name: true, price: true }
          }
        }
      }
    }
  });
  return updatedOrder;
};
var trackOrderStatus = async (orderId, userId) => {
  const order = await prisma.order.findUnique({
    where: {
      orderNumber: orderId,
      userId
    },
    select: {
      id: true,
      status: true,
      address: true,
      totalAmount: true,
      createdAt: true,
      updatedAt: true,
      items: {
        include: {
          meal: {
            select: {
              id: true,
              name: true,
              price: true,
              image: true
            }
          }
        }
      },
      provider: {
        select: {
          id: true,
          shopName: true,
          phone: true
        }
      }
    }
  });
  if (!order) {
    throw new ApiError_default(StatusCodes8.NOT_FOUND, "Order not found");
  }
  return order;
};
var cancelOrder = async (orderId, customerId) => {
  const order = await prisma.order.findFirst({
    where: {
      id: orderId,
      userId: customerId
    }
  });
  if (!order) {
    throw new ApiError_default(StatusCodes8.NOT_FOUND, "Order not found");
  }
  if (order.status === client_exports.OrderStatus.CANCELLED) {
    throw new ApiError_default(StatusCodes8.BAD_REQUEST, "Order is already cancelled");
  }
  const updatedOrder = await prisma.order.update({
    where: {
      id: orderId
    },
    data: {
      status: client_exports.OrderStatus.CANCELLED
    },
    include: {
      items: {
        include: {
          meal: {
            select: { id: true, name: true, price: true }
          }
        }
      }
    }
  });
  return updatedOrder;
};
var getAllOrders = async () => {
  const orders = await prisma.order.findMany({
    include: {
      items: {
        include: {
          meal: {
            select: { id: true, name: true, price: true }
          }
        }
      },
      provider: {
        select: {
          id: true,
          shopName: true,
          phone: true
        }
      }
    },
    orderBy: {
      createdAt: "desc"
    }
  });
  return orders;
};
var OrderService = {
  createOrder,
  getMyOrders,
  getOrderById,
  updateOrderStatus: updateOrderStatus3,
  trackOrderStatus,
  cancelOrder,
  getAllOrders
};

// src/app/modules/order/order.controller.ts
var createOrder2 = catchAsync_default(async (req, res) => {
  const userId = req.user?.id;
  const orderData = req.body;
  const result = await OrderService.createOrder(orderData, userId);
  sendResponse_default(res, {
    statusCode: StatusCodes9.CREATED,
    success: true,
    message: "Order created successfully",
    data: result
  });
});
var getMyOrders2 = catchAsync_default(async (req, res) => {
  const userId = req.user?.id;
  const result = await OrderService.getMyOrders(userId);
  sendResponse_default(res, {
    statusCode: StatusCodes9.OK,
    success: true,
    message: "Orders retrieved successfully",
    data: result
  });
});
var getOrderById2 = catchAsync_default(async (req, res) => {
  const userId = req.user?.id;
  const orderId = req.params.id;
  const result = await OrderService.getOrderById(orderId, userId);
  sendResponse_default(res, {
    statusCode: StatusCodes9.OK,
    success: true,
    message: "Order retrieved successfully",
    data: result
  });
});
var updateOrderStatus4 = catchAsync_default(async (req, res) => {
  const orderId = req.params.id;
  const status = req.body.status;
  const providerId = req.user?.id;
  const result = await OrderService.updateOrderStatus(
    orderId,
    status,
    providerId
  );
  sendResponse_default(res, {
    statusCode: StatusCodes9.OK,
    success: true,
    message: "Order status updated successfully",
    data: result
  });
});
var trackOrderStatus2 = catchAsync_default(async (req, res) => {
  const orderId = req.params.id;
  const userId = req.user?.id;
  const result = await OrderService.trackOrderStatus(orderId, userId);
  sendResponse_default(res, {
    statusCode: StatusCodes9.OK,
    success: true,
    message: "Order status tracked successfully",
    data: result
  });
});
var cancelOrder2 = catchAsync_default(async (req, res) => {
  const orderId = req.params.id;
  const userId = req.user?.id;
  const result = await OrderService.cancelOrder(orderId, userId);
  sendResponse_default(res, {
    statusCode: StatusCodes9.OK,
    success: true,
    message: "Order cancelled successfully",
    data: result
  });
});
var getAllOrders2 = catchAsync_default(async (req, res) => {
  const result = await OrderService.getAllOrders();
  sendResponse_default(res, {
    statusCode: StatusCodes9.OK,
    success: true,
    message: "All orders retrieved successfully",
    data: result
  });
});
var OrderController = {
  createOrder: createOrder2,
  getMyOrders: getMyOrders2,
  getOrderById: getOrderById2,
  updateOrderStatus: updateOrderStatus4,
  trackOrderStatus: trackOrderStatus2,
  cancelOrder: cancelOrder2,
  getAllOrders: getAllOrders2
};

// src/app/modules/order/order.validation.ts
init_esm_shims();
import { z as z3 } from "zod";
var OrderValidation = {
  createOrderSchema: z3.object({
    body: z3.object({
      providerId: z3.string().uuid(),
      address: z3.string().min(5),
      items: z3.array(
        z3.object({
          mealId: z3.string().uuid(),
          quantity: z3.number().min(1)
        })
      ).min(1)
    })
  }),
  updateOrderStatusSchema: z3.object({
    body: z3.object({
      status: z3.enum([
        "PENDING",
        "ACCEPTED",
        "COOKING",
        "ON_THE_WAY",
        "DELIVERED",
        "CANCELLED"
      ])
    })
  })
};

// src/app/modules/order/order.route.ts
var router3 = express3.Router();
router3.get("/", Auth_default(UserRole.customer), OrderController.getMyOrders);
router3.get(
  "/:id",
  Auth_default(UserRole.customer),
  OrderController.getOrderById
);
router3.patch(
  "/status/:id",
  Auth_default(UserRole.provider),
  ValidateRequest_default(OrderValidation.updateOrderStatusSchema),
  OrderController.updateOrderStatus
);
router3.post(
  "/",
  Auth_default(UserRole.customer),
  ValidateRequest_default(OrderValidation.createOrderSchema),
  OrderController.createOrder
);
router3.get(
  "/track/:id",
  Auth_default(UserRole.customer, UserRole.provider, UserRole.admin),
  OrderController.trackOrderStatus
);
router3.patch(
  "/cancel/:id",
  Auth_default(UserRole.customer),
  OrderController.cancelOrder
);
router3.get(
  "/all/orders",
  Auth_default(UserRole.admin),
  OrderController.getAllOrders
);
var OrderRoutes = router3;

// src/app/modules/provider/provider.route.ts
init_esm_shims();
import express4 from "express";

// src/app/modules/provider/provider.controller.ts
init_esm_shims();
import { StatusCodes as StatusCodes11 } from "http-status-codes";

// src/app/modules/provider/provider.service.ts
init_esm_shims();
import { StatusCodes as StatusCodes10 } from "http-status-codes";
var createProviderProfile = async (payload) => {
  const { userId, shopName, description, address, phone, isOpen } = payload;
  const data = await prisma.$transaction(async (tx) => {
    const existingProfile = await tx.providerProfile.findUnique({
      where: { userId }
    });
    if (existingProfile) {
      throw new ApiError_default(
        StatusCodes10.CONFLICT,
        "Provider profile already exists for this user"
      );
    }
    const user = await tx.user.findUnique({
      where: { id: userId }
    });
    if (!user) {
      throw new ApiError_default(
        StatusCodes10.NOT_FOUND,
        "User not found! Cannot create provider profile"
      );
    }
    const result = await tx.providerProfile.create({
      data: {
        userId,
        shopName,
        description: description ?? null,
        address,
        phone,
        isOpen: isOpen ?? true
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            phone: true,
            role: true
          }
        }
      }
    });
    if (user && !existingProfile) {
      await tx.user.update({
        where: { id: userId },
        data: { role: "provider" }
      });
    }
    return result;
  });
  return data;
};
var getAllProviders = async () => {
  const providers = await prisma.providerProfile.findMany({
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          role: true
        }
      },
      meals: {
        select: {
          id: true,
          name: true,
          price: true,
          isAvailable: true,
          reviews: true,
          category: {
            select: {
              id: true,
              name: true
            }
          }
        }
      }
    },
    orderBy: { createdAt: "desc" }
  });
  if (!providers) {
    throw new ApiError_default(StatusCodes10.NOT_FOUND, "No providers found!");
  }
  return providers;
};
var getProviderById = async (providerId) => {
  const provider = await prisma.providerProfile.findUnique({
    where: { userId: providerId },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          role: true
        }
      },
      meals: {
        select: {
          id: true,
          name: true,
          price: true,
          isAvailable: true,
          reviews: true,
          category: {
            select: {
              id: true,
              name: true
            }
          }
        }
      }
    }
  });
  if (!provider) {
    throw new ApiError_default(
      StatusCodes10.NOT_FOUND,
      "Provider not found! Try again with valid id"
    );
  }
  return provider;
};
var ProviderService = {
  createProviderProfile,
  getAllProviders,
  getProviderById
};

// src/app/modules/provider/provider.controller.ts
var createProviderProfile2 = catchAsync_default(
  async (req, res) => {
    const userId = req.user?.id;
    const result = await ProviderService.createProviderProfile({
      ...req.body,
      userId
    });
    sendResponse_default(res, {
      statusCode: StatusCodes11.CREATED,
      success: true,
      message: "Provider profile created successfully",
      data: result
    });
  }
);
var getAllProviders2 = catchAsync_default(async (req, res) => {
  const result = await ProviderService.getAllProviders();
  sendResponse_default(res, {
    statusCode: StatusCodes11.OK,
    success: true,
    message: "Providers retrieved successfully",
    data: result
  });
});
var getProviderById2 = catchAsync_default(async (req, res) => {
  const providerId = req.params.id;
  const result = await ProviderService.getProviderById(providerId);
  sendResponse_default(res, {
    statusCode: StatusCodes11.OK,
    success: true,
    message: "Provider retrieved successfully",
    data: result
  });
});
var ProviderController = {
  createProviderProfile: createProviderProfile2,
  getAllProviders: getAllProviders2,
  getProviderById: getProviderById2
};

// src/app/modules/provider/provider.validation.ts
init_esm_shims();
import { z as z4 } from "zod";
var createProviderProfileZodSchema = z4.object({
  body: z4.object({
    shopName: z4.string().min(1, { message: "Shop name is required" }),
    description: z4.string().optional(),
    address: z4.string().min(1, { message: "Address is required" }),
    phone: z4.string().min(1, { message: "Phone number is required" }),
    isOpen: z4.boolean().optional().default(true)
  })
});
var updateProviderProfileZodSchema = z4.object({
  body: z4.object({
    shopName: z4.string().optional(),
    description: z4.string().optional(),
    address: z4.string().optional(),
    phone: z4.string().optional(),
    isOpen: z4.boolean().optional()
  })
});
var ProviderValidation = {
  createProviderProfileZodSchema,
  updateProviderProfileZodSchema
};

// src/app/modules/provider/provider.route.ts
var router4 = express4.Router();
router4.get("/", ProviderController.getAllProviders);
router4.get("/:id", ProviderController.getProviderById);
router4.post(
  "/",
  Auth_default(UserRole.provider),
  ValidateRequest_default(ProviderValidation.createProviderProfileZodSchema),
  ProviderController.createProviderProfile
);
var ProviderRoutes = router4;

// src/app/modules/review/review.routes.ts
init_esm_shims();
import express5 from "express";

// src/app/modules/review/review.controller.ts
init_esm_shims();
import { StatusCodes as StatusCodes13 } from "http-status-codes";

// src/app/modules/review/review.service.ts
init_esm_shims();
import { StatusCodes as StatusCodes12 } from "http-status-codes";
var createReview = async (data) => {
  const { userId, mealId, rating, comment } = data;
  if (rating < 1 || rating > 5) {
    throw new ApiError_default(
      StatusCodes12.BAD_REQUEST,
      "Rating must be between 1 and 5"
    );
  }
  const meal = await prisma.meal.findUnique({
    where: { id: mealId }
  });
  if (!meal) {
    throw new ApiError_default(StatusCodes12.NOT_FOUND, "Meal not found");
  }
  const existingReview = await prisma.review.findFirst({
    where: {
      userId,
      mealId
    }
  });
  if (existingReview) {
    throw new ApiError_default(
      StatusCodes12.BAD_REQUEST,
      "You have already reviewed this meal"
    );
  }
  const hasOrdered = await prisma.order.findFirst({
    where: {
      userId,
      status: "DELIVERED",
      items: {
        some: {
          mealId
        }
      }
    }
  });
  if (!hasOrdered) {
    throw new ApiError_default(
      StatusCodes12.BAD_REQUEST,
      "You can only review meals you have ordered and received"
    );
  }
  const review = await prisma.review.create({
    data: {
      userId,
      mealId,
      rating,
      comment: comment || null
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true
        }
      },
      meal: {
        select: {
          id: true,
          name: true
        }
      }
    }
  });
  return review;
};
var getMealReviews = async (mealId) => {
  const reviews = await prisma.review.findMany({
    where: { mealId },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true
        }
      }
    },
    orderBy: {
      createdAt: "desc"
    }
  });
  const averageRating = reviews.length > 0 ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length : 0;
  return {
    reviews,
    averageRating,
    totalReviews: reviews.length
  };
};
var getUserReviews = async (userId) => {
  const reviews = await prisma.review.findMany({
    where: { userId },
    include: {
      meal: {
        select: {
          id: true,
          name: true,
          image: true,
          price: true
        }
      }
    },
    orderBy: {
      createdAt: "desc"
    }
  });
  return reviews;
};
var getProviderReviews = async (providerId) => {
  const providerMeals = await prisma.meal.findMany({
    where: { providerId },
    select: { id: true }
  });
  const mealIds = providerMeals.map((meal) => meal.id);
  const reviews = await prisma.review.findMany({
    where: {
      mealId: {
        in: mealIds
      }
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true
        }
      },
      meal: {
        select: {
          id: true,
          name: true,
          image: true
        }
      }
    },
    orderBy: {
      createdAt: "desc"
    }
  });
  const totalReviews = reviews.length;
  const averageRating = totalReviews > 0 ? reviews.reduce((sum, review) => sum + review.rating, 0) / totalReviews : 0;
  const ratingDistribution = {
    5: reviews.filter((r) => r.rating === 5).length,
    4: reviews.filter((r) => r.rating === 4).length,
    3: reviews.filter((r) => r.rating === 3).length,
    2: reviews.filter((r) => r.rating === 2).length,
    1: reviews.filter((r) => r.rating === 1).length
  };
  return {
    reviews,
    totalReviews,
    averageRating,
    ratingDistribution
  };
};
var updateReview = async (reviewId, userId, data) => {
  const existingReview = await prisma.review.findUnique({
    where: { id: reviewId }
  });
  if (!existingReview) {
    throw new ApiError_default(StatusCodes12.NOT_FOUND, "Review not found");
  }
  if (existingReview.userId !== userId) {
    throw new ApiError_default(
      StatusCodes12.FORBIDDEN,
      "You can only update your own reviews"
    );
  }
  if (data.rating && (data.rating < 1 || data.rating > 5)) {
    throw new ApiError_default(
      StatusCodes12.BAD_REQUEST,
      "Rating must be between 1 and 5"
    );
  }
  const updatedReview = await prisma.review.update({
    where: { id: reviewId },
    data,
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true
        }
      },
      meal: {
        select: {
          id: true,
          name: true
        }
      }
    }
  });
  return updatedReview;
};
var deleteReview = async (reviewId, userId) => {
  const existingReview = await prisma.review.findUnique({
    where: { id: reviewId }
  });
  if (!existingReview) {
    throw new ApiError_default(StatusCodes12.NOT_FOUND, "Review not found");
  }
  if (existingReview.userId !== userId) {
    throw new ApiError_default(
      StatusCodes12.FORBIDDEN,
      "You can only delete your own reviews"
    );
  }
  await prisma.review.delete({
    where: { id: reviewId }
  });
  return { message: "Review deleted successfully" };
};
var reviewService = {
  createReview,
  getMealReviews,
  getUserReviews,
  getProviderReviews,
  updateReview,
  deleteReview
};

// src/app/modules/review/review.controller.ts
var createReview2 = catchAsync_default(async (req, res) => {
  const userId = req.user?.id;
  const { mealId, rating, comment } = req.body;
  if (!userId) {
    return sendResponse_default(res, {
      statusCode: StatusCodes13.UNAUTHORIZED,
      success: false,
      message: "Unauthorized",
      data: null
    });
  }
  const result = await reviewService.createReview({
    userId,
    mealId,
    rating,
    comment
  });
  sendResponse_default(res, {
    statusCode: StatusCodes13.CREATED,
    success: true,
    message: "Review created successfully",
    data: result
  });
});
var getMealReviews2 = catchAsync_default(async (req, res) => {
  const { mealId } = req.params;
  const result = await reviewService.getMealReviews(mealId);
  sendResponse_default(res, {
    statusCode: StatusCodes13.OK,
    success: true,
    message: "Reviews fetched successfully",
    data: result
  });
});
var getUserReviews2 = catchAsync_default(async (req, res) => {
  const userId = req.user?.id;
  if (!userId) {
    return sendResponse_default(res, {
      statusCode: StatusCodes13.UNAUTHORIZED,
      success: false,
      message: "Unauthorized",
      data: null
    });
  }
  const result = await reviewService.getUserReviews(userId);
  sendResponse_default(res, {
    statusCode: StatusCodes13.OK,
    success: true,
    message: "User reviews fetched successfully",
    data: result
  });
});
var getProviderReviews2 = catchAsync_default(async (req, res) => {
  const userId = req.user?.id;
  if (!userId) {
    return sendResponse_default(res, {
      statusCode: StatusCodes13.UNAUTHORIZED,
      success: false,
      message: "Unauthorized",
      data: null
    });
  }
  const provider = await prisma.providerProfile.findUnique({
    where: { userId }
  });
  if (!provider) {
    return sendResponse_default(res, {
      statusCode: StatusCodes13.FORBIDDEN,
      success: false,
      message: "Provider profile not found",
      data: null
    });
  }
  const result = await reviewService.getProviderReviews(provider.id);
  sendResponse_default(res, {
    statusCode: StatusCodes13.OK,
    success: true,
    message: "Provider reviews fetched successfully",
    data: result
  });
});
var updateReview2 = catchAsync_default(async (req, res) => {
  const userId = req.user?.id;
  const { reviewId } = req.params;
  const { rating, comment } = req.body;
  if (!userId) {
    return sendResponse_default(res, {
      statusCode: StatusCodes13.UNAUTHORIZED,
      success: false,
      message: "Unauthorized",
      data: null
    });
  }
  const result = await reviewService.updateReview(reviewId, userId, {
    rating,
    comment
  });
  sendResponse_default(res, {
    statusCode: StatusCodes13.OK,
    success: true,
    message: "Review updated successfully",
    data: result
  });
});
var deleteReview2 = catchAsync_default(async (req, res) => {
  const userId = req.user?.id;
  const { reviewId } = req.params;
  if (!userId) {
    return sendResponse_default(res, {
      statusCode: StatusCodes13.UNAUTHORIZED,
      success: false,
      message: "Unauthorized",
      data: null
    });
  }
  const result = await reviewService.deleteReview(reviewId, userId);
  sendResponse_default(res, {
    statusCode: StatusCodes13.OK,
    success: true,
    message: "Review deleted successfully",
    data: result
  });
});
var reviewController = {
  createReview: createReview2,
  getMealReviews: getMealReviews2,
  getUserReviews: getUserReviews2,
  getProviderReviews: getProviderReviews2,
  updateReview: updateReview2,
  deleteReview: deleteReview2
};

// src/app/modules/review/review.routes.ts
var router5 = express5.Router();
router5.post(
  "/",
  Auth_default(UserRole.customer),
  reviewController.createReview
);
router5.get("/meal/:mealId", reviewController.getMealReviews);
router5.get(
  "/user",
  Auth_default(UserRole.customer),
  reviewController.getUserReviews
);
router5.get(
  "/provider",
  Auth_default(UserRole.provider),
  reviewController.getProviderReviews
);
router5.put(
  "/:reviewId",
  Auth_default(UserRole.customer),
  reviewController.updateReview
);
router5.delete(
  "/:reviewId",
  Auth_default(UserRole.customer),
  reviewController.deleteReview
);
var reviewRoutes = router5;

// src/app/modules/user/user.route.ts
init_esm_shims();
import express6 from "express";

// src/app/modules/user/user.controller.ts
init_esm_shims();
import { StatusCodes as StatusCodes14 } from "http-status-codes";

// src/app/modules/user/user.service.ts
init_esm_shims();
var getCurrentUser = async (req) => {
  return req.user;
};
var getAllUsers = async () => {
  const users = await prisma.user.findMany({
    orderBy: { createdAt: "desc" }
  });
  return users || [];
};
var updateUserStatus = async (userId, newStatus) => {
  const updatedUser = await prisma.user.update({
    where: { id: userId },
    data: { status: newStatus }
  });
  return updatedUser;
};
var updateProfile = async (req, data) => {
  const userId = req.user?.id;
  if (!userId) {
    throw new Error("User not authenticated");
  }
  const updatedUser = await prisma.user.update({
    where: { id: userId },
    data: {
      ...data.name && { name: data.name },
      ...data.phone && { phone: data.phone },
      ...data.image && { image: data.image }
    }
  });
  return updatedUser;
};
var UserService = {
  getCurrentUser,
  getAllUsers,
  updateUserStatus,
  updateProfile
};

// src/app/modules/user/user.controller.ts
var getCurrentUser2 = catchAsync_default(async (req, res) => {
  const result = await UserService.getCurrentUser(req);
  sendResponse_default(res, {
    statusCode: StatusCodes14.OK,
    success: true,
    message: "Current user retrieved successfully",
    data: result
  });
});
var getAllUsers2 = catchAsync_default(async (req, res) => {
  const result = await UserService.getAllUsers();
  sendResponse_default(res, {
    statusCode: StatusCodes14.OK,
    success: true,
    message: "All users retrieved successfully",
    data: result
  });
});
var updateUserStatus2 = catchAsync_default(async (req, res) => {
  const userId = req.params.id;
  const newStatus = req.body.status;
  const result = await UserService.updateUserStatus(userId, newStatus);
  sendResponse_default(res, {
    statusCode: StatusCodes14.OK,
    success: true,
    message: "User status updated successfully",
    data: result
  });
});
var updateProfile2 = catchAsync_default(async (req, res) => {
  const result = await UserService.updateProfile(req, req.body);
  sendResponse_default(res, {
    statusCode: StatusCodes14.OK,
    success: true,
    message: "Profile updated successfully",
    data: result
  });
});
var UserController = {
  getCurrentUser: getCurrentUser2,
  getAllUsers: getAllUsers2,
  updateUserStatus: updateUserStatus2,
  updateProfile: updateProfile2
};

// src/app/modules/user/user.route.ts
var router6 = express6.Router();
router6.get(
  "/me",
  Auth_default(UserRole.admin, UserRole.customer, UserRole.provider),
  UserController.getCurrentUser
);
router6.get("/", Auth_default(UserRole.admin), UserController.getAllUsers);
router6.patch(
  "/:id",
  Auth_default(UserRole.admin),
  UserController.updateUserStatus
);
router6.patch(
  "/profile/update",
  Auth_default(UserRole.admin, UserRole.customer, UserRole.provider),
  UserController.updateProfile
);
var UserRoutes = router6;

// src/app/routes/index.ts
var router7 = express7.Router();
var moduleRoutes = [
  {
    path: "/users",
    routes: UserRoutes
  },
  {
    path: "/providers",
    routes: ProviderRoutes
  },
  {
    path: "/categories",
    routes: CategoryRoutes
  },
  {
    path: "/meals",
    routes: MealRoutes
  },
  {
    path: "/orders",
    routes: OrderRoutes
  },
  {
    path: "/reviews",
    routes: reviewRoutes
  }
];
moduleRoutes.forEach((route) => router7.use(route.path, route.routes));
var routes_default = router7;

// src/app.ts
var app = express8();
app.set("trust proxy", 1);
app.use(express8.json({ limit: "16kb" }));
app.use(express8.urlencoded({ extended: true, limit: "16kb" }));
app.use(
  cors({
    origin: (origin, callback) => {
      const allowed = process.env.FRONTEND_URL?.replace(/\/$/, "");
      if (!origin || origin.replace(/\/$/, "") === allowed) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true
  })
);
app.use(Logger_default);
app.all("/api/auth/*any", toNodeHandler(auth));
app.get("/", (req, res) => {
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  sendResponse_default(res, {
    statusCode: StatusCodes15.OK,
    success: true,
    data: {
      message: "Server is running",
      author: "Md. Monir Hossain",
      version: "1.0.0",
      host: req.hostname,
      protocol: req.protocol,
      ip,
      time: (/* @__PURE__ */ new Date()).toISOString()
    }
  });
  res.end();
});
app.use("/api", routes_default);
app.use(GlobalErrorHandler_default);
app.use(NotFound_default);
var app_default = app;

// src/server.ts
process.on("uncaughtException", (error) => {
  console.log(error);
  process.exit(1);
});
var server;
async function connection() {
  try {
    await prisma.$connect();
    console.log("DB is connected succesfully ....!!");
    server = app_default.listen(process.env.PORT, () => {
      console.log(`Application is listening on port ${process.env.PORT}`);
    });
  } catch (err) {
    console.log("server connection error", err);
  }
  process.on("unhandledRejection", (error) => {
    if (server) {
      server.close(() => {
        console.log(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}
connection();
