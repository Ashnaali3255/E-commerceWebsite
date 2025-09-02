import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";

dotenv.config();

const {PGHOST, PGDATABASE, PGUSER, PGPASSWORD} = process.env;

//Create SQL connection using our env variables 
export const sql = neon(
`postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require&channel_binding=require`,
);

//This sql function we export is used as tagged template literal, which allows us to write SQL queries safely.

// psql 'postgresql://neondb_owner:npg_auqSYVEXb3l5@ep-spring-thunder-adey6uoi-pooler.c-2.us-east-1.aws.neon.tech/neondb?
// sslmode=require&channel_binding=require'