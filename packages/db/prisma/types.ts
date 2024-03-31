import type { ColumnType } from "kysely";

import type { SubscriptionPlan } from "./enums";

export type Generated<T> =
  T extends ColumnType<infer S, infer I, infer U>
    ? ColumnType<S, I | undefined, U>
    : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export type Customer = {
  id: string;
  stripeId: string;
  subscriptionId: string | null;
  clerkUserId: string;
  clerkOrganizationId: string | null;
  name: string | null;
  plan: SubscriptionPlan | null;
  paidUntil: Timestamp | null;
  endsAt: Timestamp | null;
};
export type DB = {
  Customer: Customer;
};