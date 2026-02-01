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
import express7 from "express";
import { StatusCodes as StatusCodes13 } from "http-status-codes";

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
import express6 from "express";

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
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";

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
import * as path2 from "path";
import { fileURLToPath as fileURLToPath2 } from "url";

// generated/prisma/internal/class.ts
init_esm_shims();
import * as runtime2 from "@prisma/client/runtime/client";
var config = {
  "previewFeatures": [],
  "clientVersion": "7.3.0",
  "engineVersion": "9d6ad21cbbceab97458517b147a6a09ff43aa735",
  "activeProvider": "postgresql",
  "inlineSchema": 'model User {\n  id            String     @id\n  name          String\n  email         String\n  emailVerified Boolean    @default(false)\n  image         String?\n  role          UserRole   @default(customer)\n  status        UserStatus @default(active)\n  phone         String?\n  createdAt     DateTime   @default(now())\n  updatedAt     DateTime   @updatedAt\n  sessions      Session[]\n  accounts      Account[]\n\n  providerProfile ProviderProfile?\n  orders          Order[]\n  reviews         Review[]\n\n  @@unique([email])\n  @@map("user")\n}\n\nmodel Session {\n  id        String   @id\n  expiresAt DateTime\n  token     String\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n  ipAddress String?\n  userAgent String?\n  userId    String\n  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  @@unique([token])\n  @@index([userId])\n  @@map("session")\n}\n\nmodel Account {\n  id                    String    @id\n  accountId             String\n  providerId            String\n  userId                String\n  user                  User      @relation(fields: [userId], references: [id], onDelete: Cascade)\n  accessToken           String?\n  refreshToken          String?\n  idToken               String?\n  accessTokenExpiresAt  DateTime?\n  refreshTokenExpiresAt DateTime?\n  scope                 String?\n  password              String?\n  createdAt             DateTime  @default(now())\n  updatedAt             DateTime  @updatedAt\n\n  @@index([userId])\n  @@map("account")\n}\n\nmodel Verification {\n  id         String   @id\n  identifier String\n  value      String\n  expiresAt  DateTime\n  createdAt  DateTime @default(now())\n  updatedAt  DateTime @updatedAt\n\n  @@index([identifier])\n  @@map("verification")\n}\n\nenum UserRole {\n  admin\n  customer\n  provider\n}\n\nenum UserStatus {\n  active\n  inactive\n}\n\nmodel Category {\n  id   String @id @default(uuid())\n  name String @unique\n  slug String @unique\n\n  meals Meal[]\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n}\n\nmodel Meal {\n  id          String          @id @default(uuid())\n  providerId  String\n  categoryId  String\n  name        String\n  description String?\n  price       Float\n  image       String?\n  isAvailable Boolean         @default(true)\n  calories    Int\n  ingredients String[]        @default([])\n  cuisine     String?\n  dietary     String[]        @default([])\n  mealType    String?\n  spiceLevel  String?\n  provider    ProviderProfile @relation(fields: [providerId], references: [id])\n  category    Category        @relation(fields: [categoryId], references: [id])\n  reviews     Review[]\n  orderItems  OrderItem[]\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n}\n\nmodel Order {\n  id          String      @id @default(uuid())\n  userId      String\n  providerId  String\n  totalAmount Float\n  status      OrderStatus\n  address     String\n  paymentType PaymentType @default(COD)\n\n  user     User            @relation(fields: [userId], references: [id])\n  provider ProviderProfile @relation(fields: [providerId], references: [id])\n  items    OrderItem[]\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n}\n\nenum OrderStatus {\n  PENDING\n  ACCEPTED\n  COOKING\n  ON_THE_WAY\n  DELIVERED\n  CANCELLED\n}\n\nenum PaymentType {\n  COD\n}\n\nmodel OrderItem {\n  id       String @id @default(uuid())\n  orderId  String\n  mealId   String\n  price    Float\n  quantity Int\n\n  order Order @relation(fields: [orderId], references: [id])\n  meal  Meal  @relation(fields: [mealId], references: [id])\n}\n\nmodel ProviderProfile {\n  id          String  @id @default(uuid())\n  userId      String  @unique\n  shopName    String\n  description String?\n  address     String\n  phone       String\n  isOpen      Boolean @default(true)\n\n  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)\n  meals     Meal[]\n  orders    Order[]\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n}\n\nmodel Review {\n  id      String  @id @default(uuid())\n  userId  String\n  mealId  String\n  rating  Int\n  comment String?\n\n  user User @relation(fields: [userId], references: [id])\n  meal Meal @relation(fields: [mealId], references: [id])\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n}\n\ngenerator client {\n  provider = "prisma-client"\n  output   = "../../generated/prisma"\n}\n\ndatasource db {\n  provider = "postgresql"\n}\n',
  "runtimeDataModel": {
    "models": {},
    "enums": {},
    "types": {}
  }
};
config.runtimeDataModel = JSON.parse('{"models":{"User":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"email","kind":"scalar","type":"String"},{"name":"emailVerified","kind":"scalar","type":"Boolean"},{"name":"image","kind":"scalar","type":"String"},{"name":"role","kind":"enum","type":"UserRole"},{"name":"status","kind":"enum","type":"UserStatus"},{"name":"phone","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"sessions","kind":"object","type":"Session","relationName":"SessionToUser"},{"name":"accounts","kind":"object","type":"Account","relationName":"AccountToUser"},{"name":"providerProfile","kind":"object","type":"ProviderProfile","relationName":"ProviderProfileToUser"},{"name":"orders","kind":"object","type":"Order","relationName":"OrderToUser"},{"name":"reviews","kind":"object","type":"Review","relationName":"ReviewToUser"}],"dbName":"user"},"Session":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"expiresAt","kind":"scalar","type":"DateTime"},{"name":"token","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"ipAddress","kind":"scalar","type":"String"},{"name":"userAgent","kind":"scalar","type":"String"},{"name":"userId","kind":"scalar","type":"String"},{"name":"user","kind":"object","type":"User","relationName":"SessionToUser"}],"dbName":"session"},"Account":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"accountId","kind":"scalar","type":"String"},{"name":"providerId","kind":"scalar","type":"String"},{"name":"userId","kind":"scalar","type":"String"},{"name":"user","kind":"object","type":"User","relationName":"AccountToUser"},{"name":"accessToken","kind":"scalar","type":"String"},{"name":"refreshToken","kind":"scalar","type":"String"},{"name":"idToken","kind":"scalar","type":"String"},{"name":"accessTokenExpiresAt","kind":"scalar","type":"DateTime"},{"name":"refreshTokenExpiresAt","kind":"scalar","type":"DateTime"},{"name":"scope","kind":"scalar","type":"String"},{"name":"password","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"account"},"Verification":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"identifier","kind":"scalar","type":"String"},{"name":"value","kind":"scalar","type":"String"},{"name":"expiresAt","kind":"scalar","type":"DateTime"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"verification"},"Category":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"slug","kind":"scalar","type":"String"},{"name":"meals","kind":"object","type":"Meal","relationName":"CategoryToMeal"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":null},"Meal":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"providerId","kind":"scalar","type":"String"},{"name":"categoryId","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"description","kind":"scalar","type":"String"},{"name":"price","kind":"scalar","type":"Float"},{"name":"image","kind":"scalar","type":"String"},{"name":"isAvailable","kind":"scalar","type":"Boolean"},{"name":"calories","kind":"scalar","type":"Int"},{"name":"ingredients","kind":"scalar","type":"String"},{"name":"cuisine","kind":"scalar","type":"String"},{"name":"dietary","kind":"scalar","type":"String"},{"name":"mealType","kind":"scalar","type":"String"},{"name":"spiceLevel","kind":"scalar","type":"String"},{"name":"provider","kind":"object","type":"ProviderProfile","relationName":"MealToProviderProfile"},{"name":"category","kind":"object","type":"Category","relationName":"CategoryToMeal"},{"name":"reviews","kind":"object","type":"Review","relationName":"MealToReview"},{"name":"orderItems","kind":"object","type":"OrderItem","relationName":"MealToOrderItem"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":null},"Order":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"userId","kind":"scalar","type":"String"},{"name":"providerId","kind":"scalar","type":"String"},{"name":"totalAmount","kind":"scalar","type":"Float"},{"name":"status","kind":"enum","type":"OrderStatus"},{"name":"address","kind":"scalar","type":"String"},{"name":"paymentType","kind":"enum","type":"PaymentType"},{"name":"user","kind":"object","type":"User","relationName":"OrderToUser"},{"name":"provider","kind":"object","type":"ProviderProfile","relationName":"OrderToProviderProfile"},{"name":"items","kind":"object","type":"OrderItem","relationName":"OrderToOrderItem"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":null},"OrderItem":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"orderId","kind":"scalar","type":"String"},{"name":"mealId","kind":"scalar","type":"String"},{"name":"price","kind":"scalar","type":"Float"},{"name":"quantity","kind":"scalar","type":"Int"},{"name":"order","kind":"object","type":"Order","relationName":"OrderToOrderItem"},{"name":"meal","kind":"object","type":"Meal","relationName":"MealToOrderItem"}],"dbName":null},"ProviderProfile":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"userId","kind":"scalar","type":"String"},{"name":"shopName","kind":"scalar","type":"String"},{"name":"description","kind":"scalar","type":"String"},{"name":"address","kind":"scalar","type":"String"},{"name":"phone","kind":"scalar","type":"String"},{"name":"isOpen","kind":"scalar","type":"Boolean"},{"name":"user","kind":"object","type":"User","relationName":"ProviderProfileToUser"},{"name":"meals","kind":"object","type":"Meal","relationName":"MealToProviderProfile"},{"name":"orders","kind":"object","type":"Order","relationName":"OrderToProviderProfile"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":null},"Review":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"userId","kind":"scalar","type":"String"},{"name":"mealId","kind":"scalar","type":"String"},{"name":"rating","kind":"scalar","type":"Int"},{"name":"comment","kind":"scalar","type":"String"},{"name":"user","kind":"object","type":"User","relationName":"ReviewToUser"},{"name":"meal","kind":"object","type":"Meal","relationName":"MealToReview"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":null}},"enums":{},"types":{}}');
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
  client: "7.3.0",
  engine: "9d6ad21cbbceab97458517b147a6a09ff43aa735"
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
globalThis["__dirname"] = path2.dirname(fileURLToPath2(import.meta.url));
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
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
    requireEmailVerification: false
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
    orderBy: { createdAt: "desc" }
  });
  return categories;
};
var CategoryService = {
  createCategory,
  getAllCategories
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
var CategoryController = {
  createCategory: createCategory2,
  getAllCategories: getAllCategories2
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
  Auth_default(UserRole.admin, UserRole.provider),
  ValidateRequest_default(CategoryValidation.categoryZodSchema),
  CategoryController.createCategory
);
router.get("/", CategoryController.getAllCategories);
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
  const totalPages = Math.ceil(page / limit);
  const sortBy = options.sortBy || "createdAt";
  const sortOrder = options.sortOrder || "desc";
  return {
    page,
    limit,
    skip,
    totalPages,
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
    if (!providerFind) {
      throw new ApiError_default(
        StatusCodes6.NOT_FOUND,
        "Provider profile not found for this user"
      );
    }
    const data = await tx.meal.create({
      data: {
        name,
        calories,
        ingredients,
        description: description ?? null,
        price,
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
  console.log(payload);
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
  return {
    data: meals,
    pagination: {
      total,
      ...payload.page !== void 0 && { page: payload.page },
      ...payload.limit !== void 0 && { limit: payload.limit },
      ...payload.totalPages !== void 0 && {
        totalPages: payload.totalPages
      }
    }
  };
};
var getMealsById = async (mealId) => {
  const data = await prisma.meal.findUnique({
    where: { id: mealId }
  });
  if (!data) {
    throw new ApiError_default(StatusCodes6.NOT_FOUND, "Meal not found");
  }
  return data;
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
  const deletedMeal = await prisma.meal.delete({
    where: { id: mealId }
  });
  return deletedMeal;
};
var MealService = {
  createMeal,
  getAllMeals,
  getMealsById,
  updateMeal,
  deleteMeal
};

// src/app/modules/meal/meal.controller.ts
var createMeal2 = catchAsync_default(async (req, res) => {
  const userId = req.user?.id;
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
  const { page, limit, skip, totalPages, sortBy, sortOrder } = PaginationSortingHelper_default(payload);
  const result = await MealService.getAllMeals({
    ...payload,
    page,
    limit,
    skip,
    totalPages,
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
var MealController = {
  createMeal: createMeal2,
  getAllMeals: getAllMeals2,
  getMealsById: getMealsById2,
  updateMeal: updateMeal2,
  deleteMeal: deleteMeal2
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
router2.post(
  "/",
  Auth_default(UserRole.provider),
  ValidateRequest_default(MealValidation.mealCreateZodSchema),
  MealController.createMeal
);
router2.put(
  "/:id",
  Auth_default(UserRole.provider),
  ValidateRequest_default(MealValidation.mealUpdateZodSchema),
  MealController.updateMeal
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
  const order = await prisma.order.create({
    data: {
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
            include: { provider: { select: { id: true, shopName: true } } }
          }
        }
      }
    }
  });
  if (!order) {
    throw new ApiError_default(StatusCodes8.NOT_FOUND, "Order not found");
  }
  return order;
};
var updateOrderStatus = async (orderId, status, providerId) => {
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
var OrderService = {
  createOrder,
  getMyOrders,
  getOrderById,
  updateOrderStatus
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
var updateOrderStatus2 = catchAsync_default(async (req, res) => {
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
var OrderController = {
  createOrder: createOrder2,
  getMyOrders: getMyOrders2,
  getOrderById: getOrderById2,
  updateOrderStatus: updateOrderStatus2
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
          isAvailable: true
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

// src/app/modules/user/user.route.ts
init_esm_shims();
import express5 from "express";

// src/app/modules/user/user.controller.ts
init_esm_shims();
import { StatusCodes as StatusCodes12 } from "http-status-codes";

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
var UserService = {
  getCurrentUser,
  getAllUsers,
  updateUserStatus
};

// src/app/modules/user/user.controller.ts
var getCurrentUser2 = catchAsync_default(async (req, res) => {
  const result = await UserService.getCurrentUser(req);
  sendResponse_default(res, {
    statusCode: StatusCodes12.OK,
    success: true,
    message: "Current user retrieved successfully",
    data: result
  });
});
var getAllUsers2 = catchAsync_default(async (req, res) => {
  const result = await UserService.getAllUsers();
  sendResponse_default(res, {
    statusCode: StatusCodes12.OK,
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
    statusCode: StatusCodes12.OK,
    success: true,
    message: "User status updated successfully",
    data: result
  });
});
var UserController = {
  getCurrentUser: getCurrentUser2,
  getAllUsers: getAllUsers2,
  updateUserStatus: updateUserStatus2
};

// src/app/modules/user/user.route.ts
var router5 = express5.Router();
router5.get(
  "/me",
  Auth_default(UserRole.admin, UserRole.customer, UserRole.provider),
  UserController.getCurrentUser
);
router5.get("/", Auth_default(UserRole.admin), UserController.getAllUsers);
router5.patch(
  "/:id",
  Auth_default(UserRole.admin),
  UserController.updateUserStatus
);
var UserRoutes = router5;

// src/app/routes/index.ts
var router6 = express6.Router();
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
  }
];
moduleRoutes.forEach((route) => router6.use(route.path, route.routes));
var routes_default = router6;

// src/app.ts
var app = express7();
app.set("trust proxy", 1);
app.use(express7.json({ limit: "16kb" }));
app.use(express7.urlencoded({ extended: true, limit: "16kb" }));
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
    statusCode: StatusCodes13.OK,
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
