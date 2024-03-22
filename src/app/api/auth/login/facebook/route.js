import { pool } from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import axios from "axios";
export async function POST(req) {
  try {
    // Get request body
    const reqBody = await req.json();
    const { username, avatar } = reqBody;
    const email =
      username.toLowerCase().split(" ").join("") + "@facebookLogin.com";
    const password =
      username.toLowerCase().split(" ").join("") + "facebookLogin123";
    const users = await pool.query("SELECT * FROM users WHERE email=?", [
      email,
    ]);
    const user = users[0];

    if (users.length === 0) {
      const first_name = username.split(" ")[0];
      const last_name = username.split(" ")[1];
      const dob = "2001-01-01";
      const gender = "male";

      //hash password
      const salt = await bcryptjs.genSalt(10);
      const hashedPassword = await bcryptjs.hash(password, salt);

      const savedUser = await pool.query(
        "INSERT INTO users (first_name,last_name,email, password,dob,gender,avatar) VALUES (?, ?,?,?,?,?,?)",
        [first_name, last_name, email, hashedPassword, dob, gender, avatar]
      );
      /*API CALL TO RE-Train the User Recommendation ML Model on each user registration */
      axios.get("https://ml.amicolo.com/api1");

      return NextResponse.json({
        message: "User logged in successfully",
        success: true,
        savedUser,
      });
    }
    // Check if password is correct
    const validPassword = await bcryptjs.compare(password, user.password);

    if (!validPassword) {
      return NextResponse.json({ error: "Cannot Login User" }, { status: 400 });
    }

    // Create token data
    const tokenData = {
      id: user.id,
      username: user.username,
      email: user.email,
    };

    // Create token
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {
      expiresIn: "1d",
    });
    // Set the response

    const response = NextResponse.json({
      message: "Login successful",
      success: true,
      user: users,
    });

    // Set the token in a cookie
    response.cookies.set("token", token, {
      httpOnly: true,
    });

    return response;
  } catch (err) {
    console.log(err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
