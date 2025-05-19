
import dotenv from 'dotenv';
import {defineConfig} from 'drizzle-kit';


dotenv.config();

export default defineConfig({
    schema: './src/models/usersModel.ts',
    out:'./supabase/migrations',
    dialect:'postgresql',
    dbCredentials:{
        url: process.env.DB_URI!,
    }
});
