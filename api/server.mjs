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
import express10 from "express";
import { StatusCodes as StatusCodes19 } from "http-status-codes";

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
import express9 from "express";

// src/app/modules/ai/ai.route.ts
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
  BlogsScalarFieldEnum: () => BlogsScalarFieldEnum,
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
  Blogs: "Blogs",
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
var BlogsScalarFieldEnum = {
  id: "id",
  title: "title",
  slug: "slug",
  content: "content",
  thumbnail: "thumbnail",
  userId: "userId",
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
import { oAuthProxy } from "better-auth/plugins";

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
  "inlineSchema": 'model User {\n  id            String     @id\n  name          String\n  email         String\n  emailVerified Boolean    @default(false)\n  image         String?\n  role          UserRole   @default(customer)\n  status        UserStatus @default(active)\n  phone         String?\n  createdAt     DateTime   @default(now())\n  updatedAt     DateTime   @updatedAt\n  sessions      Session[]\n  accounts      Account[]\n\n  providerProfile ProviderProfile?\n  orders          Order[]\n  reviews         Review[]\n  blogPosts       Blogs[]\n\n  @@unique([email])\n  @@map("user")\n}\n\nmodel Session {\n  id        String   @id\n  expiresAt DateTime\n  token     String\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n  ipAddress String?\n  userAgent String?\n  userId    String\n  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  @@unique([token])\n  @@index([userId])\n  @@map("session")\n}\n\nmodel Account {\n  id                    String    @id\n  accountId             String\n  providerId            String\n  userId                String\n  user                  User      @relation(fields: [userId], references: [id], onDelete: Cascade)\n  accessToken           String?\n  refreshToken          String?\n  idToken               String?\n  accessTokenExpiresAt  DateTime?\n  refreshTokenExpiresAt DateTime?\n  scope                 String?\n  password              String?\n  createdAt             DateTime  @default(now())\n  updatedAt             DateTime  @updatedAt\n\n  @@index([userId])\n  @@map("account")\n}\n\nmodel Verification {\n  id         String   @id\n  identifier String\n  value      String\n  expiresAt  DateTime\n  createdAt  DateTime @default(now())\n  updatedAt  DateTime @updatedAt\n\n  @@index([identifier])\n  @@map("verification")\n}\n\nenum UserRole {\n  admin\n  customer\n  provider\n}\n\nenum UserStatus {\n  active\n  inactive\n}\n\nmodel Blogs {\n  id        Int      @id @default(autoincrement())\n  title     String\n  slug      String   @unique\n  content   String   @db.Text\n  thumbnail String?\n  userId    String\n  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n}\n\nmodel Category {\n  id   String @id @default(uuid())\n  name String @unique\n  slug String @unique\n\n  meals Meal[]\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n}\n\nmodel Meal {\n  id          String          @id @default(uuid())\n  providerId  String\n  categoryId  String\n  name        String\n  description String?\n  price       Float\n  image       String?\n  isAvailable Boolean         @default(true)\n  calories    Int\n  ingredients String[]        @default([])\n  cuisine     String?\n  dietary     String[]        @default([])\n  mealType    String?\n  spiceLevel  String?\n  provider    ProviderProfile @relation(fields: [providerId], references: [id])\n  category    Category        @relation(fields: [categoryId], references: [id])\n  reviews     Review[]\n  orderItems  OrderItem[]\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n}\n\nmodel Order {\n  id          String      @id @default(uuid())\n  orderNumber String?     @unique\n  userId      String\n  providerId  String\n  totalAmount Float\n  status      OrderStatus\n  address     String\n  paymentType PaymentType @default(COD)\n\n  user     User            @relation(fields: [userId], references: [id])\n  provider ProviderProfile @relation(fields: [providerId], references: [id])\n  items    OrderItem[]\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n}\n\nenum OrderStatus {\n  PENDING\n  ACCEPTED\n  COOKING\n  ON_THE_WAY\n  DELIVERED\n  CANCELLED\n}\n\nenum PaymentType {\n  COD\n}\n\nmodel OrderItem {\n  id       String @id @default(uuid())\n  orderId  String\n  mealId   String\n  price    Float\n  quantity Int\n\n  order Order @relation(fields: [orderId], references: [id])\n  meal  Meal  @relation(fields: [mealId], references: [id])\n}\n\nmodel ProviderProfile {\n  id          String  @id @default(uuid())\n  userId      String  @unique\n  shopName    String\n  description String?\n  address     String\n  phone       String\n  isOpen      Boolean @default(true)\n\n  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)\n  meals     Meal[]\n  orders    Order[]\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n}\n\nmodel Review {\n  id      String  @id @default(uuid())\n  userId  String\n  mealId  String\n  rating  Int\n  comment String?\n\n  user User @relation(fields: [userId], references: [id])\n  meal Meal @relation(fields: [mealId], references: [id])\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@unique([userId, mealId], name: "unique_user_meal_review")\n}\n\ngenerator client {\n  provider = "prisma-client"\n  output   = "../../generated/prisma"\n}\n\ndatasource db {\n  provider = "postgresql"\n}\n',
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
config.runtimeDataModel = JSON.parse('{"models":{"User":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"email","kind":"scalar","type":"String"},{"name":"emailVerified","kind":"scalar","type":"Boolean"},{"name":"image","kind":"scalar","type":"String"},{"name":"role","kind":"enum","type":"UserRole"},{"name":"status","kind":"enum","type":"UserStatus"},{"name":"phone","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"sessions","kind":"object","type":"Session","relationName":"SessionToUser"},{"name":"accounts","kind":"object","type":"Account","relationName":"AccountToUser"},{"name":"providerProfile","kind":"object","type":"ProviderProfile","relationName":"ProviderProfileToUser"},{"name":"orders","kind":"object","type":"Order","relationName":"OrderToUser"},{"name":"reviews","kind":"object","type":"Review","relationName":"ReviewToUser"},{"name":"blogPosts","kind":"object","type":"Blogs","relationName":"BlogsToUser"}],"dbName":"user"},"Session":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"expiresAt","kind":"scalar","type":"DateTime"},{"name":"token","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"ipAddress","kind":"scalar","type":"String"},{"name":"userAgent","kind":"scalar","type":"String"},{"name":"userId","kind":"scalar","type":"String"},{"name":"user","kind":"object","type":"User","relationName":"SessionToUser"}],"dbName":"session"},"Account":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"accountId","kind":"scalar","type":"String"},{"name":"providerId","kind":"scalar","type":"String"},{"name":"userId","kind":"scalar","type":"String"},{"name":"user","kind":"object","type":"User","relationName":"AccountToUser"},{"name":"accessToken","kind":"scalar","type":"String"},{"name":"refreshToken","kind":"scalar","type":"String"},{"name":"idToken","kind":"scalar","type":"String"},{"name":"accessTokenExpiresAt","kind":"scalar","type":"DateTime"},{"name":"refreshTokenExpiresAt","kind":"scalar","type":"DateTime"},{"name":"scope","kind":"scalar","type":"String"},{"name":"password","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"account"},"Verification":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"identifier","kind":"scalar","type":"String"},{"name":"value","kind":"scalar","type":"String"},{"name":"expiresAt","kind":"scalar","type":"DateTime"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"verification"},"Blogs":{"fields":[{"name":"id","kind":"scalar","type":"Int"},{"name":"title","kind":"scalar","type":"String"},{"name":"slug","kind":"scalar","type":"String"},{"name":"content","kind":"scalar","type":"String"},{"name":"thumbnail","kind":"scalar","type":"String"},{"name":"userId","kind":"scalar","type":"String"},{"name":"user","kind":"object","type":"User","relationName":"BlogsToUser"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":null},"Category":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"slug","kind":"scalar","type":"String"},{"name":"meals","kind":"object","type":"Meal","relationName":"CategoryToMeal"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":null},"Meal":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"providerId","kind":"scalar","type":"String"},{"name":"categoryId","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"description","kind":"scalar","type":"String"},{"name":"price","kind":"scalar","type":"Float"},{"name":"image","kind":"scalar","type":"String"},{"name":"isAvailable","kind":"scalar","type":"Boolean"},{"name":"calories","kind":"scalar","type":"Int"},{"name":"ingredients","kind":"scalar","type":"String"},{"name":"cuisine","kind":"scalar","type":"String"},{"name":"dietary","kind":"scalar","type":"String"},{"name":"mealType","kind":"scalar","type":"String"},{"name":"spiceLevel","kind":"scalar","type":"String"},{"name":"provider","kind":"object","type":"ProviderProfile","relationName":"MealToProviderProfile"},{"name":"category","kind":"object","type":"Category","relationName":"CategoryToMeal"},{"name":"reviews","kind":"object","type":"Review","relationName":"MealToReview"},{"name":"orderItems","kind":"object","type":"OrderItem","relationName":"MealToOrderItem"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":null},"Order":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"orderNumber","kind":"scalar","type":"String"},{"name":"userId","kind":"scalar","type":"String"},{"name":"providerId","kind":"scalar","type":"String"},{"name":"totalAmount","kind":"scalar","type":"Float"},{"name":"status","kind":"enum","type":"OrderStatus"},{"name":"address","kind":"scalar","type":"String"},{"name":"paymentType","kind":"enum","type":"PaymentType"},{"name":"user","kind":"object","type":"User","relationName":"OrderToUser"},{"name":"provider","kind":"object","type":"ProviderProfile","relationName":"OrderToProviderProfile"},{"name":"items","kind":"object","type":"OrderItem","relationName":"OrderToOrderItem"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":null},"OrderItem":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"orderId","kind":"scalar","type":"String"},{"name":"mealId","kind":"scalar","type":"String"},{"name":"price","kind":"scalar","type":"Float"},{"name":"quantity","kind":"scalar","type":"Int"},{"name":"order","kind":"object","type":"Order","relationName":"OrderToOrderItem"},{"name":"meal","kind":"object","type":"Meal","relationName":"MealToOrderItem"}],"dbName":null},"ProviderProfile":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"userId","kind":"scalar","type":"String"},{"name":"shopName","kind":"scalar","type":"String"},{"name":"description","kind":"scalar","type":"String"},{"name":"address","kind":"scalar","type":"String"},{"name":"phone","kind":"scalar","type":"String"},{"name":"isOpen","kind":"scalar","type":"Boolean"},{"name":"user","kind":"object","type":"User","relationName":"ProviderProfileToUser"},{"name":"meals","kind":"object","type":"Meal","relationName":"MealToProviderProfile"},{"name":"orders","kind":"object","type":"Order","relationName":"OrderToProviderProfile"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":null},"Review":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"userId","kind":"scalar","type":"String"},{"name":"mealId","kind":"scalar","type":"String"},{"name":"rating","kind":"scalar","type":"Int"},{"name":"comment","kind":"scalar","type":"String"},{"name":"user","kind":"object","type":"User","relationName":"ReviewToUser"},{"name":"meal","kind":"object","type":"Meal","relationName":"MealToReview"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":null}},"enums":{},"types":{}}');
config.parameterizationSchema = {
  strings: JSON.parse('["where","orderBy","cursor","user","sessions","accounts","provider","meals","_count","category","meal","reviews","items","order","orderItems","orders","providerProfile","blogPosts","User.findUnique","User.findUniqueOrThrow","User.findFirst","User.findFirstOrThrow","User.findMany","data","User.createOne","User.createMany","User.createManyAndReturn","User.updateOne","User.updateMany","User.updateManyAndReturn","create","update","User.upsertOne","User.deleteOne","User.deleteMany","having","_min","_max","User.groupBy","User.aggregate","Session.findUnique","Session.findUniqueOrThrow","Session.findFirst","Session.findFirstOrThrow","Session.findMany","Session.createOne","Session.createMany","Session.createManyAndReturn","Session.updateOne","Session.updateMany","Session.updateManyAndReturn","Session.upsertOne","Session.deleteOne","Session.deleteMany","Session.groupBy","Session.aggregate","Account.findUnique","Account.findUniqueOrThrow","Account.findFirst","Account.findFirstOrThrow","Account.findMany","Account.createOne","Account.createMany","Account.createManyAndReturn","Account.updateOne","Account.updateMany","Account.updateManyAndReturn","Account.upsertOne","Account.deleteOne","Account.deleteMany","Account.groupBy","Account.aggregate","Verification.findUnique","Verification.findUniqueOrThrow","Verification.findFirst","Verification.findFirstOrThrow","Verification.findMany","Verification.createOne","Verification.createMany","Verification.createManyAndReturn","Verification.updateOne","Verification.updateMany","Verification.updateManyAndReturn","Verification.upsertOne","Verification.deleteOne","Verification.deleteMany","Verification.groupBy","Verification.aggregate","Blogs.findUnique","Blogs.findUniqueOrThrow","Blogs.findFirst","Blogs.findFirstOrThrow","Blogs.findMany","Blogs.createOne","Blogs.createMany","Blogs.createManyAndReturn","Blogs.updateOne","Blogs.updateMany","Blogs.updateManyAndReturn","Blogs.upsertOne","Blogs.deleteOne","Blogs.deleteMany","_avg","_sum","Blogs.groupBy","Blogs.aggregate","Category.findUnique","Category.findUniqueOrThrow","Category.findFirst","Category.findFirstOrThrow","Category.findMany","Category.createOne","Category.createMany","Category.createManyAndReturn","Category.updateOne","Category.updateMany","Category.updateManyAndReturn","Category.upsertOne","Category.deleteOne","Category.deleteMany","Category.groupBy","Category.aggregate","Meal.findUnique","Meal.findUniqueOrThrow","Meal.findFirst","Meal.findFirstOrThrow","Meal.findMany","Meal.createOne","Meal.createMany","Meal.createManyAndReturn","Meal.updateOne","Meal.updateMany","Meal.updateManyAndReturn","Meal.upsertOne","Meal.deleteOne","Meal.deleteMany","Meal.groupBy","Meal.aggregate","Order.findUnique","Order.findUniqueOrThrow","Order.findFirst","Order.findFirstOrThrow","Order.findMany","Order.createOne","Order.createMany","Order.createManyAndReturn","Order.updateOne","Order.updateMany","Order.updateManyAndReturn","Order.upsertOne","Order.deleteOne","Order.deleteMany","Order.groupBy","Order.aggregate","OrderItem.findUnique","OrderItem.findUniqueOrThrow","OrderItem.findFirst","OrderItem.findFirstOrThrow","OrderItem.findMany","OrderItem.createOne","OrderItem.createMany","OrderItem.createManyAndReturn","OrderItem.updateOne","OrderItem.updateMany","OrderItem.updateManyAndReturn","OrderItem.upsertOne","OrderItem.deleteOne","OrderItem.deleteMany","OrderItem.groupBy","OrderItem.aggregate","ProviderProfile.findUnique","ProviderProfile.findUniqueOrThrow","ProviderProfile.findFirst","ProviderProfile.findFirstOrThrow","ProviderProfile.findMany","ProviderProfile.createOne","ProviderProfile.createMany","ProviderProfile.createManyAndReturn","ProviderProfile.updateOne","ProviderProfile.updateMany","ProviderProfile.updateManyAndReturn","ProviderProfile.upsertOne","ProviderProfile.deleteOne","ProviderProfile.deleteMany","ProviderProfile.groupBy","ProviderProfile.aggregate","Review.findUnique","Review.findUniqueOrThrow","Review.findFirst","Review.findFirstOrThrow","Review.findMany","Review.createOne","Review.createMany","Review.createManyAndReturn","Review.updateOne","Review.updateMany","Review.updateManyAndReturn","Review.upsertOne","Review.deleteOne","Review.deleteMany","Review.groupBy","Review.aggregate","AND","OR","NOT","id","userId","mealId","rating","comment","createdAt","updatedAt","equals","in","notIn","lt","lte","gt","gte","not","contains","startsWith","endsWith","shopName","description","address","phone","isOpen","every","some","none","orderId","price","quantity","orderNumber","providerId","totalAmount","OrderStatus","status","PaymentType","paymentType","categoryId","name","image","isAvailable","calories","ingredients","cuisine","dietary","mealType","spiceLevel","has","hasEvery","hasSome","slug","title","content","thumbnail","identifier","value","expiresAt","accountId","accessToken","refreshToken","idToken","accessTokenExpiresAt","refreshTokenExpiresAt","scope","password","token","ipAddress","userAgent","email","emailVerified","UserRole","role","UserStatus","unique_user_meal_review","is","isNot","connectOrCreate","upsert","createMany","set","disconnect","delete","connect","updateMany","deleteMany","push","increment","decrement","multiply","divide"]'),
  graph: "twVosAETBAAA5gIAIAUAAOcCACALAADpAgAgDwAAxQIAIBAAAOgCACARAADqAgAgygEAAOMCADDLAQAAMQAQzAEAAOMCADDNAQEAAAAB0gFAAMICACHTAUAAwgIAIeIBAQDAAgAh7gEAAOUClQIi8gEBAL8CACHzAQEAwAIAIZACAQAAAAGRAiAAwQIAIZMCAADkApMCIgEAAAABACAMAwAAwwIAIMoBAAD8AgAwywEAAAMAEMwBAAD8AgAwzQEBAL8CACHOAQEAvwIAIdIBQADCAgAh0wFAAMICACGEAkAAwgIAIY0CAQC_AgAhjgIBAMACACGPAgEAwAIAIQMDAADjAwAgjgIAAP0CACCPAgAA_QIAIAwDAADDAgAgygEAAPwCADDLAQAAAwAQzAEAAPwCADDNAQEAAAABzgEBAL8CACHSAUAAwgIAIdMBQADCAgAhhAJAAMICACGNAgEAAAABjgIBAMACACGPAgEAwAIAIQMAAAADACABAAAEADACAAAFACARAwAAwwIAIMoBAAD6AgAwywEAAAcAEMwBAAD6AgAwzQEBAL8CACHOAQEAvwIAIdIBQADCAgAh0wFAAMICACHrAQEAvwIAIYUCAQC_AgAhhgIBAMACACGHAgEAwAIAIYgCAQDAAgAhiQJAAPsCACGKAkAA-wIAIYsCAQDAAgAhjAIBAMACACEIAwAA4wMAIIYCAAD9AgAghwIAAP0CACCIAgAA_QIAIIkCAAD9AgAgigIAAP0CACCLAgAA_QIAIIwCAAD9AgAgEQMAAMMCACDKAQAA-gIAMMsBAAAHABDMAQAA-gIAMM0BAQAAAAHOAQEAvwIAIdIBQADCAgAh0wFAAMICACHrAQEAvwIAIYUCAQC_AgAhhgIBAMACACGHAgEAwAIAIYgCAQDAAgAhiQJAAPsCACGKAkAA-wIAIYsCAQDAAgAhjAIBAMACACEDAAAABwAgAQAACAAwAgAACQAgDwMAAMMCACAHAADEAgAgDwAAxQIAIMoBAAC-AgAwywEAAAsAEMwBAAC-AgAwzQEBAL8CACHOAQEAvwIAIdIBQADCAgAh0wFAAMICACHfAQEAvwIAIeABAQDAAgAh4QEBAL8CACHiAQEAvwIAIeMBIADBAgAhAQAAAAsAIBcGAADxAgAgCQAA-QIAIAsAAOkCACAOAADyAgAgygEAAPgCADDLAQAADQAQzAEAAPgCADDNAQEAvwIAIdIBQADCAgAh0wFAAMICACHgAQEAwAIAIegBCADuAgAh6wEBAL8CACHxAQEAvwIAIfIBAQC_AgAh8wEBAMACACH0ASAAwQIAIfUBAgDsAgAh9gEAANECACD3AQEAwAIAIfgBAADRAgAg-QEBAMACACH6AQEAwAIAIQkGAADqBAAgCQAA8AQAIAsAAOsEACAOAADtBAAg4AEAAP0CACDzAQAA_QIAIPcBAAD9AgAg-QEAAP0CACD6AQAA_QIAIBcGAADxAgAgCQAA-QIAIAsAAOkCACAOAADyAgAgygEAAPgCADDLAQAADQAQzAEAAPgCADDNAQEAAAAB0gFAAMICACHTAUAAwgIAIeABAQDAAgAh6AEIAO4CACHrAQEAvwIAIfEBAQC_AgAh8gEBAL8CACHzAQEAwAIAIfQBIADBAgAh9QECAOwCACH2AQAA0QIAIPcBAQDAAgAh-AEAANECACD5AQEAwAIAIfoBAQDAAgAhAwAAAA0AIAEAAA4AMAIAAA8AIAMAAAANACABAAAOADACAAAPACABAAAADQAgDAMAAMMCACAKAAD1AgAgygEAAPcCADDLAQAAEwAQzAEAAPcCADDNAQEAvwIAIc4BAQC_AgAhzwEBAL8CACHQAQIA7AIAIdEBAQDAAgAh0gFAAMICACHTAUAAwgIAIQMDAADjAwAgCgAA7wQAINEBAAD9AgAgDQMAAMMCACAKAAD1AgAgygEAAPcCADDLAQAAEwAQzAEAAPcCADDNAQEAAAABzgEBAL8CACHPAQEAvwIAIdABAgDsAgAh0QEBAMACACHSAUAAwgIAIdMBQADCAgAhlQIAAPYCACADAAAAEwAgAQAAFAAwAgAAFQAgCgoAAPUCACANAAD0AgAgygEAAPMCADDLAQAAFwAQzAEAAPMCADDNAQEAvwIAIc8BAQC_AgAh5wEBAL8CACHoAQgA7gIAIekBAgDsAgAhAgoAAO8EACANAADuBAAgCgoAAPUCACANAAD0AgAgygEAAPMCADDLAQAAFwAQzAEAAPMCADDNAQEAAAABzwEBAL8CACHnAQEAvwIAIegBCADuAgAh6QECAOwCACEDAAAAFwAgAQAAGAAwAgAAGQAgAwAAABcAIAEAABgAMAIAABkAIAEAAAAXACABAAAAEwAgAQAAABcAIBADAADDAgAgBgAA8QIAIAwAAPICACDKAQAA7QIAMMsBAAAfABDMAQAA7QIAMM0BAQC_AgAhzgEBAL8CACHSAUAAwgIAIdMBQADCAgAh4QEBAL8CACHqAQEAwAIAIesBAQC_AgAh7AEIAO4CACHuAQAA7wLuASLwAQAA8ALwASIEAwAA4wMAIAYAAOoEACAMAADtBAAg6gEAAP0CACAQAwAAwwIAIAYAAPECACAMAADyAgAgygEAAO0CADDLAQAAHwAQzAEAAO0CADDNAQEAAAABzgEBAL8CACHSAUAAwgIAIdMBQADCAgAh4QEBAL8CACHqAQEAAAAB6wEBAL8CACHsAQgA7gIAIe4BAADvAu4BIvABAADwAvABIgMAAAAfACABAAAgADACAAAhACABAAAADQAgAQAAAB8AIAMAAAAfACABAAAgADACAAAhACADAAAAEwAgAQAAFAAwAgAAFQAgDAMAAMMCACDKAQAA6wIAMMsBAAAnABDMAQAA6wIAMM0BAgDsAgAhzgEBAL8CACHSAUAAwgIAIdMBQADCAgAh_gEBAL8CACH_AQEAvwIAIYACAQC_AgAhgQIBAMACACECAwAA4wMAIIECAAD9AgAgDAMAAMMCACDKAQAA6wIAMMsBAAAnABDMAQAA6wIAMM0BAgAAAAHOAQEAvwIAIdIBQADCAgAh0wFAAMICACH-AQEAAAAB_wEBAL8CACGAAgEAvwIAIYECAQDAAgAhAwAAACcAIAEAACgAMAIAACkAIAEAAAADACABAAAABwAgAQAAAB8AIAEAAAATACABAAAAJwAgAQAAAAEAIBMEAADmAgAgBQAA5wIAIAsAAOkCACAPAADFAgAgEAAA6AIAIBEAAOoCACDKAQAA4wIAMMsBAAAxABDMAQAA4wIAMM0BAQC_AgAh0gFAAMICACHTAUAAwgIAIeIBAQDAAgAh7gEAAOUClQIi8gEBAL8CACHzAQEAwAIAIZACAQC_AgAhkQIgAMECACGTAgAA5AKTAiIIBAAA6AQAIAUAAOkEACALAADrBAAgDwAA5QMAIBAAAOoEACARAADsBAAg4gEAAP0CACDzAQAA_QIAIAMAAAAxACABAAAyADACAAABACADAAAAMQAgAQAAMgAwAgAAAQAgAwAAADEAIAEAADIAMAIAAAEAIBAEAADiBAAgBQAA4wQAIAsAAOYEACAPAADlBAAgEAAA5AQAIBEAAOcEACDNAQEAAAAB0gFAAAAAAdMBQAAAAAHiAQEAAAAB7gEAAACVAgLyAQEAAAAB8wEBAAAAAZACAQAAAAGRAiAAAAABkwIAAACTAgIBFwAANgAgCs0BAQAAAAHSAUAAAAAB0wFAAAAAAeIBAQAAAAHuAQAAAJUCAvIBAQAAAAHzAQEAAAABkAIBAAAAAZECIAAAAAGTAgAAAJMCAgEXAAA4ADABFwAAOAAwEAQAAKEEACAFAACiBAAgCwAApQQAIA8AAKQEACAQAACjBAAgEQAApgQAIM0BAQCDAwAh0gFAAIYDACHTAUAAhgMAIeIBAQCFAwAh7gEAAKAElQIi8gEBAIMDACHzAQEAhQMAIZACAQCDAwAhkQIgAI4DACGTAgAAnwSTAiICAAAAAQAgFwAAOwAgCs0BAQCDAwAh0gFAAIYDACHTAUAAhgMAIeIBAQCFAwAh7gEAAKAElQIi8gEBAIMDACHzAQEAhQMAIZACAQCDAwAhkQIgAI4DACGTAgAAnwSTAiICAAAAMQAgFwAAPQAgAgAAADEAIBcAAD0AIAMAAAABACAeAAA2ACAfAAA7ACABAAAAAQAgAQAAADEAIAUIAACcBAAgJAAAngQAICUAAJ0EACDiAQAA_QIAIPMBAAD9AgAgDcoBAADcAgAwywEAAEQAEMwBAADcAgAwzQEBAKwCACHSAUAArwIAIdMBQACvAgAh4gEBAK4CACHuAQAA3gKVAiLyAQEArAIAIfMBAQCuAgAhkAIBAKwCACGRAiAAuwIAIZMCAADdApMCIgMAAAAxACABAABDADAjAABEACADAAAAMQAgAQAAMgAwAgAAAQAgAQAAAAUAIAEAAAAFACADAAAAAwAgAQAABAAwAgAABQAgAwAAAAMAIAEAAAQAMAIAAAUAIAMAAAADACABAAAEADACAAAFACAJAwAAmwQAIM0BAQAAAAHOAQEAAAAB0gFAAAAAAdMBQAAAAAGEAkAAAAABjQIBAAAAAY4CAQAAAAGPAgEAAAABARcAAEwAIAjNAQEAAAABzgEBAAAAAdIBQAAAAAHTAUAAAAABhAJAAAAAAY0CAQAAAAGOAgEAAAABjwIBAAAAAQEXAABOADABFwAATgAwCQMAAJoEACDNAQEAgwMAIc4BAQCDAwAh0gFAAIYDACHTAUAAhgMAIYQCQACGAwAhjQIBAIMDACGOAgEAhQMAIY8CAQCFAwAhAgAAAAUAIBcAAFEAIAjNAQEAgwMAIc4BAQCDAwAh0gFAAIYDACHTAUAAhgMAIYQCQACGAwAhjQIBAIMDACGOAgEAhQMAIY8CAQCFAwAhAgAAAAMAIBcAAFMAIAIAAAADACAXAABTACADAAAABQAgHgAATAAgHwAAUQAgAQAAAAUAIAEAAAADACAFCAAAlwQAICQAAJkEACAlAACYBAAgjgIAAP0CACCPAgAA_QIAIAvKAQAA2wIAMMsBAABaABDMAQAA2wIAMM0BAQCsAgAhzgEBAKwCACHSAUAArwIAIdMBQACvAgAhhAJAAK8CACGNAgEArAIAIY4CAQCuAgAhjwIBAK4CACEDAAAAAwAgAQAAWQAwIwAAWgAgAwAAAAMAIAEAAAQAMAIAAAUAIAEAAAAJACABAAAACQAgAwAAAAcAIAEAAAgAMAIAAAkAIAMAAAAHACABAAAIADACAAAJACADAAAABwAgAQAACAAwAgAACQAgDgMAAJYEACDNAQEAAAABzgEBAAAAAdIBQAAAAAHTAUAAAAAB6wEBAAAAAYUCAQAAAAGGAgEAAAABhwIBAAAAAYgCAQAAAAGJAkAAAAABigJAAAAAAYsCAQAAAAGMAgEAAAABARcAAGIAIA3NAQEAAAABzgEBAAAAAdIBQAAAAAHTAUAAAAAB6wEBAAAAAYUCAQAAAAGGAgEAAAABhwIBAAAAAYgCAQAAAAGJAkAAAAABigJAAAAAAYsCAQAAAAGMAgEAAAABARcAAGQAMAEXAABkADAOAwAAlQQAIM0BAQCDAwAhzgEBAIMDACHSAUAAhgMAIdMBQACGAwAh6wEBAIMDACGFAgEAgwMAIYYCAQCFAwAhhwIBAIUDACGIAgEAhQMAIYkCQACUBAAhigJAAJQEACGLAgEAhQMAIYwCAQCFAwAhAgAAAAkAIBcAAGcAIA3NAQEAgwMAIc4BAQCDAwAh0gFAAIYDACHTAUAAhgMAIesBAQCDAwAhhQIBAIMDACGGAgEAhQMAIYcCAQCFAwAhiAIBAIUDACGJAkAAlAQAIYoCQACUBAAhiwIBAIUDACGMAgEAhQMAIQIAAAAHACAXAABpACACAAAABwAgFwAAaQAgAwAAAAkAIB4AAGIAIB8AAGcAIAEAAAAJACABAAAABwAgCggAAJEEACAkAACTBAAgJQAAkgQAIIYCAAD9AgAghwIAAP0CACCIAgAA_QIAIIkCAAD9AgAgigIAAP0CACCLAgAA_QIAIIwCAAD9AgAgEMoBAADXAgAwywEAAHAAEMwBAADXAgAwzQEBAKwCACHOAQEArAIAIdIBQACvAgAh0wFAAK8CACHrAQEArAIAIYUCAQCsAgAhhgIBAK4CACGHAgEArgIAIYgCAQCuAgAhiQJAANgCACGKAkAA2AIAIYsCAQCuAgAhjAIBAK4CACEDAAAABwAgAQAAbwAwIwAAcAAgAwAAAAcAIAEAAAgAMAIAAAkAIAnKAQAA1gIAMMsBAAB2ABDMAQAA1gIAMM0BAQAAAAHSAUAAwgIAIdMBQADCAgAhggIBAL8CACGDAgEAvwIAIYQCQADCAgAhAQAAAHMAIAEAAABzACAJygEAANYCADDLAQAAdgAQzAEAANYCADDNAQEAvwIAIdIBQADCAgAh0wFAAMICACGCAgEAvwIAIYMCAQC_AgAhhAJAAMICACEAAwAAAHYAIAEAAHcAMAIAAHMAIAMAAAB2ACABAAB3ADACAABzACADAAAAdgAgAQAAdwAwAgAAcwAgBs0BAQAAAAHSAUAAAAAB0wFAAAAAAYICAQAAAAGDAgEAAAABhAJAAAAAAQEXAAB7ACAGzQEBAAAAAdIBQAAAAAHTAUAAAAABggIBAAAAAYMCAQAAAAGEAkAAAAABARcAAH0AMAEXAAB9ADAGzQEBAIMDACHSAUAAhgMAIdMBQACGAwAhggIBAIMDACGDAgEAgwMAIYQCQACGAwAhAgAAAHMAIBcAAIABACAGzQEBAIMDACHSAUAAhgMAIdMBQACGAwAhggIBAIMDACGDAgEAgwMAIYQCQACGAwAhAgAAAHYAIBcAAIIBACACAAAAdgAgFwAAggEAIAMAAABzACAeAAB7ACAfAACAAQAgAQAAAHMAIAEAAAB2ACADCAAAjgQAICQAAJAEACAlAACPBAAgCcoBAADVAgAwywEAAIkBABDMAQAA1QIAMM0BAQCsAgAh0gFAAK8CACHTAUAArwIAIYICAQCsAgAhgwIBAKwCACGEAkAArwIAIQMAAAB2ACABAACIAQAwIwAAiQEAIAMAAAB2ACABAAB3ADACAABzACABAAAAKQAgAQAAACkAIAMAAAAnACABAAAoADACAAApACADAAAAJwAgAQAAKAAwAgAAKQAgAwAAACcAIAEAACgAMAIAACkAIAkDAACNBAAgzQECAAAAAc4BAQAAAAHSAUAAAAAB0wFAAAAAAf4BAQAAAAH_AQEAAAABgAIBAAAAAYECAQAAAAEBFwAAkQEAIAjNAQIAAAABzgEBAAAAAdIBQAAAAAHTAUAAAAAB_gEBAAAAAf8BAQAAAAGAAgEAAAABgQIBAAAAAQEXAACTAQAwARcAAJMBADAJAwAAjAQAIM0BAgCEAwAhzgEBAIMDACHSAUAAhgMAIdMBQACGAwAh_gEBAIMDACH_AQEAgwMAIYACAQCDAwAhgQIBAIUDACECAAAAKQAgFwAAlgEAIAjNAQIAhAMAIc4BAQCDAwAh0gFAAIYDACHTAUAAhgMAIf4BAQCDAwAh_wEBAIMDACGAAgEAgwMAIYECAQCFAwAhAgAAACcAIBcAAJgBACACAAAAJwAgFwAAmAEAIAMAAAApACAeAACRAQAgHwAAlgEAIAEAAAApACABAAAAJwAgBggAAIcEACAkAACKBAAgJQAAiQQAIGYAAIgEACBnAACLBAAggQIAAP0CACALygEAANQCADDLAQAAnwEAEMwBAADUAgAwzQECAK0CACHOAQEArAIAIdIBQACvAgAh0wFAAK8CACH-AQEArAIAIf8BAQCsAgAhgAIBAKwCACGBAgEArgIAIQMAAAAnACABAACeAQAwIwAAnwEAIAMAAAAnACABAAAoADACAAApACAJBwAAxAIAIMoBAADTAgAwywEAAKUBABDMAQAA0wIAMM0BAQAAAAHSAUAAwgIAIdMBQADCAgAh8gEBAAAAAf4BAQAAAAEBAAAAogEAIAEAAACiAQAgCQcAAMQCACDKAQAA0wIAMMsBAAClAQAQzAEAANMCADDNAQEAvwIAIdIBQADCAgAh0wFAAMICACHyAQEAvwIAIf4BAQC_AgAhAQcAAOQDACADAAAApQEAIAEAAKYBADACAACiAQAgAwAAAKUBACABAACmAQAwAgAAogEAIAMAAAClAQAgAQAApgEAMAIAAKIBACAGBwAAhgQAIM0BAQAAAAHSAUAAAAAB0wFAAAAAAfIBAQAAAAH-AQEAAAABARcAAKoBACAFzQEBAAAAAdIBQAAAAAHTAUAAAAAB8gEBAAAAAf4BAQAAAAEBFwAArAEAMAEXAACsAQAwBgcAAPwDACDNAQEAgwMAIdIBQACGAwAh0wFAAIYDACHyAQEAgwMAIf4BAQCDAwAhAgAAAKIBACAXAACvAQAgBc0BAQCDAwAh0gFAAIYDACHTAUAAhgMAIfIBAQCDAwAh_gEBAIMDACECAAAApQEAIBcAALEBACACAAAApQEAIBcAALEBACADAAAAogEAIB4AAKoBACAfAACvAQAgAQAAAKIBACABAAAApQEAIAMIAAD5AwAgJAAA-wMAICUAAPoDACAIygEAANICADDLAQAAuAEAEMwBAADSAgAwzQEBAKwCACHSAUAArwIAIdMBQACvAgAh8gEBAKwCACH-AQEArAIAIQMAAAClAQAgAQAAtwEAMCMAALgBACADAAAApQEAIAEAAKYBADACAACiAQAgAQAAAA8AIAEAAAAPACADAAAADQAgAQAADgAwAgAADwAgAwAAAA0AIAEAAA4AMAIAAA8AIAMAAAANACABAAAOADACAAAPACAUBgAA-AMAIAkAAN0DACALAADeAwAgDgAA3wMAIM0BAQAAAAHSAUAAAAAB0wFAAAAAAeABAQAAAAHoAQgAAAAB6wEBAAAAAfEBAQAAAAHyAQEAAAAB8wEBAAAAAfQBIAAAAAH1AQIAAAAB9gEAANsDACD3AQEAAAAB-AEAANwDACD5AQEAAAAB-gEBAAAAAQEXAADAAQAgEM0BAQAAAAHSAUAAAAAB0wFAAAAAAeABAQAAAAHoAQgAAAAB6wEBAAAAAfEBAQAAAAHyAQEAAAAB8wEBAAAAAfQBIAAAAAH1AQIAAAAB9gEAANsDACD3AQEAAAAB-AEAANwDACD5AQEAAAAB-gEBAAAAAQEXAADCAQAwARcAAMIBADAUBgAA9wMAIAkAAMADACALAADBAwAgDgAAwgMAIM0BAQCDAwAh0gFAAIYDACHTAUAAhgMAIeABAQCFAwAh6AEIAJwDACHrAQEAgwMAIfEBAQCDAwAh8gEBAIMDACHzAQEAhQMAIfQBIACOAwAh9QECAIQDACH2AQAAvQMAIPcBAQCFAwAh-AEAAL4DACD5AQEAhQMAIfoBAQCFAwAhAgAAAA8AIBcAAMUBACAQzQEBAIMDACHSAUAAhgMAIdMBQACGAwAh4AEBAIUDACHoAQgAnAMAIesBAQCDAwAh8QEBAIMDACHyAQEAgwMAIfMBAQCFAwAh9AEgAI4DACH1AQIAhAMAIfYBAAC9AwAg9wEBAIUDACH4AQAAvgMAIPkBAQCFAwAh-gEBAIUDACECAAAADQAgFwAAxwEAIAIAAAANACAXAADHAQAgAwAAAA8AIB4AAMABACAfAADFAQAgAQAAAA8AIAEAAAANACAKCAAA8gMAICQAAPUDACAlAAD0AwAgZgAA8wMAIGcAAPYDACDgAQAA_QIAIPMBAAD9AgAg9wEAAP0CACD5AQAA_QIAIPoBAAD9AgAgE8oBAADQAgAwywEAAM4BABDMAQAA0AIAMM0BAQCsAgAh0gFAAK8CACHTAUAArwIAIeABAQCuAgAh6AEIAMcCACHrAQEArAIAIfEBAQCsAgAh8gEBAKwCACHzAQEArgIAIfQBIAC7AgAh9QECAK0CACH2AQAA0QIAIPcBAQCuAgAh-AEAANECACD5AQEArgIAIfoBAQCuAgAhAwAAAA0AIAEAAM0BADAjAADOAQAgAwAAAA0AIAEAAA4AMAIAAA8AIAEAAAAhACABAAAAIQAgAwAAAB8AIAEAACAAMAIAACEAIAMAAAAfACABAAAgADACAAAhACADAAAAHwAgAQAAIAAwAgAAIQAgDQMAALEDACAGAADxAwAgDAAAsgMAIM0BAQAAAAHOAQEAAAAB0gFAAAAAAdMBQAAAAAHhAQEAAAAB6gEBAAAAAesBAQAAAAHsAQgAAAAB7gEAAADuAQLwAQAAAPABAgEXAADWAQAgCs0BAQAAAAHOAQEAAAAB0gFAAAAAAdMBQAAAAAHhAQEAAAAB6gEBAAAAAesBAQAAAAHsAQgAAAAB7gEAAADuAQLwAQAAAPABAgEXAADYAQAwARcAANgBADANAwAAoAMAIAYAAPADACAMAAChAwAgzQEBAIMDACHOAQEAgwMAIdIBQACGAwAh0wFAAIYDACHhAQEAgwMAIeoBAQCFAwAh6wEBAIMDACHsAQgAnAMAIe4BAACdA-4BIvABAACeA_ABIgIAAAAhACAXAADbAQAgCs0BAQCDAwAhzgEBAIMDACHSAUAAhgMAIdMBQACGAwAh4QEBAIMDACHqAQEAhQMAIesBAQCDAwAh7AEIAJwDACHuAQAAnQPuASLwAQAAngPwASICAAAAHwAgFwAA3QEAIAIAAAAfACAXAADdAQAgAwAAACEAIB4AANYBACAfAADbAQAgAQAAACEAIAEAAAAfACAGCAAA6wMAICQAAO4DACAlAADtAwAgZgAA7AMAIGcAAO8DACDqAQAA_QIAIA3KAQAAyQIAMMsBAADkAQAQzAEAAMkCADDNAQEArAIAIc4BAQCsAgAh0gFAAK8CACHTAUAArwIAIeEBAQCsAgAh6gEBAK4CACHrAQEArAIAIewBCADHAgAh7gEAAMoC7gEi8AEAAMsC8AEiAwAAAB8AIAEAAOMBADAjAADkAQAgAwAAAB8AIAEAACAAMAIAACEAIAEAAAAZACABAAAAGQAgAwAAABcAIAEAABgAMAIAABkAIAMAAAAXACABAAAYADACAAAZACADAAAAFwAgAQAAGAAwAgAAGQAgBwoAAK8DACANAADNAwAgzQEBAAAAAc8BAQAAAAHnAQEAAAAB6AEIAAAAAekBAgAAAAEBFwAA7AEAIAXNAQEAAAABzwEBAAAAAecBAQAAAAHoAQgAAAAB6QECAAAAAQEXAADuAQAwARcAAO4BADAHCgAArQMAIA0AAMsDACDNAQEAgwMAIc8BAQCDAwAh5wEBAIMDACHoAQgAnAMAIekBAgCEAwAhAgAAABkAIBcAAPEBACAFzQEBAIMDACHPAQEAgwMAIecBAQCDAwAh6AEIAJwDACHpAQIAhAMAIQIAAAAXACAXAADzAQAgAgAAABcAIBcAAPMBACADAAAAGQAgHgAA7AEAIB8AAPEBACABAAAAGQAgAQAAABcAIAUIAADmAwAgJAAA6QMAICUAAOgDACBmAADnAwAgZwAA6gMAIAjKAQAAxgIAMMsBAAD6AQAQzAEAAMYCADDNAQEArAIAIc8BAQCsAgAh5wEBAKwCACHoAQgAxwIAIekBAgCtAgAhAwAAABcAIAEAAPkBADAjAAD6AQAgAwAAABcAIAEAABgAMAIAABkAIA8DAADDAgAgBwAAxAIAIA8AAMUCACDKAQAAvgIAMMsBAAALABDMAQAAvgIAMM0BAQAAAAHOAQEAAAAB0gFAAMICACHTAUAAwgIAId8BAQC_AgAh4AEBAMACACHhAQEAvwIAIeIBAQC_AgAh4wEgAMECACEBAAAA_QEAIAEAAAD9AQAgBAMAAOMDACAHAADkAwAgDwAA5QMAIOABAAD9AgAgAwAAAAsAIAEAAIACADACAAD9AQAgAwAAAAsAIAEAAIACADACAAD9AQAgAwAAAAsAIAEAAIACADACAAD9AQAgDAMAAOADACAHAADhAwAgDwAA4gMAIM0BAQAAAAHOAQEAAAAB0gFAAAAAAdMBQAAAAAHfAQEAAAAB4AEBAAAAAeEBAQAAAAHiAQEAAAAB4wEgAAAAAQEXAACEAgAgCc0BAQAAAAHOAQEAAAAB0gFAAAAAAdMBQAAAAAHfAQEAAAAB4AEBAAAAAeEBAQAAAAHiAQEAAAAB4wEgAAAAAQEXAACGAgAwARcAAIYCADAMAwAAjwMAIAcAAJADACAPAACRAwAgzQEBAIMDACHOAQEAgwMAIdIBQACGAwAh0wFAAIYDACHfAQEAgwMAIeABAQCFAwAh4QEBAIMDACHiAQEAgwMAIeMBIACOAwAhAgAAAP0BACAXAACJAgAgCc0BAQCDAwAhzgEBAIMDACHSAUAAhgMAIdMBQACGAwAh3wEBAIMDACHgAQEAhQMAIeEBAQCDAwAh4gEBAIMDACHjASAAjgMAIQIAAAALACAXAACLAgAgAgAAAAsAIBcAAIsCACADAAAA_QEAIB4AAIQCACAfAACJAgAgAQAAAP0BACABAAAACwAgBAgAAIsDACAkAACNAwAgJQAAjAMAIOABAAD9AgAgDMoBAAC6AgAwywEAAJICABDMAQAAugIAMM0BAQCsAgAhzgEBAKwCACHSAUAArwIAIdMBQACvAgAh3wEBAKwCACHgAQEArgIAIeEBAQCsAgAh4gEBAKwCACHjASAAuwIAIQMAAAALACABAACRAgAwIwAAkgIAIAMAAAALACABAACAAgAwAgAA_QEAIAEAAAAVACABAAAAFQAgAwAAABMAIAEAABQAMAIAABUAIAMAAAATACABAAAUADACAAAVACADAAAAEwAgAQAAFAAwAgAAFQAgCQMAAIkDACAKAACKAwAgzQEBAAAAAc4BAQAAAAHPAQEAAAAB0AECAAAAAdEBAQAAAAHSAUAAAAAB0wFAAAAAAQEXAACaAgAgB80BAQAAAAHOAQEAAAABzwEBAAAAAdABAgAAAAHRAQEAAAAB0gFAAAAAAdMBQAAAAAEBFwAAnAIAMAEXAACcAgAwCQMAAIcDACAKAACIAwAgzQEBAIMDACHOAQEAgwMAIc8BAQCDAwAh0AECAIQDACHRAQEAhQMAIdIBQACGAwAh0wFAAIYDACECAAAAFQAgFwAAnwIAIAfNAQEAgwMAIc4BAQCDAwAhzwEBAIMDACHQAQIAhAMAIdEBAQCFAwAh0gFAAIYDACHTAUAAhgMAIQIAAAATACAXAAChAgAgAgAAABMAIBcAAKECACADAAAAFQAgHgAAmgIAIB8AAJ8CACABAAAAFQAgAQAAABMAIAYIAAD-AgAgJAAAgQMAICUAAIADACBmAAD_AgAgZwAAggMAINEBAAD9AgAgCsoBAACrAgAwywEAAKgCABDMAQAAqwIAMM0BAQCsAgAhzgEBAKwCACHPAQEArAIAIdABAgCtAgAh0QEBAK4CACHSAUAArwIAIdMBQACvAgAhAwAAABMAIAEAAKcCADAjAACoAgAgAwAAABMAIAEAABQAMAIAABUAIArKAQAAqwIAMMsBAACoAgAQzAEAAKsCADDNAQEArAIAIc4BAQCsAgAhzwEBAKwCACHQAQIArQIAIdEBAQCuAgAh0gFAAK8CACHTAUAArwIAIQ4IAACxAgAgJAAAuQIAICUAALkCACDUAQEAAAAB1QEBAAAABNYBAQAAAATXAQEAAAAB2AEBAAAAAdkBAQAAAAHaAQEAAAAB2wEBALgCACHcAQEAAAAB3QEBAAAAAd4BAQAAAAENCAAAsQIAICQAALECACAlAACxAgAgZgAAtwIAIGcAALECACDUAQIAAAAB1QECAAAABNYBAgAAAATXAQIAAAAB2AECAAAAAdkBAgAAAAHaAQIAAAAB2wECALYCACEOCAAAtAIAICQAALUCACAlAAC1AgAg1AEBAAAAAdUBAQAAAAXWAQEAAAAF1wEBAAAAAdgBAQAAAAHZAQEAAAAB2gEBAAAAAdsBAQCzAgAh3AEBAAAAAd0BAQAAAAHeAQEAAAABCwgAALECACAkAACyAgAgJQAAsgIAINQBQAAAAAHVAUAAAAAE1gFAAAAABNcBQAAAAAHYAUAAAAAB2QFAAAAAAdoBQAAAAAHbAUAAsAIAIQsIAACxAgAgJAAAsgIAICUAALICACDUAUAAAAAB1QFAAAAABNYBQAAAAATXAUAAAAAB2AFAAAAAAdkBQAAAAAHaAUAAAAAB2wFAALACACEI1AECAAAAAdUBAgAAAATWAQIAAAAE1wECAAAAAdgBAgAAAAHZAQIAAAAB2gECAAAAAdsBAgCxAgAhCNQBQAAAAAHVAUAAAAAE1gFAAAAABNcBQAAAAAHYAUAAAAAB2QFAAAAAAdoBQAAAAAHbAUAAsgIAIQ4IAAC0AgAgJAAAtQIAICUAALUCACDUAQEAAAAB1QEBAAAABdYBAQAAAAXXAQEAAAAB2AEBAAAAAdkBAQAAAAHaAQEAAAAB2wEBALMCACHcAQEAAAAB3QEBAAAAAd4BAQAAAAEI1AECAAAAAdUBAgAAAAXWAQIAAAAF1wECAAAAAdgBAgAAAAHZAQIAAAAB2gECAAAAAdsBAgC0AgAhC9QBAQAAAAHVAQEAAAAF1gEBAAAABdcBAQAAAAHYAQEAAAAB2QEBAAAAAdoBAQAAAAHbAQEAtQIAIdwBAQAAAAHdAQEAAAAB3gEBAAAAAQ0IAACxAgAgJAAAsQIAICUAALECACBmAAC3AgAgZwAAsQIAINQBAgAAAAHVAQIAAAAE1gECAAAABNcBAgAAAAHYAQIAAAAB2QECAAAAAdoBAgAAAAHbAQIAtgIAIQjUAQgAAAAB1QEIAAAABNYBCAAAAATXAQgAAAAB2AEIAAAAAdkBCAAAAAHaAQgAAAAB2wEIALcCACEOCAAAsQIAICQAALkCACAlAAC5AgAg1AEBAAAAAdUBAQAAAATWAQEAAAAE1wEBAAAAAdgBAQAAAAHZAQEAAAAB2gEBAAAAAdsBAQC4AgAh3AEBAAAAAd0BAQAAAAHeAQEAAAABC9QBAQAAAAHVAQEAAAAE1gEBAAAABNcBAQAAAAHYAQEAAAAB2QEBAAAAAdoBAQAAAAHbAQEAuQIAIdwBAQAAAAHdAQEAAAAB3gEBAAAAAQzKAQAAugIAMMsBAACSAgAQzAEAALoCADDNAQEArAIAIc4BAQCsAgAh0gFAAK8CACHTAUAArwIAId8BAQCsAgAh4AEBAK4CACHhAQEArAIAIeIBAQCsAgAh4wEgALsCACEFCAAAsQIAICQAAL0CACAlAAC9AgAg1AEgAAAAAdsBIAC8AgAhBQgAALECACAkAAC9AgAgJQAAvQIAINQBIAAAAAHbASAAvAIAIQLUASAAAAAB2wEgAL0CACEPAwAAwwIAIAcAAMQCACAPAADFAgAgygEAAL4CADDLAQAACwAQzAEAAL4CADDNAQEAvwIAIc4BAQC_AgAh0gFAAMICACHTAUAAwgIAId8BAQC_AgAh4AEBAMACACHhAQEAvwIAIeIBAQC_AgAh4wEgAMECACEL1AEBAAAAAdUBAQAAAATWAQEAAAAE1wEBAAAAAdgBAQAAAAHZAQEAAAAB2gEBAAAAAdsBAQC5AgAh3AEBAAAAAd0BAQAAAAHeAQEAAAABC9QBAQAAAAHVAQEAAAAF1gEBAAAABdcBAQAAAAHYAQEAAAAB2QEBAAAAAdoBAQAAAAHbAQEAtQIAIdwBAQAAAAHdAQEAAAAB3gEBAAAAAQLUASAAAAAB2wEgAL0CACEI1AFAAAAAAdUBQAAAAATWAUAAAAAE1wFAAAAAAdgBQAAAAAHZAUAAAAAB2gFAAAAAAdsBQACyAgAhFQQAAOYCACAFAADnAgAgCwAA6QIAIA8AAMUCACAQAADoAgAgEQAA6gIAIMoBAADjAgAwywEAADEAEMwBAADjAgAwzQEBAL8CACHSAUAAwgIAIdMBQADCAgAh4gEBAMACACHuAQAA5QKVAiLyAQEAvwIAIfMBAQDAAgAhkAIBAL8CACGRAiAAwQIAIZMCAADkApMCIpYCAAAxACCXAgAAMQAgA-QBAAANACDlAQAADQAg5gEAAA0AIAPkAQAAHwAg5QEAAB8AIOYBAAAfACAIygEAAMYCADDLAQAA-gEAEMwBAADGAgAwzQEBAKwCACHPAQEArAIAIecBAQCsAgAh6AEIAMcCACHpAQIArQIAIQ0IAACxAgAgJAAAtwIAICUAALcCACBmAAC3AgAgZwAAtwIAINQBCAAAAAHVAQgAAAAE1gEIAAAABNcBCAAAAAHYAQgAAAAB2QEIAAAAAdoBCAAAAAHbAQgAyAIAIQ0IAACxAgAgJAAAtwIAICUAALcCACBmAAC3AgAgZwAAtwIAINQBCAAAAAHVAQgAAAAE1gEIAAAABNcBCAAAAAHYAQgAAAAB2QEIAAAAAdoBCAAAAAHbAQgAyAIAIQ3KAQAAyQIAMMsBAADkAQAQzAEAAMkCADDNAQEArAIAIc4BAQCsAgAh0gFAAK8CACHTAUAArwIAIeEBAQCsAgAh6gEBAK4CACHrAQEArAIAIewBCADHAgAh7gEAAMoC7gEi8AEAAMsC8AEiBwgAALECACAkAADPAgAgJQAAzwIAINQBAAAA7gEC1QEAAADuAQjWAQAAAO4BCNsBAADOAu4BIgcIAACxAgAgJAAAzQIAICUAAM0CACDUAQAAAPABAtUBAAAA8AEI1gEAAADwAQjbAQAAzALwASIHCAAAsQIAICQAAM0CACAlAADNAgAg1AEAAADwAQLVAQAAAPABCNYBAAAA8AEI2wEAAMwC8AEiBNQBAAAA8AEC1QEAAADwAQjWAQAAAPABCNsBAADNAvABIgcIAACxAgAgJAAAzwIAICUAAM8CACDUAQAAAO4BAtUBAAAA7gEI1gEAAADuAQjbAQAAzgLuASIE1AEAAADuAQLVAQAAAO4BCNYBAAAA7gEI2wEAAM8C7gEiE8oBAADQAgAwywEAAM4BABDMAQAA0AIAMM0BAQCsAgAh0gFAAK8CACHTAUAArwIAIeABAQCuAgAh6AEIAMcCACHrAQEArAIAIfEBAQCsAgAh8gEBAKwCACHzAQEArgIAIfQBIAC7AgAh9QECAK0CACH2AQAA0QIAIPcBAQCuAgAh-AEAANECACD5AQEArgIAIfoBAQCuAgAhBNQBAQAAAAX7AQEAAAAB_AEBAAAABP0BAQAAAAQIygEAANICADDLAQAAuAEAEMwBAADSAgAwzQEBAKwCACHSAUAArwIAIdMBQACvAgAh8gEBAKwCACH-AQEArAIAIQkHAADEAgAgygEAANMCADDLAQAApQEAEMwBAADTAgAwzQEBAL8CACHSAUAAwgIAIdMBQADCAgAh8gEBAL8CACH-AQEAvwIAIQvKAQAA1AIAMMsBAACfAQAQzAEAANQCADDNAQIArQIAIc4BAQCsAgAh0gFAAK8CACHTAUAArwIAIf4BAQCsAgAh_wEBAKwCACGAAgEArAIAIYECAQCuAgAhCcoBAADVAgAwywEAAIkBABDMAQAA1QIAMM0BAQCsAgAh0gFAAK8CACHTAUAArwIAIYICAQCsAgAhgwIBAKwCACGEAkAArwIAIQnKAQAA1gIAMMsBAAB2ABDMAQAA1gIAMM0BAQC_AgAh0gFAAMICACHTAUAAwgIAIYICAQC_AgAhgwIBAL8CACGEAkAAwgIAIRDKAQAA1wIAMMsBAABwABDMAQAA1wIAMM0BAQCsAgAhzgEBAKwCACHSAUAArwIAIdMBQACvAgAh6wEBAKwCACGFAgEArAIAIYYCAQCuAgAhhwIBAK4CACGIAgEArgIAIYkCQADYAgAhigJAANgCACGLAgEArgIAIYwCAQCuAgAhCwgAALQCACAkAADaAgAgJQAA2gIAINQBQAAAAAHVAUAAAAAF1gFAAAAABdcBQAAAAAHYAUAAAAAB2QFAAAAAAdoBQAAAAAHbAUAA2QIAIQsIAAC0AgAgJAAA2gIAICUAANoCACDUAUAAAAAB1QFAAAAABdYBQAAAAAXXAUAAAAAB2AFAAAAAAdkBQAAAAAHaAUAAAAAB2wFAANkCACEI1AFAAAAAAdUBQAAAAAXWAUAAAAAF1wFAAAAAAdgBQAAAAAHZAUAAAAAB2gFAAAAAAdsBQADaAgAhC8oBAADbAgAwywEAAFoAEMwBAADbAgAwzQEBAKwCACHOAQEArAIAIdIBQACvAgAh0wFAAK8CACGEAkAArwIAIY0CAQCsAgAhjgIBAK4CACGPAgEArgIAIQ3KAQAA3AIAMMsBAABEABDMAQAA3AIAMM0BAQCsAgAh0gFAAK8CACHTAUAArwIAIeIBAQCuAgAh7gEAAN4ClQIi8gEBAKwCACHzAQEArgIAIZACAQCsAgAhkQIgALsCACGTAgAA3QKTAiIHCAAAsQIAICQAAOICACAlAADiAgAg1AEAAACTAgLVAQAAAJMCCNYBAAAAkwII2wEAAOECkwIiBwgAALECACAkAADgAgAgJQAA4AIAINQBAAAAlQIC1QEAAACVAgjWAQAAAJUCCNsBAADfApUCIgcIAACxAgAgJAAA4AIAICUAAOACACDUAQAAAJUCAtUBAAAAlQII1gEAAACVAgjbAQAA3wKVAiIE1AEAAACVAgLVAQAAAJUCCNYBAAAAlQII2wEAAOAClQIiBwgAALECACAkAADiAgAgJQAA4gIAINQBAAAAkwIC1QEAAACTAgjWAQAAAJMCCNsBAADhApMCIgTUAQAAAJMCAtUBAAAAkwII1gEAAACTAgjbAQAA4gKTAiITBAAA5gIAIAUAAOcCACALAADpAgAgDwAAxQIAIBAAAOgCACARAADqAgAgygEAAOMCADDLAQAAMQAQzAEAAOMCADDNAQEAvwIAIdIBQADCAgAh0wFAAMICACHiAQEAwAIAIe4BAADlApUCIvIBAQC_AgAh8wEBAMACACGQAgEAvwIAIZECIADBAgAhkwIAAOQCkwIiBNQBAAAAkwIC1QEAAACTAgjWAQAAAJMCCNsBAADiApMCIgTUAQAAAJUCAtUBAAAAlQII1gEAAACVAgjbAQAA4AKVAiID5AEAAAMAIOUBAAADACDmAQAAAwAgA-QBAAAHACDlAQAABwAg5gEAAAcAIBEDAADDAgAgBwAAxAIAIA8AAMUCACDKAQAAvgIAMMsBAAALABDMAQAAvgIAMM0BAQC_AgAhzgEBAL8CACHSAUAAwgIAIdMBQADCAgAh3wEBAL8CACHgAQEAwAIAIeEBAQC_AgAh4gEBAL8CACHjASAAwQIAIZYCAAALACCXAgAACwAgA-QBAAATACDlAQAAEwAg5gEAABMAIAPkAQAAJwAg5QEAACcAIOYBAAAnACAMAwAAwwIAIMoBAADrAgAwywEAACcAEMwBAADrAgAwzQECAOwCACHOAQEAvwIAIdIBQADCAgAh0wFAAMICACH-AQEAvwIAIf8BAQC_AgAhgAIBAL8CACGBAgEAwAIAIQjUAQIAAAAB1QECAAAABNYBAgAAAATXAQIAAAAB2AECAAAAAdkBAgAAAAHaAQIAAAAB2wECALECACEQAwAAwwIAIAYAAPECACAMAADyAgAgygEAAO0CADDLAQAAHwAQzAEAAO0CADDNAQEAvwIAIc4BAQC_AgAh0gFAAMICACHTAUAAwgIAIeEBAQC_AgAh6gEBAMACACHrAQEAvwIAIewBCADuAgAh7gEAAO8C7gEi8AEAAPAC8AEiCNQBCAAAAAHVAQgAAAAE1gEIAAAABNcBCAAAAAHYAQgAAAAB2QEIAAAAAdoBCAAAAAHbAQgAtwIAIQTUAQAAAO4BAtUBAAAA7gEI1gEAAADuAQjbAQAAzwLuASIE1AEAAADwAQLVAQAAAPABCNYBAAAA8AEI2wEAAM0C8AEiEQMAAMMCACAHAADEAgAgDwAAxQIAIMoBAAC-AgAwywEAAAsAEMwBAAC-AgAwzQEBAL8CACHOAQEAvwIAIdIBQADCAgAh0wFAAMICACHfAQEAvwIAIeABAQDAAgAh4QEBAL8CACHiAQEAvwIAIeMBIADBAgAhlgIAAAsAIJcCAAALACAD5AEAABcAIOUBAAAXACDmAQAAFwAgCgoAAPUCACANAAD0AgAgygEAAPMCADDLAQAAFwAQzAEAAPMCADDNAQEAvwIAIc8BAQC_AgAh5wEBAL8CACHoAQgA7gIAIekBAgDsAgAhEgMAAMMCACAGAADxAgAgDAAA8gIAIMoBAADtAgAwywEAAB8AEMwBAADtAgAwzQEBAL8CACHOAQEAvwIAIdIBQADCAgAh0wFAAMICACHhAQEAvwIAIeoBAQDAAgAh6wEBAL8CACHsAQgA7gIAIe4BAADvAu4BIvABAADwAvABIpYCAAAfACCXAgAAHwAgGQYAAPECACAJAAD5AgAgCwAA6QIAIA4AAPICACDKAQAA-AIAMMsBAAANABDMAQAA-AIAMM0BAQC_AgAh0gFAAMICACHTAUAAwgIAIeABAQDAAgAh6AEIAO4CACHrAQEAvwIAIfEBAQC_AgAh8gEBAL8CACHzAQEAwAIAIfQBIADBAgAh9QECAOwCACH2AQAA0QIAIPcBAQDAAgAh-AEAANECACD5AQEAwAIAIfoBAQDAAgAhlgIAAA0AIJcCAAANACACzgEBAAAAAc8BAQAAAAEMAwAAwwIAIAoAAPUCACDKAQAA9wIAMMsBAAATABDMAQAA9wIAMM0BAQC_AgAhzgEBAL8CACHPAQEAvwIAIdABAgDsAgAh0QEBAMACACHSAUAAwgIAIdMBQADCAgAhFwYAAPECACAJAAD5AgAgCwAA6QIAIA4AAPICACDKAQAA-AIAMMsBAAANABDMAQAA-AIAMM0BAQC_AgAh0gFAAMICACHTAUAAwgIAIeABAQDAAgAh6AEIAO4CACHrAQEAvwIAIfEBAQC_AgAh8gEBAL8CACHzAQEAwAIAIfQBIADBAgAh9QECAOwCACH2AQAA0QIAIPcBAQDAAgAh-AEAANECACD5AQEAwAIAIfoBAQDAAgAhCwcAAMQCACDKAQAA0wIAMMsBAAClAQAQzAEAANMCADDNAQEAvwIAIdIBQADCAgAh0wFAAMICACHyAQEAvwIAIf4BAQC_AgAhlgIAAKUBACCXAgAApQEAIBEDAADDAgAgygEAAPoCADDLAQAABwAQzAEAAPoCADDNAQEAvwIAIc4BAQC_AgAh0gFAAMICACHTAUAAwgIAIesBAQC_AgAhhQIBAL8CACGGAgEAwAIAIYcCAQDAAgAhiAIBAMACACGJAkAA-wIAIYoCQAD7AgAhiwIBAMACACGMAgEAwAIAIQjUAUAAAAAB1QFAAAAABdYBQAAAAAXXAUAAAAAB2AFAAAAAAdkBQAAAAAHaAUAAAAAB2wFAANoCACEMAwAAwwIAIMoBAAD8AgAwywEAAAMAEMwBAAD8AgAwzQEBAL8CACHOAQEAvwIAIdIBQADCAgAh0wFAAMICACGEAkAAwgIAIY0CAQC_AgAhjgIBAMACACGPAgEAwAIAIQAAAAAAAAGbAgEAAAABBZsCAgAAAAGiAgIAAAABowICAAAAAaQCAgAAAAGlAgIAAAABAZsCAQAAAAEBmwJAAAAAAQUeAACwBQAgHwAAtgUAIJgCAACxBQAgmQIAALUFACCeAgAAAQAgBR4AAK4FACAfAACzBQAgmAIAAK8FACCZAgAAsgUAIJ4CAAAPACADHgAAsAUAIJgCAACxBQAgngIAAAEAIAMeAACuBQAgmAIAAK8FACCeAgAADwAgAAAAAZsCIAAAAAEFHgAAkAUAIB8AAKwFACCYAgAAkQUAIJkCAACrBQAgngIAAAEAIAseAACzAwAwHwAAuAMAMJgCAAC0AwAwmQIAALUDADCaAgAAtgMAIJsCAAC3AwAwnAIAALcDADCdAgAAtwMAMJ4CAAC3AwAwnwIAALkDADCgAgAAugMAMAseAACSAwAwHwAAlwMAMJgCAACTAwAwmQIAAJQDADCaAgAAlQMAIJsCAACWAwAwnAIAAJYDADCdAgAAlgMAMJ4CAACWAwAwnwIAAJgDADCgAgAAmQMAMAsDAACxAwAgDAAAsgMAIM0BAQAAAAHOAQEAAAAB0gFAAAAAAdMBQAAAAAHhAQEAAAAB6gEBAAAAAewBCAAAAAHuAQAAAO4BAvABAAAA8AECAgAAACEAIB4AALADACADAAAAIQAgHgAAsAMAIB8AAJ8DACABFwAAqgUAMBADAADDAgAgBgAA8QIAIAwAAPICACDKAQAA7QIAMMsBAAAfABDMAQAA7QIAMM0BAQAAAAHOAQEAvwIAIdIBQADCAgAh0wFAAMICACHhAQEAvwIAIeoBAQAAAAHrAQEAvwIAIewBCADuAgAh7gEAAO8C7gEi8AEAAPAC8AEiAgAAACEAIBcAAJ8DACACAAAAmgMAIBcAAJsDACANygEAAJkDADDLAQAAmgMAEMwBAACZAwAwzQEBAL8CACHOAQEAvwIAIdIBQADCAgAh0wFAAMICACHhAQEAvwIAIeoBAQDAAgAh6wEBAL8CACHsAQgA7gIAIe4BAADvAu4BIvABAADwAvABIg3KAQAAmQMAMMsBAACaAwAQzAEAAJkDADDNAQEAvwIAIc4BAQC_AgAh0gFAAMICACHTAUAAwgIAIeEBAQC_AgAh6gEBAMACACHrAQEAvwIAIewBCADuAgAh7gEAAO8C7gEi8AEAAPAC8AEiCc0BAQCDAwAhzgEBAIMDACHSAUAAhgMAIdMBQACGAwAh4QEBAIMDACHqAQEAhQMAIewBCACcAwAh7gEAAJ0D7gEi8AEAAJ4D8AEiBZsCCAAAAAGiAggAAAABowIIAAAAAaQCCAAAAAGlAggAAAABAZsCAAAA7gECAZsCAAAA8AECCwMAAKADACAMAAChAwAgzQEBAIMDACHOAQEAgwMAIdIBQACGAwAh0wFAAIYDACHhAQEAgwMAIeoBAQCFAwAh7AEIAJwDACHuAQAAnQPuASLwAQAAngPwASIFHgAAnwUAIB8AAKgFACCYAgAAoAUAIJkCAACnBQAgngIAAAEAIAseAACiAwAwHwAApwMAMJgCAACjAwAwmQIAAKQDADCaAgAApQMAIJsCAACmAwAwnAIAAKYDADCdAgAApgMAMJ4CAACmAwAwnwIAAKgDADCgAgAAqQMAMAUKAACvAwAgzQEBAAAAAc8BAQAAAAHoAQgAAAAB6QECAAAAAQIAAAAZACAeAACuAwAgAwAAABkAIB4AAK4DACAfAACsAwAgARcAAKYFADAKCgAA9QIAIA0AAPQCACDKAQAA8wIAMMsBAAAXABDMAQAA8wIAMM0BAQAAAAHPAQEAvwIAIecBAQC_AgAh6AEIAO4CACHpAQIA7AIAIQIAAAAZACAXAACsAwAgAgAAAKoDACAXAACrAwAgCMoBAACpAwAwywEAAKoDABDMAQAAqQMAMM0BAQC_AgAhzwEBAL8CACHnAQEAvwIAIegBCADuAgAh6QECAOwCACEIygEAAKkDADDLAQAAqgMAEMwBAACpAwAwzQEBAL8CACHPAQEAvwIAIecBAQC_AgAh6AEIAO4CACHpAQIA7AIAIQTNAQEAgwMAIc8BAQCDAwAh6AEIAJwDACHpAQIAhAMAIQUKAACtAwAgzQEBAIMDACHPAQEAgwMAIegBCACcAwAh6QECAIQDACEFHgAAoQUAIB8AAKQFACCYAgAAogUAIJkCAACjBQAgngIAAA8AIAUKAACvAwAgzQEBAAAAAc8BAQAAAAHoAQgAAAAB6QECAAAAAQMeAAChBQAgmAIAAKIFACCeAgAADwAgCwMAALEDACAMAACyAwAgzQEBAAAAAc4BAQAAAAHSAUAAAAAB0wFAAAAAAeEBAQAAAAHqAQEAAAAB7AEIAAAAAe4BAAAA7gEC8AEAAADwAQIDHgAAnwUAIJgCAACgBQAgngIAAAEAIAQeAACiAwAwmAIAAKMDADCaAgAApQMAIJ4CAACmAwAwEgkAAN0DACALAADeAwAgDgAA3wMAIM0BAQAAAAHSAUAAAAAB0wFAAAAAAeABAQAAAAHoAQgAAAAB8QEBAAAAAfIBAQAAAAHzAQEAAAAB9AEgAAAAAfUBAgAAAAH2AQAA2wMAIPcBAQAAAAH4AQAA3AMAIPkBAQAAAAH6AQEAAAABAgAAAA8AIB4AANoDACADAAAADwAgHgAA2gMAIB8AAL8DACABFwAAngUAMBcGAADxAgAgCQAA-QIAIAsAAOkCACAOAADyAgAgygEAAPgCADDLAQAADQAQzAEAAPgCADDNAQEAAAAB0gFAAMICACHTAUAAwgIAIeABAQDAAgAh6AEIAO4CACHrAQEAvwIAIfEBAQC_AgAh8gEBAL8CACHzAQEAwAIAIfQBIADBAgAh9QECAOwCACH2AQAA0QIAIPcBAQDAAgAh-AEAANECACD5AQEAwAIAIfoBAQDAAgAhAgAAAA8AIBcAAL8DACACAAAAuwMAIBcAALwDACATygEAALoDADDLAQAAuwMAEMwBAAC6AwAwzQEBAL8CACHSAUAAwgIAIdMBQADCAgAh4AEBAMACACHoAQgA7gIAIesBAQC_AgAh8QEBAL8CACHyAQEAvwIAIfMBAQDAAgAh9AEgAMECACH1AQIA7AIAIfYBAADRAgAg9wEBAMACACH4AQAA0QIAIPkBAQDAAgAh-gEBAMACACETygEAALoDADDLAQAAuwMAEMwBAAC6AwAwzQEBAL8CACHSAUAAwgIAIdMBQADCAgAh4AEBAMACACHoAQgA7gIAIesBAQC_AgAh8QEBAL8CACHyAQEAvwIAIfMBAQDAAgAh9AEgAMECACH1AQIA7AIAIfYBAADRAgAg9wEBAMACACH4AQAA0QIAIPkBAQDAAgAh-gEBAMACACEPzQEBAIMDACHSAUAAhgMAIdMBQACGAwAh4AEBAIUDACHoAQgAnAMAIfEBAQCDAwAh8gEBAIMDACHzAQEAhQMAIfQBIACOAwAh9QECAIQDACH2AQAAvQMAIPcBAQCFAwAh-AEAAL4DACD5AQEAhQMAIfoBAQCFAwAhApsCAQAAAAShAgEAAAAFApsCAQAAAAShAgEAAAAFEgkAAMADACALAADBAwAgDgAAwgMAIM0BAQCDAwAh0gFAAIYDACHTAUAAhgMAIeABAQCFAwAh6AEIAJwDACHxAQEAgwMAIfIBAQCDAwAh8wEBAIUDACH0ASAAjgMAIfUBAgCEAwAh9gEAAL0DACD3AQEAhQMAIfgBAAC-AwAg-QEBAIUDACH6AQEAhQMAIQUeAACSBQAgHwAAnAUAIJgCAACTBQAgmQIAAJsFACCeAgAAogEAIAseAADOAwAwHwAA0wMAMJgCAADPAwAwmQIAANADADCaAgAA0QMAIJsCAADSAwAwnAIAANIDADCdAgAA0gMAMJ4CAADSAwAwnwIAANQDADCgAgAA1QMAMAseAADDAwAwHwAAxwMAMJgCAADEAwAwmQIAAMUDADCaAgAAxgMAIJsCAACmAwAwnAIAAKYDADCdAgAApgMAMJ4CAACmAwAwnwIAAMgDADCgAgAAqQMAMAUNAADNAwAgzQEBAAAAAecBAQAAAAHoAQgAAAAB6QECAAAAAQIAAAAZACAeAADMAwAgAwAAABkAIB4AAMwDACAfAADKAwAgARcAAJoFADACAAAAGQAgFwAAygMAIAIAAACqAwAgFwAAyQMAIATNAQEAgwMAIecBAQCDAwAh6AEIAJwDACHpAQIAhAMAIQUNAADLAwAgzQEBAIMDACHnAQEAgwMAIegBCACcAwAh6QECAIQDACEFHgAAlQUAIB8AAJgFACCYAgAAlgUAIJkCAACXBQAgngIAACEAIAUNAADNAwAgzQEBAAAAAecBAQAAAAHoAQgAAAAB6QECAAAAAQMeAACVBQAgmAIAAJYFACCeAgAAIQAgBwMAAIkDACDNAQEAAAABzgEBAAAAAdABAgAAAAHRAQEAAAAB0gFAAAAAAdMBQAAAAAECAAAAFQAgHgAA2QMAIAMAAAAVACAeAADZAwAgHwAA2AMAIAEXAACUBQAwDQMAAMMCACAKAAD1AgAgygEAAPcCADDLAQAAEwAQzAEAAPcCADDNAQEAAAABzgEBAL8CACHPAQEAvwIAIdABAgDsAgAh0QEBAMACACHSAUAAwgIAIdMBQADCAgAhlQIAAPYCACACAAAAFQAgFwAA2AMAIAIAAADWAwAgFwAA1wMAIArKAQAA1QMAMMsBAADWAwAQzAEAANUDADDNAQEAvwIAIc4BAQC_AgAhzwEBAL8CACHQAQIA7AIAIdEBAQDAAgAh0gFAAMICACHTAUAAwgIAIQrKAQAA1QMAMMsBAADWAwAQzAEAANUDADDNAQEAvwIAIc4BAQC_AgAhzwEBAL8CACHQAQIA7AIAIdEBAQDAAgAh0gFAAMICACHTAUAAwgIAIQbNAQEAgwMAIc4BAQCDAwAh0AECAIQDACHRAQEAhQMAIdIBQACGAwAh0wFAAIYDACEHAwAAhwMAIM0BAQCDAwAhzgEBAIMDACHQAQIAhAMAIdEBAQCFAwAh0gFAAIYDACHTAUAAhgMAIQcDAACJAwAgzQEBAAAAAc4BAQAAAAHQAQIAAAAB0QEBAAAAAdIBQAAAAAHTAUAAAAABEgkAAN0DACALAADeAwAgDgAA3wMAIM0BAQAAAAHSAUAAAAAB0wFAAAAAAeABAQAAAAHoAQgAAAAB8QEBAAAAAfIBAQAAAAHzAQEAAAAB9AEgAAAAAfUBAgAAAAH2AQAA2wMAIPcBAQAAAAH4AQAA3AMAIPkBAQAAAAH6AQEAAAABAZsCAQAAAAQBmwIBAAAABAMeAACSBQAgmAIAAJMFACCeAgAAogEAIAQeAADOAwAwmAIAAM8DADCaAgAA0QMAIJ4CAADSAwAwBB4AAMMDADCYAgAAxAMAMJoCAADGAwAgngIAAKYDADADHgAAkAUAIJgCAACRBQAgngIAAAEAIAQeAACzAwAwmAIAALQDADCaAgAAtgMAIJ4CAAC3AwAwBB4AAJIDADCYAgAAkwMAMJoCAACVAwAgngIAAJYDADAIBAAA6AQAIAUAAOkEACALAADrBAAgDwAA5QMAIBAAAOoEACARAADsBAAg4gEAAP0CACDzAQAA_QIAIAAAAAAAAAAAAAAAAAUeAACLBQAgHwAAjgUAIJgCAACMBQAgmQIAAI0FACCeAgAA_QEAIAMeAACLBQAgmAIAAIwFACCeAgAA_QEAIAAAAAAABR4AAIYFACAfAACJBQAgmAIAAIcFACCZAgAAiAUAIJ4CAAD9AQAgAx4AAIYFACCYAgAAhwUAIJ4CAAD9AQAgAAAACx4AAP0DADAfAACBBAAwmAIAAP4DADCZAgAA_wMAMJoCAACABAAgmwIAALcDADCcAgAAtwMAMJ0CAAC3AwAwngIAALcDADCfAgAAggQAMKACAAC6AwAwEgYAAPgDACALAADeAwAgDgAA3wMAIM0BAQAAAAHSAUAAAAAB0wFAAAAAAeABAQAAAAHoAQgAAAAB6wEBAAAAAfIBAQAAAAHzAQEAAAAB9AEgAAAAAfUBAgAAAAH2AQAA2wMAIPcBAQAAAAH4AQAA3AMAIPkBAQAAAAH6AQEAAAABAgAAAA8AIB4AAIUEACADAAAADwAgHgAAhQQAIB8AAIQEACABFwAAhQUAMAIAAAAPACAXAACEBAAgAgAAALsDACAXAACDBAAgD80BAQCDAwAh0gFAAIYDACHTAUAAhgMAIeABAQCFAwAh6AEIAJwDACHrAQEAgwMAIfIBAQCDAwAh8wEBAIUDACH0ASAAjgMAIfUBAgCEAwAh9gEAAL0DACD3AQEAhQMAIfgBAAC-AwAg-QEBAIUDACH6AQEAhQMAIRIGAAD3AwAgCwAAwQMAIA4AAMIDACDNAQEAgwMAIdIBQACGAwAh0wFAAIYDACHgAQEAhQMAIegBCACcAwAh6wEBAIMDACHyAQEAgwMAIfMBAQCFAwAh9AEgAI4DACH1AQIAhAMAIfYBAAC9AwAg9wEBAIUDACH4AQAAvgMAIPkBAQCFAwAh-gEBAIUDACESBgAA-AMAIAsAAN4DACAOAADfAwAgzQEBAAAAAdIBQAAAAAHTAUAAAAAB4AEBAAAAAegBCAAAAAHrAQEAAAAB8gEBAAAAAfMBAQAAAAH0ASAAAAAB9QECAAAAAfYBAADbAwAg9wEBAAAAAfgBAADcAwAg-QEBAAAAAfoBAQAAAAEEHgAA_QMAMJgCAAD-AwAwmgIAAIAEACCeAgAAtwMAMAAAAAAABR4AAIAFACAfAACDBQAgmAIAAIEFACCZAgAAggUAIJ4CAAABACADHgAAgAUAIJgCAACBBQAgngIAAAEAIAAAAAAAAAGbAkAAAAABBR4AAPsEACAfAAD-BAAgmAIAAPwEACCZAgAA_QQAIJ4CAAABACADHgAA-wQAIJgCAAD8BAAgngIAAAEAIAAAAAUeAAD2BAAgHwAA-QQAIJgCAAD3BAAgmQIAAPgEACCeAgAAAQAgAx4AAPYEACCYAgAA9wQAIJ4CAAABACAAAAABmwIAAACTAgIBmwIAAACVAgILHgAA1gQAMB8AANsEADCYAgAA1wQAMJkCAADYBAAwmgIAANkEACCbAgAA2gQAMJwCAADaBAAwnQIAANoEADCeAgAA2gQAMJ8CAADcBAAwoAIAAN0EADALHgAAygQAMB8AAM8EADCYAgAAywQAMJkCAADMBAAwmgIAAM0EACCbAgAAzgQAMJwCAADOBAAwnQIAAM4EADCeAgAAzgQAMJ8CAADQBAAwoAIAANEEADAHHgAAxQQAIB8AAMgEACCYAgAAxgQAIJkCAADHBAAgnAIAAAsAIJ0CAAALACCeAgAA_QEAIAseAAC8BAAwHwAAwAQAMJgCAAC9BAAwmQIAAL4EADCaAgAAvwQAIJsCAACWAwAwnAIAAJYDADCdAgAAlgMAMJ4CAACWAwAwnwIAAMEEADCgAgAAmQMAMAseAACzBAAwHwAAtwQAMJgCAAC0BAAwmQIAALUEADCaAgAAtgQAIJsCAADSAwAwnAIAANIDADCdAgAA0gMAMJ4CAADSAwAwnwIAALgEADCgAgAA1QMAMAseAACnBAAwHwAArAQAMJgCAACoBAAwmQIAAKkEADCaAgAAqgQAIJsCAACrBAAwnAIAAKsEADCdAgAAqwQAMJ4CAACrBAAwnwIAAK0EADCgAgAArgQAMAfNAQIAAAAB0gFAAAAAAdMBQAAAAAH-AQEAAAAB_wEBAAAAAYACAQAAAAGBAgEAAAABAgAAACkAIB4AALIEACADAAAAKQAgHgAAsgQAIB8AALEEACABFwAA9QQAMAwDAADDAgAgygEAAOsCADDLAQAAJwAQzAEAAOsCADDNAQIAAAABzgEBAL8CACHSAUAAwgIAIdMBQADCAgAh_gEBAAAAAf8BAQC_AgAhgAIBAL8CACGBAgEAwAIAIQIAAAApACAXAACxBAAgAgAAAK8EACAXAACwBAAgC8oBAACuBAAwywEAAK8EABDMAQAArgQAMM0BAgDsAgAhzgEBAL8CACHSAUAAwgIAIdMBQADCAgAh_gEBAL8CACH_AQEAvwIAIYACAQC_AgAhgQIBAMACACELygEAAK4EADDLAQAArwQAEMwBAACuBAAwzQECAOwCACHOAQEAvwIAIdIBQADCAgAh0wFAAMICACH-AQEAvwIAIf8BAQC_AgAhgAIBAL8CACGBAgEAwAIAIQfNAQIAhAMAIdIBQACGAwAh0wFAAIYDACH-AQEAgwMAIf8BAQCDAwAhgAIBAIMDACGBAgEAhQMAIQfNAQIAhAMAIdIBQACGAwAh0wFAAIYDACH-AQEAgwMAIf8BAQCDAwAhgAIBAIMDACGBAgEAhQMAIQfNAQIAAAAB0gFAAAAAAdMBQAAAAAH-AQEAAAAB_wEBAAAAAYACAQAAAAGBAgEAAAABBwoAAIoDACDNAQEAAAABzwEBAAAAAdABAgAAAAHRAQEAAAAB0gFAAAAAAdMBQAAAAAECAAAAFQAgHgAAuwQAIAMAAAAVACAeAAC7BAAgHwAAugQAIAEXAAD0BAAwAgAAABUAIBcAALoEACACAAAA1gMAIBcAALkEACAGzQEBAIMDACHPAQEAgwMAIdABAgCEAwAh0QEBAIUDACHSAUAAhgMAIdMBQACGAwAhBwoAAIgDACDNAQEAgwMAIc8BAQCDAwAh0AECAIQDACHRAQEAhQMAIdIBQACGAwAh0wFAAIYDACEHCgAAigMAIM0BAQAAAAHPAQEAAAAB0AECAAAAAdEBAQAAAAHSAUAAAAAB0wFAAAAAAQsGAADxAwAgDAAAsgMAIM0BAQAAAAHSAUAAAAAB0wFAAAAAAeEBAQAAAAHqAQEAAAAB6wEBAAAAAewBCAAAAAHuAQAAAO4BAvABAAAA8AECAgAAACEAIB4AAMQEACADAAAAIQAgHgAAxAQAIB8AAMMEACABFwAA8wQAMAIAAAAhACAXAADDBAAgAgAAAJoDACAXAADCBAAgCc0BAQCDAwAh0gFAAIYDACHTAUAAhgMAIeEBAQCDAwAh6gEBAIUDACHrAQEAgwMAIewBCACcAwAh7gEAAJ0D7gEi8AEAAJ4D8AEiCwYAAPADACAMAAChAwAgzQEBAIMDACHSAUAAhgMAIdMBQACGAwAh4QEBAIMDACHqAQEAhQMAIesBAQCDAwAh7AEIAJwDACHuAQAAnQPuASLwAQAAngPwASILBgAA8QMAIAwAALIDACDNAQEAAAAB0gFAAAAAAdMBQAAAAAHhAQEAAAAB6gEBAAAAAesBAQAAAAHsAQgAAAAB7gEAAADuAQLwAQAAAPABAgoHAADhAwAgDwAA4gMAIM0BAQAAAAHSAUAAAAAB0wFAAAAAAd8BAQAAAAHgAQEAAAAB4QEBAAAAAeIBAQAAAAHjASAAAAABAgAAAP0BACAeAADFBAAgAwAAAAsAIB4AAMUEACAfAADJBAAgDAAAAAsAIAcAAJADACAPAACRAwAgFwAAyQQAIM0BAQCDAwAh0gFAAIYDACHTAUAAhgMAId8BAQCDAwAh4AEBAIUDACHhAQEAgwMAIeIBAQCDAwAh4wEgAI4DACEKBwAAkAMAIA8AAJEDACDNAQEAgwMAIdIBQACGAwAh0wFAAIYDACHfAQEAgwMAIeABAQCFAwAh4QEBAIMDACHiAQEAgwMAIeMBIACOAwAhDM0BAQAAAAHSAUAAAAAB0wFAAAAAAesBAQAAAAGFAgEAAAABhgIBAAAAAYcCAQAAAAGIAgEAAAABiQJAAAAAAYoCQAAAAAGLAgEAAAABjAIBAAAAAQIAAAAJACAeAADVBAAgAwAAAAkAIB4AANUEACAfAADUBAAgARcAAPIEADARAwAAwwIAIMoBAAD6AgAwywEAAAcAEMwBAAD6AgAwzQEBAAAAAc4BAQC_AgAh0gFAAMICACHTAUAAwgIAIesBAQC_AgAhhQIBAL8CACGGAgEAwAIAIYcCAQDAAgAhiAIBAMACACGJAkAA-wIAIYoCQAD7AgAhiwIBAMACACGMAgEAwAIAIQIAAAAJACAXAADUBAAgAgAAANIEACAXAADTBAAgEMoBAADRBAAwywEAANIEABDMAQAA0QQAMM0BAQC_AgAhzgEBAL8CACHSAUAAwgIAIdMBQADCAgAh6wEBAL8CACGFAgEAvwIAIYYCAQDAAgAhhwIBAMACACGIAgEAwAIAIYkCQAD7AgAhigJAAPsCACGLAgEAwAIAIYwCAQDAAgAhEMoBAADRBAAwywEAANIEABDMAQAA0QQAMM0BAQC_AgAhzgEBAL8CACHSAUAAwgIAIdMBQADCAgAh6wEBAL8CACGFAgEAvwIAIYYCAQDAAgAhhwIBAMACACGIAgEAwAIAIYkCQAD7AgAhigJAAPsCACGLAgEAwAIAIYwCAQDAAgAhDM0BAQCDAwAh0gFAAIYDACHTAUAAhgMAIesBAQCDAwAhhQIBAIMDACGGAgEAhQMAIYcCAQCFAwAhiAIBAIUDACGJAkAAlAQAIYoCQACUBAAhiwIBAIUDACGMAgEAhQMAIQzNAQEAgwMAIdIBQACGAwAh0wFAAIYDACHrAQEAgwMAIYUCAQCDAwAhhgIBAIUDACGHAgEAhQMAIYgCAQCFAwAhiQJAAJQEACGKAkAAlAQAIYsCAQCFAwAhjAIBAIUDACEMzQEBAAAAAdIBQAAAAAHTAUAAAAAB6wEBAAAAAYUCAQAAAAGGAgEAAAABhwIBAAAAAYgCAQAAAAGJAkAAAAABigJAAAAAAYsCAQAAAAGMAgEAAAABB80BAQAAAAHSAUAAAAAB0wFAAAAAAYQCQAAAAAGNAgEAAAABjgIBAAAAAY8CAQAAAAECAAAABQAgHgAA4QQAIAMAAAAFACAeAADhBAAgHwAA4AQAIAEXAADxBAAwDAMAAMMCACDKAQAA_AIAMMsBAAADABDMAQAA_AIAMM0BAQAAAAHOAQEAvwIAIdIBQADCAgAh0wFAAMICACGEAkAAwgIAIY0CAQAAAAGOAgEAwAIAIY8CAQDAAgAhAgAAAAUAIBcAAOAEACACAAAA3gQAIBcAAN8EACALygEAAN0EADDLAQAA3gQAEMwBAADdBAAwzQEBAL8CACHOAQEAvwIAIdIBQADCAgAh0wFAAMICACGEAkAAwgIAIY0CAQC_AgAhjgIBAMACACGPAgEAwAIAIQvKAQAA3QQAMMsBAADeBAAQzAEAAN0EADDNAQEAvwIAIc4BAQC_AgAh0gFAAMICACHTAUAAwgIAIYQCQADCAgAhjQIBAL8CACGOAgEAwAIAIY8CAQDAAgAhB80BAQCDAwAh0gFAAIYDACHTAUAAhgMAIYQCQACGAwAhjQIBAIMDACGOAgEAhQMAIY8CAQCFAwAhB80BAQCDAwAh0gFAAIYDACHTAUAAhgMAIYQCQACGAwAhjQIBAIMDACGOAgEAhQMAIY8CAQCFAwAhB80BAQAAAAHSAUAAAAAB0wFAAAAAAYQCQAAAAAGNAgEAAAABjgIBAAAAAY8CAQAAAAEEHgAA1gQAMJgCAADXBAAwmgIAANkEACCeAgAA2gQAMAQeAADKBAAwmAIAAMsEADCaAgAAzQQAIJ4CAADOBAAwAx4AAMUEACCYAgAAxgQAIJ4CAAD9AQAgBB4AALwEADCYAgAAvQQAMJoCAAC_BAAgngIAAJYDADAEHgAAswQAMJgCAAC0BAAwmgIAALYEACCeAgAA0gMAMAQeAACnBAAwmAIAAKgEADCaAgAAqgQAIJ4CAACrBAAwAAAEAwAA4wMAIAcAAOQDACAPAADlAwAg4AEAAP0CACAAAAAEAwAA4wMAIAYAAOoEACAMAADtBAAg6gEAAP0CACAJBgAA6gQAIAkAAPAEACALAADrBAAgDgAA7QQAIOABAAD9AgAg8wEAAP0CACD3AQAA_QIAIPkBAAD9AgAg-gEAAP0CACABBwAA5AMAIAfNAQEAAAAB0gFAAAAAAdMBQAAAAAGEAkAAAAABjQIBAAAAAY4CAQAAAAGPAgEAAAABDM0BAQAAAAHSAUAAAAAB0wFAAAAAAesBAQAAAAGFAgEAAAABhgIBAAAAAYcCAQAAAAGIAgEAAAABiQJAAAAAAYoCQAAAAAGLAgEAAAABjAIBAAAAAQnNAQEAAAAB0gFAAAAAAdMBQAAAAAHhAQEAAAAB6gEBAAAAAesBAQAAAAHsAQgAAAAB7gEAAADuAQLwAQAAAPABAgbNAQEAAAABzwEBAAAAAdABAgAAAAHRAQEAAAAB0gFAAAAAAdMBQAAAAAEHzQECAAAAAdIBQAAAAAHTAUAAAAAB_gEBAAAAAf8BAQAAAAGAAgEAAAABgQIBAAAAAQ8FAADjBAAgCwAA5gQAIA8AAOUEACAQAADkBAAgEQAA5wQAIM0BAQAAAAHSAUAAAAAB0wFAAAAAAeIBAQAAAAHuAQAAAJUCAvIBAQAAAAHzAQEAAAABkAIBAAAAAZECIAAAAAGTAgAAAJMCAgIAAAABACAeAAD2BAAgAwAAADEAIB4AAPYEACAfAAD6BAAgEQAAADEAIAUAAKIEACALAAClBAAgDwAApAQAIBAAAKMEACARAACmBAAgFwAA-gQAIM0BAQCDAwAh0gFAAIYDACHTAUAAhgMAIeIBAQCFAwAh7gEAAKAElQIi8gEBAIMDACHzAQEAhQMAIZACAQCDAwAhkQIgAI4DACGTAgAAnwSTAiIPBQAAogQAIAsAAKUEACAPAACkBAAgEAAAowQAIBEAAKYEACDNAQEAgwMAIdIBQACGAwAh0wFAAIYDACHiAQEAhQMAIe4BAACgBJUCIvIBAQCDAwAh8wEBAIUDACGQAgEAgwMAIZECIACOAwAhkwIAAJ8EkwIiDwQAAOIEACALAADmBAAgDwAA5QQAIBAAAOQEACARAADnBAAgzQEBAAAAAdIBQAAAAAHTAUAAAAAB4gEBAAAAAe4BAAAAlQIC8gEBAAAAAfMBAQAAAAGQAgEAAAABkQIgAAAAAZMCAAAAkwICAgAAAAEAIB4AAPsEACADAAAAMQAgHgAA-wQAIB8AAP8EACARAAAAMQAgBAAAoQQAIAsAAKUEACAPAACkBAAgEAAAowQAIBEAAKYEACAXAAD_BAAgzQEBAIMDACHSAUAAhgMAIdMBQACGAwAh4gEBAIUDACHuAQAAoASVAiLyAQEAgwMAIfMBAQCFAwAhkAIBAIMDACGRAiAAjgMAIZMCAACfBJMCIg8EAAChBAAgCwAApQQAIA8AAKQEACAQAACjBAAgEQAApgQAIM0BAQCDAwAh0gFAAIYDACHTAUAAhgMAIeIBAQCFAwAh7gEAAKAElQIi8gEBAIMDACHzAQEAhQMAIZACAQCDAwAhkQIgAI4DACGTAgAAnwSTAiIPBAAA4gQAIAUAAOMEACALAADmBAAgDwAA5QQAIBAAAOQEACDNAQEAAAAB0gFAAAAAAdMBQAAAAAHiAQEAAAAB7gEAAACVAgLyAQEAAAAB8wEBAAAAAZACAQAAAAGRAiAAAAABkwIAAACTAgICAAAAAQAgHgAAgAUAIAMAAAAxACAeAACABQAgHwAAhAUAIBEAAAAxACAEAAChBAAgBQAAogQAIAsAAKUEACAPAACkBAAgEAAAowQAIBcAAIQFACDNAQEAgwMAIdIBQACGAwAh0wFAAIYDACHiAQEAhQMAIe4BAACgBJUCIvIBAQCDAwAh8wEBAIUDACGQAgEAgwMAIZECIACOAwAhkwIAAJ8EkwIiDwQAAKEEACAFAACiBAAgCwAApQQAIA8AAKQEACAQAACjBAAgzQEBAIMDACHSAUAAhgMAIdMBQACGAwAh4gEBAIUDACHuAQAAoASVAiLyAQEAgwMAIfMBAQCFAwAhkAIBAIMDACGRAiAAjgMAIZMCAACfBJMCIg_NAQEAAAAB0gFAAAAAAdMBQAAAAAHgAQEAAAAB6AEIAAAAAesBAQAAAAHyAQEAAAAB8wEBAAAAAfQBIAAAAAH1AQIAAAAB9gEAANsDACD3AQEAAAAB-AEAANwDACD5AQEAAAAB-gEBAAAAAQsDAADgAwAgDwAA4gMAIM0BAQAAAAHOAQEAAAAB0gFAAAAAAdMBQAAAAAHfAQEAAAAB4AEBAAAAAeEBAQAAAAHiAQEAAAAB4wEgAAAAAQIAAAD9AQAgHgAAhgUAIAMAAAALACAeAACGBQAgHwAAigUAIA0AAAALACADAACPAwAgDwAAkQMAIBcAAIoFACDNAQEAgwMAIc4BAQCDAwAh0gFAAIYDACHTAUAAhgMAId8BAQCDAwAh4AEBAIUDACHhAQEAgwMAIeIBAQCDAwAh4wEgAI4DACELAwAAjwMAIA8AAJEDACDNAQEAgwMAIc4BAQCDAwAh0gFAAIYDACHTAUAAhgMAId8BAQCDAwAh4AEBAIUDACHhAQEAgwMAIeIBAQCDAwAh4wEgAI4DACELAwAA4AMAIAcAAOEDACDNAQEAAAABzgEBAAAAAdIBQAAAAAHTAUAAAAAB3wEBAAAAAeABAQAAAAHhAQEAAAAB4gEBAAAAAeMBIAAAAAECAAAA_QEAIB4AAIsFACADAAAACwAgHgAAiwUAIB8AAI8FACANAAAACwAgAwAAjwMAIAcAAJADACAXAACPBQAgzQEBAIMDACHOAQEAgwMAIdIBQACGAwAh0wFAAIYDACHfAQEAgwMAIeABAQCFAwAh4QEBAIMDACHiAQEAgwMAIeMBIACOAwAhCwMAAI8DACAHAACQAwAgzQEBAIMDACHOAQEAgwMAIdIBQACGAwAh0wFAAIYDACHfAQEAgwMAIeABAQCFAwAh4QEBAIMDACHiAQEAgwMAIeMBIACOAwAhDwQAAOIEACAFAADjBAAgCwAA5gQAIA8AAOUEACARAADnBAAgzQEBAAAAAdIBQAAAAAHTAUAAAAAB4gEBAAAAAe4BAAAAlQIC8gEBAAAAAfMBAQAAAAGQAgEAAAABkQIgAAAAAZMCAAAAkwICAgAAAAEAIB4AAJAFACAFzQEBAAAAAdIBQAAAAAHTAUAAAAAB8gEBAAAAAf4BAQAAAAECAAAAogEAIB4AAJIFACAGzQEBAAAAAc4BAQAAAAHQAQIAAAAB0QEBAAAAAdIBQAAAAAHTAUAAAAABDAMAALEDACAGAADxAwAgzQEBAAAAAc4BAQAAAAHSAUAAAAAB0wFAAAAAAeEBAQAAAAHqAQEAAAAB6wEBAAAAAewBCAAAAAHuAQAAAO4BAvABAAAA8AECAgAAACEAIB4AAJUFACADAAAAHwAgHgAAlQUAIB8AAJkFACAOAAAAHwAgAwAAoAMAIAYAAPADACAXAACZBQAgzQEBAIMDACHOAQEAgwMAIdIBQACGAwAh0wFAAIYDACHhAQEAgwMAIeoBAQCFAwAh6wEBAIMDACHsAQgAnAMAIe4BAACdA-4BIvABAACeA_ABIgwDAACgAwAgBgAA8AMAIM0BAQCDAwAhzgEBAIMDACHSAUAAhgMAIdMBQACGAwAh4QEBAIMDACHqAQEAhQMAIesBAQCDAwAh7AEIAJwDACHuAQAAnQPuASLwAQAAngPwASIEzQEBAAAAAecBAQAAAAHoAQgAAAAB6QECAAAAAQMAAAClAQAgHgAAkgUAIB8AAJ0FACAHAAAApQEAIBcAAJ0FACDNAQEAgwMAIdIBQACGAwAh0wFAAIYDACHyAQEAgwMAIf4BAQCDAwAhBc0BAQCDAwAh0gFAAIYDACHTAUAAhgMAIfIBAQCDAwAh_gEBAIMDACEPzQEBAAAAAdIBQAAAAAHTAUAAAAAB4AEBAAAAAegBCAAAAAHxAQEAAAAB8gEBAAAAAfMBAQAAAAH0ASAAAAAB9QECAAAAAfYBAADbAwAg9wEBAAAAAfgBAADcAwAg-QEBAAAAAfoBAQAAAAEPBAAA4gQAIAUAAOMEACALAADmBAAgEAAA5AQAIBEAAOcEACDNAQEAAAAB0gFAAAAAAdMBQAAAAAHiAQEAAAAB7gEAAACVAgLyAQEAAAAB8wEBAAAAAZACAQAAAAGRAiAAAAABkwIAAACTAgICAAAAAQAgHgAAnwUAIBMGAAD4AwAgCQAA3QMAIAsAAN4DACDNAQEAAAAB0gFAAAAAAdMBQAAAAAHgAQEAAAAB6AEIAAAAAesBAQAAAAHxAQEAAAAB8gEBAAAAAfMBAQAAAAH0ASAAAAAB9QECAAAAAfYBAADbAwAg9wEBAAAAAfgBAADcAwAg-QEBAAAAAfoBAQAAAAECAAAADwAgHgAAoQUAIAMAAAANACAeAAChBQAgHwAApQUAIBUAAAANACAGAAD3AwAgCQAAwAMAIAsAAMEDACAXAAClBQAgzQEBAIMDACHSAUAAhgMAIdMBQACGAwAh4AEBAIUDACHoAQgAnAMAIesBAQCDAwAh8QEBAIMDACHyAQEAgwMAIfMBAQCFAwAh9AEgAI4DACH1AQIAhAMAIfYBAAC9AwAg9wEBAIUDACH4AQAAvgMAIPkBAQCFAwAh-gEBAIUDACETBgAA9wMAIAkAAMADACALAADBAwAgzQEBAIMDACHSAUAAhgMAIdMBQACGAwAh4AEBAIUDACHoAQgAnAMAIesBAQCDAwAh8QEBAIMDACHyAQEAgwMAIfMBAQCFAwAh9AEgAI4DACH1AQIAhAMAIfYBAAC9AwAg9wEBAIUDACH4AQAAvgMAIPkBAQCFAwAh-gEBAIUDACEEzQEBAAAAAc8BAQAAAAHoAQgAAAAB6QECAAAAAQMAAAAxACAeAACfBQAgHwAAqQUAIBEAAAAxACAEAAChBAAgBQAAogQAIAsAAKUEACAQAACjBAAgEQAApgQAIBcAAKkFACDNAQEAgwMAIdIBQACGAwAh0wFAAIYDACHiAQEAhQMAIe4BAACgBJUCIvIBAQCDAwAh8wEBAIUDACGQAgEAgwMAIZECIACOAwAhkwIAAJ8EkwIiDwQAAKEEACAFAACiBAAgCwAApQQAIBAAAKMEACARAACmBAAgzQEBAIMDACHSAUAAhgMAIdMBQACGAwAh4gEBAIUDACHuAQAAoASVAiLyAQEAgwMAIfMBAQCFAwAhkAIBAIMDACGRAiAAjgMAIZMCAACfBJMCIgnNAQEAAAABzgEBAAAAAdIBQAAAAAHTAUAAAAAB4QEBAAAAAeoBAQAAAAHsAQgAAAAB7gEAAADuAQLwAQAAAPABAgMAAAAxACAeAACQBQAgHwAArQUAIBEAAAAxACAEAAChBAAgBQAAogQAIAsAAKUEACAPAACkBAAgEQAApgQAIBcAAK0FACDNAQEAgwMAIdIBQACGAwAh0wFAAIYDACHiAQEAhQMAIe4BAACgBJUCIvIBAQCDAwAh8wEBAIUDACGQAgEAgwMAIZECIACOAwAhkwIAAJ8EkwIiDwQAAKEEACAFAACiBAAgCwAApQQAIA8AAKQEACARAACmBAAgzQEBAIMDACHSAUAAhgMAIdMBQACGAwAh4gEBAIUDACHuAQAAoASVAiLyAQEAgwMAIfMBAQCFAwAhkAIBAIMDACGRAiAAjgMAIZMCAACfBJMCIhMGAAD4AwAgCQAA3QMAIA4AAN8DACDNAQEAAAAB0gFAAAAAAdMBQAAAAAHgAQEAAAAB6AEIAAAAAesBAQAAAAHxAQEAAAAB8gEBAAAAAfMBAQAAAAH0ASAAAAAB9QECAAAAAfYBAADbAwAg9wEBAAAAAfgBAADcAwAg-QEBAAAAAfoBAQAAAAECAAAADwAgHgAArgUAIA8EAADiBAAgBQAA4wQAIA8AAOUEACAQAADkBAAgEQAA5wQAIM0BAQAAAAHSAUAAAAAB0wFAAAAAAeIBAQAAAAHuAQAAAJUCAvIBAQAAAAHzAQEAAAABkAIBAAAAAZECIAAAAAGTAgAAAJMCAgIAAAABACAeAACwBQAgAwAAAA0AIB4AAK4FACAfAAC0BQAgFQAAAA0AIAYAAPcDACAJAADAAwAgDgAAwgMAIBcAALQFACDNAQEAgwMAIdIBQACGAwAh0wFAAIYDACHgAQEAhQMAIegBCACcAwAh6wEBAIMDACHxAQEAgwMAIfIBAQCDAwAh8wEBAIUDACH0ASAAjgMAIfUBAgCEAwAh9gEAAL0DACD3AQEAhQMAIfgBAAC-AwAg-QEBAIUDACH6AQEAhQMAIRMGAAD3AwAgCQAAwAMAIA4AAMIDACDNAQEAgwMAIdIBQACGAwAh0wFAAIYDACHgAQEAhQMAIegBCACcAwAh6wEBAIMDACHxAQEAgwMAIfIBAQCDAwAh8wEBAIUDACH0ASAAjgMAIfUBAgCEAwAh9gEAAL0DACD3AQEAhQMAIfgBAAC-AwAg-QEBAIUDACH6AQEAhQMAIQMAAAAxACAeAACwBQAgHwAAtwUAIBEAAAAxACAEAAChBAAgBQAAogQAIA8AAKQEACAQAACjBAAgEQAApgQAIBcAALcFACDNAQEAgwMAIdIBQACGAwAh0wFAAIYDACHiAQEAhQMAIe4BAACgBJUCIvIBAQCDAwAh8wEBAIUDACGQAgEAgwMAIZECIACOAwAhkwIAAJ8EkwIiDwQAAKEEACAFAACiBAAgDwAApAQAIBAAAKMEACARAACmBAAgzQEBAIMDACHSAUAAhgMAIdMBQACGAwAh4gEBAIUDACHuAQAAoASVAiLyAQEAgwMAIfMBAQCFAwAhkAIBAIMDACGRAiAAjgMAIZMCAACfBJMCIgcEBgIFCgMIAA8LJggPJQoQDAQRKg4BAwABAQMAAQQDAAEHEAUIAA0PIgoFBgAECAAMCQAGCxYIDhoJAgcRBQgABwEHEgACAwABCgAFAgoABQ0ACgQDAAEGAAQIAAsMGwkBDBwAAgsdAA4eAAIHIwAPJAABAwABBQQrAAUsAAsuAA8tABEvAAAAAAMIABQkABUlABYAAAADCAAUJAAVJQAWAQMAAQEDAAEDCAAbJAAcJQAdAAAAAwgAGyQAHCUAHQEDAAEBAwABAwgAIiQAIyUAJAAAAAMIACIkACMlACQAAAADCAAqJAArJQAsAAAAAwgAKiQAKyUALAEDAAEBAwABBQgAMSQANCUANWYAMmcAMwAAAAAABQgAMSQANCUANWYAMmcAMwAAAwgAOiQAOyUAPAAAAAMIADokADslADwCBgAECQAGAgYABAkABgUIAEEkAEQlAEVmAEJnAEMAAAAAAAUIAEEkAEQlAEVmAEJnAEMCAwABBgAEAgMAAQYABAUIAEokAE0lAE5mAEtnAEwAAAAAAAUIAEokAE0lAE5mAEtnAEwCCgAFDQAKAgoABQ0ACgUIAFMkAFYlAFdmAFRnAFUAAAAAAAUIAFMkAFYlAFdmAFRnAFUBAwABAQMAAQMIAFwkAF0lAF4AAAADCABcJABdJQBeAgMAAQoABQIDAAEKAAUFCABjJABmJQBnZgBkZwBlAAAAAAAFCABjJABmJQBnZgBkZwBlEgIBEzABFDMBFTQBFjUBGDcBGTkQGjoRGzwBHD4QHT8SIEABIUEBIkIQJkUTJ0YXKEcCKUgCKkkCK0oCLEsCLU0CLk8QL1AYMFICMVQQMlUZM1YCNFcCNVgQNlsaN1weOF0DOV4DOl8DO2ADPGEDPWMDPmUQP2YfQGgDQWoQQmsgQ2wDRG0DRW4QRnEhR3IlSHQmSXUmSngmS3kmTHomTXwmTn4QT38nUIEBJlGDARBShAEoU4UBJlSGASZVhwEQVooBKVeLAS1YjAEOWY0BDlqOAQ5bjwEOXJABDl2SAQ5elAEQX5UBLmCXAQ5hmQEQYpoBL2ObAQ5knAEOZZ0BEGigATBpoQE2aqMBBmukAQZspwEGbagBBm6pAQZvqwEGcK0BEHGuATdysAEGc7IBEHSzATh1tAEGdrUBBne2ARB4uQE5eboBPXq7AQV7vAEFfL0BBX2-AQV-vwEFf8EBBYABwwEQgQHEAT6CAcYBBYMByAEQhAHJAT-FAcoBBYYBywEFhwHMARCIAc8BQIkB0AFGigHRAQqLAdIBCowB0wEKjQHUAQqOAdUBCo8B1wEKkAHZARCRAdoBR5IB3AEKkwHeARCUAd8BSJUB4AEKlgHhAQqXAeIBEJgB5QFJmQHmAU-aAecBCZsB6AEJnAHpAQmdAeoBCZ4B6wEJnwHtAQmgAe8BEKEB8AFQogHyAQmjAfQBEKQB9QFRpQH2AQmmAfcBCacB-AEQqAH7AVKpAfwBWKoB_gEEqwH_AQSsAYECBK0BggIErgGDAgSvAYUCBLABhwIQsQGIAlmyAYoCBLMBjAIQtAGNAlq1AY4CBLYBjwIEtwGQAhC4AZMCW7kBlAJfugGVAgi7AZYCCLwBlwIIvQGYAgi-AZkCCL8BmwIIwAGdAhDBAZ4CYMIBoAIIwwGiAhDEAaMCYcUBpAIIxgGlAgjHAaYCEMgBqQJiyQGqAmg"
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
  BlogsScalarFieldEnum: () => BlogsScalarFieldEnum2,
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
  Blogs: "Blogs",
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
var BlogsScalarFieldEnum2 = {
  id: "id",
  title: "title",
  slug: "slug",
  content: "content",
  thumbnail: "thumbnail",
  userId: "userId",
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
var FRONTEND_URL = process.env.FRONTEND_URL.replace(/\/+$/, "");
var BACKEND_URL = process.env.BETTER_AUTH_URL.replace(/\/+$/, "");
var auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql"
  }),
  baseURL: BACKEND_URL,
  trustedOrigins: [FRONTEND_URL, BACKEND_URL],
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
    requireEmailVerification: true
  },
  advanced: {
    cookies: {
      state: {
        attributes: {
          sameSite: "none",
          secure: true,
          httpOnly: true,
          partitioned: true,
          priority: "high",
          cors: "cross-site",
          path: "/"
        }
      },
      session_token: {
        attributes: {
          sameSite: "none",
          secure: true,
          httpOnly: true,
          partitioned: true,
          priority: "high",
          cors: "cross-site",
          path: "/"
        }
      }
    }
  },
  socialProviders: {
    google: {
      prompt: "select_account consent",
      accessType: "offline",
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      redirectURI: `${FRONTEND_URL}/api/auth/callback/google`
    }
  },
  // email verification
  emailVerification: {
    sendOnSignUp: true,
    sendVerificationEmail: async ({ user, url, token }, request) => {
      try {
        const verificationUrl = `${FRONTEND_URL}/verify-email?token=${token}`;
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
  },
  plugins: [oAuthProxy()]
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

// src/app/modules/ai/ai.controller.ts
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

// src/app/modules/ai/ai.service.ts
init_esm_shims();
import { StatusCodes as StatusCodes4 } from "http-status-codes";
import slugify from "slugify";
var chatAI = async (prompt, context) => {
  const apiKey = process.env.OPENROUTER_API_KEY;
  const baseUrl = "https://openrouter.ai/api/v1/chat/completions";
  if (!apiKey || typeof apiKey !== "string") {
    throw new ApiError_default(
      StatusCodes4.INTERNAL_SERVER_ERROR,
      "AI API key is not configured properly"
    );
  }
  const meals = await prisma.meal.findMany({
    orderBy: [{ category: { name: "asc" } }, { name: "asc" }],
    select: {
      name: true,
      description: true,
      price: true,
      image: true,
      isAvailable: true,
      calories: true,
      ingredients: true,
      cuisine: true,
      dietary: true,
      mealType: true,
      spiceLevel: true,
      category: {
        select: {
          name: true,
          slug: true
        }
      },
      provider: {
        select: {
          shopName: true,
          address: true,
          isOpen: true
        }
      }
    }
  });
  const mealCatalog = meals.map((meal) => {
    const ingredients = meal.ingredients.length ? meal.ingredients.join(", ") : "N/A";
    const dietary = meal.dietary.length ? meal.dietary.join(", ") : "N/A";
    return [
      `Name: ${meal.name}`,
      `Category: ${meal.category?.name ?? "N/A"} (${meal.category?.slug ?? "N/A"})`,
      `Provider: ${meal.provider?.shopName ?? "N/A"}`,
      `Price: ${meal.price}`,
      `Calories: ${meal.calories}`,
      `Cuisine: ${meal.cuisine ?? "N/A"}`,
      `Meal Type: ${meal.mealType ?? "N/A"}`,
      `Spice Level: ${meal.spiceLevel ?? "N/A"}`,
      `Dietary: ${dietary}`,
      `Ingredients: ${ingredients}`,
      `Available: ${meal.isAvailable ? "Yes" : "No"}`,
      `Description: ${meal.description ?? "N/A"}`,
      `Provider Open: ${meal.provider?.isOpen ? "Yes" : "No"}`
    ].join(" | ");
  }).join("\n");
  const systemPrompt = [
    `You are a helpful FoodHub assistant for a food delivery platform.`,
    `Use the provided meal catalog as the source of truth for all meal-related questions.`,
    `If the user asks about a meal, answer using the catalog data and do not invent meals, prices, ingredients, or availability.`,
    `If a meal is not in the catalog, say you could not find it and suggest similar available meals if possible.`,
    `Keep answers concise, friendly, and practical.`,
    context ? `Additional instructions: ${context}` : null,
    `Meal catalog:
${mealCatalog || "No meals are available right now."}`
  ].filter(Boolean).join("\n\n");
  const response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "HTTP-Referer": process.env.FRONTEND_URL,
      "X-Title": "FoodHub"
    },
    body: JSON.stringify({
      model: "openai/gpt-3.5-turbo",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: prompt }
      ],
      temperature: 0.7
    })
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new ApiError_default(
      StatusCodes4.INTERNAL_SERVER_ERROR,
      `AI API error: ${errorData.error.message || "Unknown error"}`
    );
  }
  const data = await response.json();
  return data.choices[0].message.content.trim();
};
var buildFallbackThumbnail = (topic) => {
  const normalizedTopic = topic.trim() || "food";
  const encodedTopic = encodeURIComponent(normalizedTopic);
  return `https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80&query=${encodedTopic}`;
};
var cleanSearchText = (value) => value.toLowerCase().replace(/[^a-z\s]/g, " ").replace(
  /\b(top|best|items|item|foods|food|blog|post|in|for|with|the|a|an|of|and)\b/g,
  " "
).replace(/\s+/g, " ").trim();
var fetchUnsplashThumbnail = async (topic, title) => {
  const accessKey = process.env.UNSPLASH_ACCESS_KEY;
  if (!accessKey) {
    return null;
  }
  const rawTitle = (title || "").trim();
  const rawTopic = topic.trim();
  const cleanedTitle = cleanSearchText(rawTitle);
  const cleanedTopic = cleanSearchText(rawTopic);
  const queryCandidates = [
    rawTitle,
    rawTopic,
    cleanedTitle ? `${cleanedTitle} bangladesh food` : "",
    cleanedTopic ? `${cleanedTopic} bangladesh food` : "",
    "healthy bangladeshi food",
    "bangladesh traditional food"
  ].filter(Boolean);
  for (const queryText of queryCandidates) {
    const searchQuery = encodeURIComponent(queryText);
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${searchQuery}&per_page=5&orientation=landscape&content_filter=high`,
      {
        headers: {
          Authorization: `Client-ID ${accessKey}`,
          "Accept-Version": "v1"
        }
      }
    );
    if (!response.ok) {
      continue;
    }
    const data = await response.json();
    const photo = data?.results?.[0];
    const imageUrl = photo?.urls?.regular ?? photo?.urls?.full ?? photo?.urls?.small ?? null;
    if (imageUrl) {
      return imageUrl;
    }
  }
  return null;
};
var parseBlogPostContent = (rawContent, fallbackTopic) => {
  const lines = rawContent.split(/\r?\n/).map((line) => line.trim());
  const titleLine = lines.find((line) => /^#\s+/.test(line));
  const title = titleLine?.replace(/^#\s+/, "").trim() || fallbackTopic;
  const thumbnailLine = lines.find((line) => /^thumbnail\s*:/i.test(line));
  const thumbnailMatch = thumbnailLine?.match(/https?:\/\/\S+/i);
  const markdownImageMatch = rawContent.match(
    /!\[[^\]]*\]\((https?:\/\/[^)\s]+)\)/i
  );
  const thumbnail = thumbnailMatch?.[0] ?? markdownImageMatch?.[1] ?? null;
  const descriptionLine = lines.find((line) => /^\*.*\*$/.test(line));
  const description = descriptionLine ? descriptionLine.replace(/^\*+|\*+$/g, "").trim() : null;
  const content = lines.filter((line) => {
    if (!line) return false;
    if (line === titleLine) return false;
    if (line === thumbnailLine) return false;
    if (line === descriptionLine) return false;
    return true;
  }).join("\n").trim();
  return {
    title,
    description,
    thumbnail,
    content: content || rawContent.trim()
  };
};
var generateUniqueBlogSlug = async (title) => {
  const baseSlug = slugify(title, {
    replacement: "-",
    lower: true,
    trim: true,
    remove: /[*+~.()'"!:@]/g,
    strict: true
  });
  let slug = baseSlug;
  let suffix = 1;
  while (await prisma.blogs.findUnique({ where: { slug } })) {
    slug = `${baseSlug}-${suffix}`;
    suffix += 1;
  }
  return slug;
};
var blogPostGenerator = async (topic, userId) => {
  const apiKey = process.env.OPENROUTER_API_KEY;
  const baseUrl = "https://openrouter.ai/api/v1/chat/completions";
  if (!apiKey || typeof apiKey !== "string") {
    throw new ApiError_default(
      StatusCodes4.INTERNAL_SERVER_ERROR,
      "AI API key is not configured properly"
    );
  }
  if (!topic || typeof topic !== "string") {
    throw new ApiError_default(StatusCodes4.BAD_REQUEST, "Invalid blog topic provided");
  }
  if (!userId || typeof userId !== "string") {
    throw new ApiError_default(StatusCodes4.UNAUTHORIZED, "Unauthorized user");
  }
  const systemPrompt = `You are a creative food blogger for FoodHub. Write a blog post on the topic "${topic}" that is engaging, informative, and relevant to food lovers.

Return the response in this exact markdown structure:
# Title
*Short description*
Thumbnail: https://images.unsplash.com/... or a relevant food image URL

Blog content with clear headings and paragraphs.

Rules:
- The title must be catchy and include the topic.
- The description should be a concise summary of the blog post.
- The thumbnail must always be included and must be a valid image URL.

Then provide the blog content with clear headings and paragraphs. The content must be at least 300 words long and include useful information, tips, or insights related to the topic.`;
  const response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "HTTP-Referer": process.env.FRONTEND_URL,
      "X-Title": "FoodHub Blog Post Generator"
    },
    body: JSON.stringify({
      model: "openai/gpt-3.5-turbo",
      messages: [{ role: "system", content: systemPrompt }],
      temperature: 0.7
    })
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new ApiError_default(
      StatusCodes4.INTERNAL_SERVER_ERROR,
      `AI API error: ${errorData.error.message || "Unknown error"}`
    );
  }
  const data = await response.json();
  const generatedContent = data.choices[0].message.content.trim();
  const parsedBlog = parseBlogPostContent(generatedContent, topic);
  const slug = await generateUniqueBlogSlug(parsedBlog.title);
  const unsplashThumbnail = await fetchUnsplashThumbnail(
    topic,
    parsedBlog.title
  );
  const thumbnail = unsplashThumbnail ?? parsedBlog.thumbnail ?? buildFallbackThumbnail(parsedBlog.title || topic);
  const savedBlog = await prisma.blogs.create({
    data: {
      title: parsedBlog.title,
      slug,
      content: parsedBlog.content,
      thumbnail,
      userId
    }
  });
  return {
    blog: savedBlog,
    generatedContent,
    description: parsedBlog.description
  };
};
var generateMealDescription = async (title, category) => {
  if (!title || typeof title !== "string") {
    throw new ApiError_default(StatusCodes4.BAD_REQUEST, "Invalid meal title provided");
  }
  if (!category || typeof category !== "string") {
    throw new ApiError_default(
      StatusCodes4.BAD_REQUEST,
      "Invalid meal category provided"
    );
  }
  const prompt = `Write a short appetizing description for a FoodHub meal named "${title}" in the "${category}" category.

Rules:
- Keep it under 300 characters.
- Make it sound premium, fresh, and persuasive.
- Use FoodHub's actual menu style and avoid generic filler.
- Do not mention that you are an AI.`;
  const context = "You are a senior food copywriter for FoodHub. You write concise, mouth-watering meal descriptions that match the restaurant menu style and help users decide quickly.";
  const generatedDescription = await chatAI(prompt, context);
  return generatedDescription;
};
var aiHealthTipSuggestion = async () => {
  const userPreferences = "User prefers low-carb, high-protein meals and is allergic to nuts.";
  const prompt = `Based on the following user preferences and dietary restrictions: ${userPreferences}, suggest a healthy meal option from the FoodHub menu. Provide a brief description of why this meal would be a good choice for the user.short in 100 characters.`;
  const context = "You are a nutritionist assistant for FoodHub, helping users find meals that fit their health goals and dietary needs.";
  return await chatAI(prompt, context);
};
var aiService = {
  chatAI,
  blogPostGenerator,
  generateMealDescription,
  aiHealthTipSuggestion
};

// src/app/modules/ai/ai.controller.ts
var chatAI2 = catchAsync_default(async (req, res) => {
  const { message } = req.body;
  const result = await aiService.chatAI(message);
  sendResponse_default(res, {
    statusCode: StatusCodes5.OK,
    success: true,
    message: "AI response generated successfully",
    data: result
  });
});
var blogPostGenerator2 = catchAsync_default(async (req, res) => {
  const { topic } = req.body;
  const userId = req.user?.id;
  if (!userId) {
    throw new ApiError_default(StatusCodes5.UNAUTHORIZED, "Unauthorized user");
  }
  const result = await aiService.blogPostGenerator(topic, userId);
  sendResponse_default(res, {
    statusCode: StatusCodes5.OK,
    success: true,
    message: "Blog post generated and saved successfully",
    data: result
  });
});
var generateMealDescription2 = catchAsync_default(
  async (req, res) => {
    const { title, category } = req.body;
    const result = await aiService.generateMealDescription(title, category);
    sendResponse_default(res, {
      statusCode: StatusCodes5.OK,
      success: true,
      message: "Meal description generated and saved successfully",
      data: result
    });
  }
);
var aiHealthTipSuggestion2 = catchAsync_default(
  async (req, res) => {
    const result = await aiService.aiHealthTipSuggestion();
    sendResponse_default(res, {
      statusCode: StatusCodes5.OK,
      success: true,
      message: "Health tip suggestion generated successfully",
      data: result
    });
  }
);
var aiController = {
  chatAI: chatAI2,
  blogPostGenerator: blogPostGenerator2,
  generateMealDescription: generateMealDescription2,
  aiHealthTipSuggestion: aiHealthTipSuggestion2
};

// src/app/modules/ai/ai.route.ts
var router = express.Router();
router.post("/chat", aiController.chatAI);
router.post(
  "/blog-post",
  Auth_default(UserRole.admin),
  aiController.blogPostGenerator
);
router.post(
  "/meal-description",
  Auth_default(UserRole.provider),
  aiController.generateMealDescription
);
router.get("/health-tip", aiController.aiHealthTipSuggestion);
var aiRoutes = router;

// src/app/modules/blog/blog.route.ts
init_esm_shims();
import express2 from "express";

// src/app/modules/blog/blog.controller.ts
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

// src/app/modules/blog/blog.service.ts
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
  if (payload.category) {
    andConditions.push({
      OR: [
        {
          category: {
            name: {
              equals: payload.category,
              mode: "insensitive"
            }
          }
        },
        {
          category: {
            slug: {
              equals: payload.category,
              mode: "insensitive"
            }
          }
        }
      ]
    });
  }
  return andConditions.length > 0 ? { AND: andConditions } : {};
};
var buildBlogQueryCondition = (payload) => {
  const andConditions = [];
  if (payload.search) {
    andConditions.push({
      OR: [
        {
          title: {
            contains: payload.search,
            mode: "insensitive"
          }
        },
        {
          content: {
            contains: payload.search,
            mode: "insensitive"
          }
        },
        {
          slug: {
            contains: payload.search,
            mode: "insensitive"
          }
        }
      ]
    });
  }
  if (payload.userId) {
    andConditions.push({
      userId: {
        equals: payload.userId
      }
    });
  }
  return andConditions.length > 0 ? { AND: andConditions } : {};
};

// src/app/modules/blog/blog.service.ts
var getAllBlogs = async (payload = {}) => {
  const page = Number(payload.page) || 1;
  const limit = Number(payload.limit) || 10;
  const skip = Number(payload.skip) || (page - 1) * limit;
  const search = typeof payload.search === "string" && payload.search.trim() && payload.search !== "undefined" && payload.search !== "null" ? payload.search.trim() : void 0;
  const userId = typeof payload.userId === "string" && payload.userId.trim() && payload.userId !== "undefined" && payload.userId !== "null" ? payload.userId.trim() : void 0;
  const whereCondition = buildBlogQueryCondition({
    ...search ? { search } : {},
    ...userId ? { userId } : {}
  });
  const blogPosts = await prisma.blogs.findMany({
    take: limit,
    skip,
    where: whereCondition,
    include: {
      user: {
        select: {
          name: true,
          email: true
        }
      }
    },
    orderBy: {
      [payload.sortBy || "createdAt"]: payload.sortOrder || "desc"
    }
  });
  const total = await prisma.blogs.count({
    where: whereCondition
  });
  if (!blogPosts || blogPosts.length === 0) {
    throw new ApiError_default(StatusCodes6.NOT_FOUND, "No blog posts found");
  }
  const totalPages = Math.ceil(total / limit);
  return {
    data: blogPosts,
    pagination: {
      total,
      page: payload.page || 1,
      limit: payload.limit || 10,
      totalPages
    }
  };
};
var getAllForAdmin = async (payload = {}) => {
  const page = Number(payload.page) || 1;
  const limit = Number(payload.limit) || 10;
  const skip = Number(payload.skip) || (page - 1) * limit;
  const blogPosts = await prisma.blogs.findMany({
    take: limit,
    skip,
    include: {
      user: {
        select: {
          name: true,
          email: true
        }
      }
    },
    orderBy: {
      [payload.sortBy || "createdAt"]: payload.sortOrder || "desc"
    }
  });
  const total = await prisma.blogs.count();
  if (!blogPosts || blogPosts.length === 0) {
    throw new ApiError_default(StatusCodes6.NOT_FOUND, "No blog posts found");
  }
  const totalPages = Math.ceil(total / limit);
  return {
    data: blogPosts,
    pagination: {
      total,
      page: payload.page || 1,
      limit: payload.limit || 10,
      totalPages
    }
  };
};
var getBlogBySlug = async (slug) => {
  const blog = await prisma.blogs.findUnique({
    where: {
      slug
    },
    include: {
      user: {
        select: {
          name: true,
          email: true
        }
      }
    }
  });
  return blog;
};
var deleteBlogById = async (id) => {
  const deletedBlog = await prisma.blogs.delete({
    where: {
      id: Number(id)
    }
  });
  return deletedBlog;
};
var BlogService = {
  getAllBlogs,
  getAllForAdmin,
  getBlogBySlug,
  deleteBlogById
};

// src/app/modules/blog/blog.controller.ts
var getAllBlogs2 = catchAsync_default(async (req, res) => {
  const payload = req.query;
  const { page, limit, skip, sortBy, sortOrder } = PaginationSortingHelper_default(
    payload
  );
  const normalizedSearch = typeof payload.search === "string" && payload.search.trim() ? payload.search.trim() : void 0;
  const result = await BlogService.getAllBlogs({
    page: Number(page),
    limit: Number(limit),
    skip: Number(skip),
    ...normalizedSearch ? { search: normalizedSearch } : {},
    sortBy,
    sortOrder
  });
  sendResponse_default(res, {
    statusCode: StatusCodes7.OK,
    success: true,
    message: "Blogs retrieved successfully",
    data: result.data,
    meta: {
      page: result.pagination.page,
      limit: result.pagination.limit,
      total: result.pagination.total,
      totalPages: result.pagination.totalPages
    }
  });
});
var getAllForAdmin2 = catchAsync_default(async (req, res) => {
  const payload = req.query;
  const { page, limit, skip, sortBy, sortOrder } = PaginationSortingHelper_default(
    payload
  );
  const result = await BlogService.getAllForAdmin({
    page: Number(page),
    limit: Number(limit),
    skip: Number(skip),
    sortBy,
    sortOrder
  });
  sendResponse_default(res, {
    statusCode: StatusCodes7.OK,
    success: true,
    message: "Blogs retrieved successfully",
    data: result.data,
    meta: {
      page: result.pagination.page,
      limit: result.pagination.limit,
      total: result.pagination.total,
      totalPages: result.pagination.totalPages
    }
  });
});
var getBlogBySlug2 = catchAsync_default(async (req, res) => {
  const { slug } = req.params;
  const blog = await BlogService.getBlogBySlug(slug);
  if (!blog) {
    throw new ApiError_default(StatusCodes7.NOT_FOUND, "Blog post not found");
  }
  sendResponse_default(res, {
    statusCode: StatusCodes7.OK,
    success: true,
    message: "Blog retrieved successfully",
    data: blog
  });
});
var deleteBlogById2 = catchAsync_default(async (req, res) => {
  const { id } = req.params;
  await BlogService.deleteBlogById(Number(id));
  sendResponse_default(res, {
    statusCode: StatusCodes7.OK,
    success: true,
    message: "Blog deleted successfully"
  });
});
var BlogController = {
  getAllBlogs: getAllBlogs2,
  getAllForAdmin: getAllForAdmin2,
  getBlogBySlug: getBlogBySlug2,
  deleteBlogById: deleteBlogById2
};

// src/app/modules/blog/blog.route.ts
var router2 = express2.Router();
router2.get("/", BlogController.getAllBlogs);
router2.get(
  "/admin",
  Auth_default(UserRole.admin),
  BlogController.getAllForAdmin
);
router2.get("/:slug", BlogController.getBlogBySlug);
router2.delete(
  "/:id",
  Auth_default(UserRole.admin),
  BlogController.deleteBlogById
);
var BlogRoute = router2;

// src/app/modules/category/category.route.ts
init_esm_shims();
import express3 from "express";

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
import { StatusCodes as StatusCodes9 } from "http-status-codes";

// src/app/modules/category/category.service.ts
init_esm_shims();
import { StatusCodes as StatusCodes8 } from "http-status-codes";
import slugify2 from "slugify";
var createCategory = async (payload) => {
  const { name } = payload;
  const data = await prisma.category.create({
    data: {
      name,
      slug: slugify2(name, {
        replacement: "-",
        lower: true,
        trim: true,
        remove: /[*+~.()'"!:@]/g,
        strict: true
      })
    }
  });
  if (!data) {
    throw new ApiError_default(StatusCodes8.BAD_REQUEST, "Failed to create category");
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
    throw new ApiError_default(StatusCodes8.NOT_FOUND, "Category not found");
  }
  const data = await prisma.category.update({
    where: { id },
    data: {
      name,
      slug: slugify2(name, {
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
    throw new ApiError_default(StatusCodes8.NOT_FOUND, "Category not found");
  }
  if (category._count.meals > 0) {
    throw new ApiError_default(
      StatusCodes8.BAD_REQUEST,
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
    statusCode: StatusCodes9.CREATED,
    success: true,
    message: "Category created successfully",
    data: result
  });
});
var getAllCategories2 = catchAsync_default(async (req, res) => {
  const result = await CategoryService.getAllCategories();
  sendResponse_default(res, {
    statusCode: StatusCodes9.OK,
    success: true,
    message: "Categories retrieved successfully",
    data: result
  });
});
var updateCategory2 = catchAsync_default(async (req, res) => {
  const { id } = req.params;
  const result = await CategoryService.updateCategory(id, req.body);
  sendResponse_default(res, {
    statusCode: StatusCodes9.OK,
    success: true,
    message: "Category updated successfully",
    data: result
  });
});
var deleteCategory2 = catchAsync_default(async (req, res) => {
  const { id } = req.params;
  const result = await CategoryService.deleteCategory(id);
  sendResponse_default(res, {
    statusCode: StatusCodes9.OK,
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
var router3 = express3.Router();
router3.post(
  "/",
  Auth_default(UserRole.admin),
  ValidateRequest_default(CategoryValidation.categoryZodSchema),
  CategoryController.createCategory
);
router3.get("/", CategoryController.getAllCategories);
router3.patch(
  "/:id",
  Auth_default(UserRole.admin),
  ValidateRequest_default(CategoryValidation.categoryZodSchema),
  CategoryController.updateCategory
);
router3.delete(
  "/:id",
  Auth_default(UserRole.admin),
  CategoryController.deleteCategory
);
var CategoryRoutes = router3;

// src/app/modules/meal/meal.route.ts
init_esm_shims();
import express4 from "express";

// src/app/modules/meal/meal.controller.ts
init_esm_shims();
import { StatusCodes as StatusCodes11 } from "http-status-codes";

// src/app/modules/meal/meal.service.ts
init_esm_shims();
import { StatusCodes as StatusCodes10 } from "http-status-codes";
var withAverageRating = (meal) => {
  const reviews = meal.reviews ?? [];
  const rating = reviews.length > 0 ? Number(
    (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1)
  ) : 0;
  return {
    ...meal,
    rating
  };
};
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
        StatusCodes10.NOT_FOUND,
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
    include: {
      reviews: {
        select: {
          rating: true
        }
      }
    },
    ...payload.sortBy && { orderBy: { [payload.sortBy]: payload.sortOrder } }
  });
  const total = await prisma.meal.count({
    where: buildMealQueryCondition(payload)
  });
  if (!meals || meals.length === 0) {
    throw new ApiError_default(StatusCodes10.NOT_FOUND, "No meals found");
  }
  const totalPages = Math.ceil(total / Number(payload.limit));
  const mealsWithRating = meals.map((meal) => withAverageRating(meal));
  return {
    data: mealsWithRating,
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
    throw new ApiError_default(StatusCodes10.NOT_FOUND, "Meal not found");
  }
  return data;
};
var getProviderMeals = async (userId) => {
  const providerProfile = await prisma.providerProfile.findUnique({
    where: { userId }
  });
  if (!providerProfile) {
    throw new ApiError_default(StatusCodes10.FORBIDDEN, "Provider profile not found");
  }
  const meals = await prisma.meal.findMany({
    where: { providerId: providerProfile.id },
    include: {
      category: true,
      reviews: {
        select: {
          rating: true
        }
      },
      provider: true
    },
    orderBy: {
      createdAt: "desc"
    }
  });
  const mealsWithRating = meals.map((meal) => withAverageRating(meal));
  return {
    data: mealsWithRating,
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
    throw new ApiError_default(StatusCodes10.FORBIDDEN, "Provider profile not found");
  }
  const existingMeal = await prisma.meal.findFirst({
    where: {
      id: mealId,
      providerId: providerProfile.id
    }
  });
  if (!existingMeal) {
    throw new ApiError_default(StatusCodes10.NOT_FOUND, "Meal not found");
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
    throw new ApiError_default(StatusCodes10.FORBIDDEN, "Provider profile not found");
  }
  const existingMeal = await prisma.meal.findFirst({
    where: {
      id: mealId,
      providerId: providerProfile.id
    }
  });
  if (!existingMeal) {
    throw new ApiError_default(StatusCodes10.NOT_FOUND, "Meal not found");
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
      StatusCodes10.BAD_REQUEST,
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
    throw new ApiError_default(StatusCodes10.FORBIDDEN, "Provider profile not found");
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
      reviews: {
        select: {
          rating: true
        }
      },
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
  const mealsWithRating = meals.map((meal) => withAverageRating(meal));
  return {
    data: mealsWithRating,
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
    throw new ApiError_default(StatusCodes10.FORBIDDEN, "Provider profile not found");
  }
  const existingOrder = await prisma.order.findFirst({
    where: {
      id: orderId,
      providerId: providerProfile.id
    }
  });
  if (!existingOrder) {
    throw new ApiError_default(StatusCodes10.NOT_FOUND, "Order not found");
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
    statusCode: StatusCodes11.CREATED,
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
    statusCode: StatusCodes11.OK,
    success: true,
    message: "Meals retrieved successfully",
    data: result
  });
});
var getMealsById2 = catchAsync_default(async (req, res) => {
  const mealId = req.params.id;
  const result = await MealService.getMealsById(mealId);
  sendResponse_default(res, {
    statusCode: StatusCodes11.OK,
    success: true,
    message: "Meal retrieved successfully",
    data: result
  });
});
var getProviderMeals2 = catchAsync_default(async (req, res) => {
  const userId = req.user?.id;
  const result = await MealService.getProviderMeals(userId);
  sendResponse_default(res, {
    statusCode: StatusCodes11.OK,
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
    statusCode: StatusCodes11.OK,
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
    statusCode: StatusCodes11.OK,
    success: true,
    message: "Meal deleted successfully",
    data: result
  });
});
var getProviderOrders2 = catchAsync_default(async (req, res) => {
  const userId = req.user?.id;
  const result = await MealService.getProviderOrders(userId);
  sendResponse_default(res, {
    statusCode: StatusCodes11.OK,
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
    statusCode: StatusCodes11.OK,
    success: true,
    message: "Order status updated successfully",
    data: result
  });
});
var getMealTypes2 = catchAsync_default(async (req, res) => {
  const result = await MealService.getMealTypes();
  sendResponse_default(res, {
    statusCode: StatusCodes11.OK,
    success: true,
    message: "Meal types retrieved successfully",
    data: result
  });
});
var getDietaryOptions2 = catchAsync_default(async (req, res) => {
  const result = await MealService.getDietaryOptions();
  sendResponse_default(res, {
    statusCode: StatusCodes11.OK,
    success: true,
    message: "Dietary options retrieved successfully",
    data: result
  });
});
var getCuisineOptions2 = catchAsync_default(async (req, res) => {
  const result = await MealService.getCuisineOptions();
  sendResponse_default(res, {
    statusCode: StatusCodes11.OK,
    success: true,
    message: "Cuisine options retrieved successfully",
    data: result
  });
});
var getPopularMeals2 = catchAsync_default(async (req, res) => {
  const result = await MealService.getPopularMeals();
  sendResponse_default(res, {
    statusCode: StatusCodes11.OK,
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
var router4 = express4.Router();
router4.get("/", MealController.getAllMeals);
router4.get("/:id", MealController.getMealsById);
router4.get("/types/list", MealController.getMealTypes);
router4.get("/dietary-options/list", MealController.getDietaryOptions);
router4.get("/cuisine-options/list", MealController.getCuisineOptions);
router4.post(
  "/",
  Auth_default(UserRole.provider),
  ValidateRequest_default(MealValidation.mealCreateZodSchema),
  MealController.createMeal
);
router4.get(
  "/provider/meals",
  Auth_default(UserRole.provider),
  MealController.getProviderMeals
);
router4.get("/popular/list", MealController.getPopularMeals);
router4.put(
  "/:id",
  Auth_default(UserRole.provider),
  ValidateRequest_default(MealValidation.mealUpdateZodSchema),
  MealController.updateMeal
);
router4.get(
  "/provider/orders",
  Auth_default(UserRole.provider),
  MealController.getProviderOrders
);
router4.put(
  "/orders/:id/status",
  Auth_default(UserRole.provider),
  MealController.updateOrderStatus
);
router4.delete(
  "/:id",
  Auth_default(UserRole.provider),
  MealController.deleteMeal
);
var MealRoutes = router4;

// src/app/modules/order/order.route.ts
init_esm_shims();
import express5 from "express";

// src/app/modules/order/order.controller.ts
init_esm_shims();
import { StatusCodes as StatusCodes13 } from "http-status-codes";

// src/app/modules/order/order.service.ts
init_esm_shims();
import { StatusCodes as StatusCodes12 } from "http-status-codes";
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
    throw new ApiError_default(StatusCodes12.NOT_FOUND, "Provider not found or inactive");
  }
  if (provider.user.status === "inactive") {
    throw new ApiError_default(
      StatusCodes12.FORBIDDEN,
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
    throw new ApiError_default(StatusCodes12.BAD_REQUEST, "Invalid meal detected");
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
    throw new ApiError_default(StatusCodes12.NOT_FOUND, "Order not found");
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
    throw new ApiError_default(StatusCodes12.NOT_FOUND, "Order not found");
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
    throw new ApiError_default(StatusCodes12.NOT_FOUND, "Order not found");
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
    throw new ApiError_default(StatusCodes12.NOT_FOUND, "Order not found");
  }
  if (order.status === client_exports.OrderStatus.CANCELLED) {
    throw new ApiError_default(StatusCodes12.BAD_REQUEST, "Order is already cancelled");
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
    statusCode: StatusCodes13.CREATED,
    success: true,
    message: "Order created successfully",
    data: result
  });
});
var getMyOrders2 = catchAsync_default(async (req, res) => {
  const userId = req.user?.id;
  const result = await OrderService.getMyOrders(userId);
  sendResponse_default(res, {
    statusCode: StatusCodes13.OK,
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
    statusCode: StatusCodes13.OK,
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
    statusCode: StatusCodes13.OK,
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
    statusCode: StatusCodes13.OK,
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
    statusCode: StatusCodes13.OK,
    success: true,
    message: "Order cancelled successfully",
    data: result
  });
});
var getAllOrders2 = catchAsync_default(async (req, res) => {
  const result = await OrderService.getAllOrders();
  sendResponse_default(res, {
    statusCode: StatusCodes13.OK,
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
var router5 = express5.Router();
router5.get("/", Auth_default(UserRole.customer), OrderController.getMyOrders);
router5.get(
  "/:id",
  Auth_default(UserRole.customer),
  OrderController.getOrderById
);
router5.patch(
  "/status/:id",
  Auth_default(UserRole.provider),
  ValidateRequest_default(OrderValidation.updateOrderStatusSchema),
  OrderController.updateOrderStatus
);
router5.post(
  "/",
  Auth_default(UserRole.customer),
  ValidateRequest_default(OrderValidation.createOrderSchema),
  OrderController.createOrder
);
router5.get(
  "/track/:id",
  Auth_default(UserRole.customer, UserRole.provider, UserRole.admin),
  OrderController.trackOrderStatus
);
router5.patch(
  "/cancel/:id",
  Auth_default(UserRole.customer),
  OrderController.cancelOrder
);
router5.get(
  "/all/orders",
  Auth_default(UserRole.admin),
  OrderController.getAllOrders
);
var OrderRoutes = router5;

// src/app/modules/provider/provider.route.ts
init_esm_shims();
import express6 from "express";

// src/app/modules/provider/provider.controller.ts
init_esm_shims();
import { StatusCodes as StatusCodes15 } from "http-status-codes";

// src/app/modules/provider/provider.service.ts
init_esm_shims();
import { StatusCodes as StatusCodes14 } from "http-status-codes";
var createProviderProfile = async (payload) => {
  const { userId, shopName, description, address, phone, isOpen } = payload;
  const data = await prisma.$transaction(async (tx) => {
    const existingProfile = await tx.providerProfile.findUnique({
      where: { userId }
    });
    if (existingProfile) {
      throw new ApiError_default(
        StatusCodes14.CONFLICT,
        "Provider profile already exists for this user"
      );
    }
    const user = await tx.user.findUnique({
      where: { id: userId }
    });
    if (!user) {
      throw new ApiError_default(
        StatusCodes14.NOT_FOUND,
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
    throw new ApiError_default(StatusCodes14.NOT_FOUND, "No providers found!");
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
      StatusCodes14.NOT_FOUND,
      "Provider not found! Try again with valid id"
    );
  }
  return provider;
};
var getPopularProvider = async () => {
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
    throw new ApiError_default(StatusCodes14.NOT_FOUND, "No providers found!");
  }
  const sortedProviders = providers.sort((a, b) => {
    const avgRatingA = a.meals.reduce((sum, meal) => sum + meal.reviews.length, 0) / (a.meals.length || 1);
    const avgRatingB = b.meals.reduce((sum, meal) => sum + meal.reviews.length, 0) / (b.meals.length || 1);
    return avgRatingB - avgRatingA;
  });
  return sortedProviders.slice(0, 10);
};
var ProviderService = {
  createProviderProfile,
  getAllProviders,
  getProviderById,
  getPopularProvider
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
      statusCode: StatusCodes15.CREATED,
      success: true,
      message: "Provider profile created successfully",
      data: result
    });
  }
);
var getAllProviders2 = catchAsync_default(async (req, res) => {
  const result = await ProviderService.getAllProviders();
  sendResponse_default(res, {
    statusCode: StatusCodes15.OK,
    success: true,
    message: "Providers retrieved successfully",
    data: result
  });
});
var getProviderById2 = catchAsync_default(async (req, res) => {
  const providerId = req.params.id;
  const result = await ProviderService.getProviderById(providerId);
  sendResponse_default(res, {
    statusCode: StatusCodes15.OK,
    success: true,
    message: "Provider retrieved successfully",
    data: result
  });
});
var getPopularProvider2 = catchAsync_default(async (req, res) => {
  const result = await ProviderService.getPopularProvider();
  sendResponse_default(res, {
    statusCode: StatusCodes15.OK,
    success: true,
    message: "Popular providers retrieved successfully",
    data: result
  });
});
var ProviderController = {
  createProviderProfile: createProviderProfile2,
  getAllProviders: getAllProviders2,
  getProviderById: getProviderById2,
  getPopularProvider: getPopularProvider2
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
var router6 = express6.Router();
router6.get("/", ProviderController.getAllProviders);
router6.get("/popular", ProviderController.getPopularProvider);
router6.get("/:id", ProviderController.getProviderById);
router6.post(
  "/",
  Auth_default(UserRole.provider),
  ValidateRequest_default(ProviderValidation.createProviderProfileZodSchema),
  ProviderController.createProviderProfile
);
var ProviderRoutes = router6;

// src/app/modules/review/review.routes.ts
init_esm_shims();
import express7 from "express";

// src/app/modules/review/review.controller.ts
init_esm_shims();
import { StatusCodes as StatusCodes17 } from "http-status-codes";

// src/app/modules/review/review.service.ts
init_esm_shims();
import { StatusCodes as StatusCodes16 } from "http-status-codes";
var createReview = async (data) => {
  const { userId, mealId, rating, comment } = data;
  if (rating < 1 || rating > 5) {
    throw new ApiError_default(
      StatusCodes16.BAD_REQUEST,
      "Rating must be between 1 and 5"
    );
  }
  const meal = await prisma.meal.findUnique({
    where: { id: mealId }
  });
  if (!meal) {
    throw new ApiError_default(StatusCodes16.NOT_FOUND, "Meal not found");
  }
  const existingReview = await prisma.review.findFirst({
    where: {
      userId,
      mealId
    }
  });
  if (existingReview) {
    throw new ApiError_default(
      StatusCodes16.BAD_REQUEST,
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
      StatusCodes16.BAD_REQUEST,
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
    throw new ApiError_default(StatusCodes16.NOT_FOUND, "Review not found");
  }
  if (existingReview.userId !== userId) {
    throw new ApiError_default(
      StatusCodes16.FORBIDDEN,
      "You can only update your own reviews"
    );
  }
  if (data.rating && (data.rating < 1 || data.rating > 5)) {
    throw new ApiError_default(
      StatusCodes16.BAD_REQUEST,
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
    throw new ApiError_default(StatusCodes16.NOT_FOUND, "Review not found");
  }
  if (existingReview.userId !== userId) {
    throw new ApiError_default(
      StatusCodes16.FORBIDDEN,
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
      statusCode: StatusCodes17.UNAUTHORIZED,
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
    statusCode: StatusCodes17.CREATED,
    success: true,
    message: "Review created successfully",
    data: result
  });
});
var getMealReviews2 = catchAsync_default(async (req, res) => {
  const { mealId } = req.params;
  const result = await reviewService.getMealReviews(mealId);
  sendResponse_default(res, {
    statusCode: StatusCodes17.OK,
    success: true,
    message: "Reviews fetched successfully",
    data: result
  });
});
var getUserReviews2 = catchAsync_default(async (req, res) => {
  const userId = req.user?.id;
  if (!userId) {
    return sendResponse_default(res, {
      statusCode: StatusCodes17.UNAUTHORIZED,
      success: false,
      message: "Unauthorized",
      data: null
    });
  }
  const result = await reviewService.getUserReviews(userId);
  sendResponse_default(res, {
    statusCode: StatusCodes17.OK,
    success: true,
    message: "User reviews fetched successfully",
    data: result
  });
});
var getProviderReviews2 = catchAsync_default(async (req, res) => {
  const userId = req.user?.id;
  if (!userId) {
    return sendResponse_default(res, {
      statusCode: StatusCodes17.UNAUTHORIZED,
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
      statusCode: StatusCodes17.FORBIDDEN,
      success: false,
      message: "Provider profile not found",
      data: null
    });
  }
  const result = await reviewService.getProviderReviews(provider.id);
  sendResponse_default(res, {
    statusCode: StatusCodes17.OK,
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
      statusCode: StatusCodes17.UNAUTHORIZED,
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
    statusCode: StatusCodes17.OK,
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
      statusCode: StatusCodes17.UNAUTHORIZED,
      success: false,
      message: "Unauthorized",
      data: null
    });
  }
  const result = await reviewService.deleteReview(reviewId, userId);
  sendResponse_default(res, {
    statusCode: StatusCodes17.OK,
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
var router7 = express7.Router();
router7.post(
  "/",
  Auth_default(UserRole.customer),
  reviewController.createReview
);
router7.get("/meal/:mealId", reviewController.getMealReviews);
router7.get(
  "/user",
  Auth_default(UserRole.customer),
  reviewController.getUserReviews
);
router7.get(
  "/provider",
  Auth_default(UserRole.provider),
  reviewController.getProviderReviews
);
router7.put(
  "/:reviewId",
  Auth_default(UserRole.customer),
  reviewController.updateReview
);
router7.delete(
  "/:reviewId",
  Auth_default(UserRole.customer),
  reviewController.deleteReview
);
var reviewRoutes = router7;

// src/app/modules/user/user.route.ts
init_esm_shims();
import express8 from "express";

// src/app/modules/user/user.controller.ts
init_esm_shims();
import { StatusCodes as StatusCodes18 } from "http-status-codes";

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
    statusCode: StatusCodes18.OK,
    success: true,
    message: "Current user retrieved successfully",
    data: result
  });
});
var getAllUsers2 = catchAsync_default(async (req, res) => {
  const result = await UserService.getAllUsers();
  sendResponse_default(res, {
    statusCode: StatusCodes18.OK,
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
    statusCode: StatusCodes18.OK,
    success: true,
    message: "User status updated successfully",
    data: result
  });
});
var updateProfile2 = catchAsync_default(async (req, res) => {
  const result = await UserService.updateProfile(req, req.body);
  sendResponse_default(res, {
    statusCode: StatusCodes18.OK,
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
var router8 = express8.Router();
router8.get(
  "/me",
  Auth_default(UserRole.admin, UserRole.customer, UserRole.provider),
  UserController.getCurrentUser
);
router8.get("/", Auth_default(UserRole.admin), UserController.getAllUsers);
router8.patch(
  "/:id",
  Auth_default(UserRole.admin),
  UserController.updateUserStatus
);
router8.patch(
  "/profile/update",
  Auth_default(UserRole.admin, UserRole.customer, UserRole.provider),
  UserController.updateProfile
);
var UserRoutes = router8;

// src/app/routes/index.ts
var router9 = express9.Router();
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
  },
  {
    path: "/ai",
    routes: aiRoutes
  },
  {
    path: "/blogs",
    routes: BlogRoute
  }
];
moduleRoutes.forEach((route) => router9.use(route.path, route.routes));
var routes_default = router9;

// src/app.ts
var app = express10();
app.set("trust proxy", 1);
app.use(express10.json({ limit: "16kb" }));
app.use(express10.urlencoded({ extended: true, limit: "16kb" }));
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
    statusCode: StatusCodes19.OK,
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
    server = app_default.listen(process.env.PORT || 8080, () => {
      console.log(
        `Application is listening on port ${process.env.PORT || 8080}...!`
      );
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
