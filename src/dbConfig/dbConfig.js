import mysql from "serverless-mysql";

export const pool = mysql({
  config: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    // password: '@rayan22X',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
});
