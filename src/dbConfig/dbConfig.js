import mysql from "serverless-mysql";
import mysql2 from "mysql2";
export const pool = mysql({
  library: mysql2,
  config: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    // password: '@rayan22X',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
});
