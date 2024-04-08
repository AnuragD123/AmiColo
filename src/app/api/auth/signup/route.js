import { pool } from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import axios from "axios";
// import { sendEmail } from "@/helpers/mailer";

export async function POST(req) {
  try {
    const reqBody = await req.json();
    const { first_name, last_name, dob, email, password, gender } = reqBody;

    console.log(reqBody);

    //check if user already exists
    const users = await pool.query("SELECT * FROM users WHERE email=?", {
      email,
    });
    console.log("USER", users);
    if (users.length === 1) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    //hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const savedUser = await pool.query(
      "INSERT INTO users (first_name,last_name,email, password,dob,gender) VALUES (?, ?,?,?,?,?)",
      [first_name, last_name, email, hashedPassword, dob, gender]
    );

    // make the user login after registration
    // Create token data
    const tokenData = {
      id: savedUser.insertId,
      email: savedUser.email,
      username: savedUser.username,
    };

    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {
      expiresIn: "1d",
    });

    /*API CALL TO RE-Train the User Recommendation ML Model on each user registration */
    axios.get("https://ml.amicolo.com/api1");

    const response = NextResponse.json({
      message: "User created successfully",
      success: true,
      savedUser,
    });

    response.cookies.set("token", token, {
      httpOnly: true,
    });
    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
