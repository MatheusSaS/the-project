import { Kysely } from "kysely";
import { PostgresDialect } from "kysely";
import { Pool } from 'pg'
import { customAlphabet } from "nanoid";

import type { DB } from "./prisma/types";

export { jsonArrayFrom, jsonObjectFrom } from "kysely/helpers/postgres";

export * from "./prisma/types";

export const db = new Kysely<DB>({
  dialect: new PostgresDialect({
    pool: new Pool({
      database: 'root',
      password: 'root',
      host: 'localhost',
      user: 'root',
    })
  }),
});

export const genId = customAlphabet("0123456789abcdefghijklmnopqrstuvwxyz", 16);