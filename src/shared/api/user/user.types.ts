export type UserRole = "USER";

export type UserSubscriptionPlan = "FREE";

export type User = {
  id: number;
  email: string;
  name: string;
  organizationId: number;
  tokens: number;

  role: UserRole;
  subscription: UserSubscriptionPlan;
};
