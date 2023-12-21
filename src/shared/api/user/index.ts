import { db } from "@shared";

export * from "./user.types";

export const getUserById = (userId: number) =>
  db.users.where("id").equals(userId).first();
