import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

const sql = neon(process.env.NEXT_PUBLIC_DRIZZLE_DB_URL);
// const db = drizzle({ client: sql });

export const db = drizzle(sql, { schema });

const result = await db.execute("select 1");
