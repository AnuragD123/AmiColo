import { pool } from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req) {

    try {
        // Get request body
        const reqBody = await req.json();
        const { email, password } = reqBody;

        console.log(email, password)
        // return NextResponse.json({ msg: 'chalra' }, { status: 200 });


        const users = await pool.query("SELECT * FROM users WHERE email=?", [email]);
        console.log(users);

        const user = users[0];

        if (users.length === 0) {
            console.log("empty")
            return NextResponse.json({ error: 'User does not exist' }, { status: 400 });
        }

        // Check if password is correct
        const validPassword = await bcryptjs.compare(password, user.password);

        if (validPassword) {

            return NextResponse.json({ error: 'Invalid password' }, { status: 400 });
        }

        // Create token data
        const tokenData = {
            id: user.id,
            username: user.username,
            email: user.email,
        };

        // Create token
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, { expiresIn: '1d' });

        // Set the response
        const response = NextResponse.json({
            message: 'Login successful',
            success: true,
        });

        // Set the token in a cookie
        response.cookies.set('token', token, {
            httpOnly: true,
        });

        return response;

    } catch (err) {
        console.log(err.message);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }

}