import Dexie, { Table } from "dexie";
import { Organization, organizationMock } from "@shared/api/organization";

import { User } from "@shared/api/user";
import usersMock from "@shared/api/user/user.mock.json";

import { UserOperation, UserOperationType } from "@shared/api/userOperations";
import userOperationsMock from "@shared/api/userOperations/userOperations.mock.json";

export class TypedDexie extends Dexie {
  organization!: Table<Organization>;
  users!: Table<User>;
  userOperations!: Table<UserOperation>;

  constructor() {
    super("AppDatabase");
    this.version(1).stores({
      organization: "id",
      users: "id++, organizationId, tokens",
      userOperations: "id++, createdAt, userId",
    });
  }
}

export const db = new TypedDexie();

export const initMockData = async () => {
  const organization = await db.organization.get(1);
  if (organization) return;

  await db.organization.add(organizationMock);
  usersMock.forEach((user) => db.users.add(user as User));
  userOperationsMock.forEach((o) => {
    const operation: UserOperation = {
      id: o.id,
      userId: o.userId,
      createdAt: new Date(o.createdAt),
      type: o.type as UserOperationType,
      value: o.value,
    };

    db.userOperations.add(operation);
  });
};
