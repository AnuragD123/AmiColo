import { NextResponse } from "next/server";
import { pool } from "@/dbConfig/dbConfig";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";

export async function POST(req) {
  try {
    const reqBody = await req.json();
    const { password, token, email } = reqBody;

    const users = await pool.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);

    if (users?.length === 0) {
      return NextResponse.json(
        { message: "User with this email does not exist" },
        { status: 404 }
      );
    }

    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
    if (decodedToken.email !== email) {
      return NextResponse.json({ message: "Invalid Token" }, { status: 400 });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    await pool.query("UPDATE users SET password = ? WHERE email = ?", [
      hashedPassword,
      email,
    ]);

    return NextResponse.json({ message: "Password updated successfully" });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
