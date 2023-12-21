import { db } from "@shared";

export * from "./userOperations.types";

export const getUserOperations = (userId: number, skip = 0, take = 7) => {
  return db.userOperations
    .where("userId")
    .equals(userId)
    .reverse()
    .offset(skip)
    .limit(take)
    .sortBy("createdAt");
};

export const getAllUserOperations = (userId: number) => {
  return db.userOperations
    .where("userId")
    .equals(userId)
    .reverse()
    .sortBy("createdAt");
};
