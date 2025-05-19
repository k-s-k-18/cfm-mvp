import { varchar, pgTable } from "drizzle-orm/pg-core";

export const usersTable = pgTable('users',{
    email: varchar('email').primaryKey(),
    password: varchar('password').notNull()
})

export type insertUser = typeof usersTable.$inferInsert;