export type UserOperationType = "INCREASE" | "DECREASE";

export type UserOperation = {
  id: number;
  type: UserOperationType;
  createdAt: Date;
  value: number;
  userId: number;
};
