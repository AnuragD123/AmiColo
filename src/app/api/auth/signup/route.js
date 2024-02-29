import { pool } from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
// import { sendEmail } from "@/helpers/mailer";


export async function POST(req) {
    try {
        const reqBody = await req.json()
        const { email, password } = reqBody

        console.log(reqBody);

        //check if user already exists
        const users = await pool.query("SELECT * FROM users WHERE email=?", { email });
        console.log("USER", users);
        if (users.length === 1) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 })
        }

        //hash password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)



        const savedUser = await pool.query("INSERT INTO users (email, password) VALUES (?, ?)", [email, hashedPassword]);

        console.log(savedUser);

        //send verification email

        // await sendEmail({email, emailType: "VERIFY", userId: savedUser._id})

        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser
        })




    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 })

    }
}