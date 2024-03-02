import { pool } from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        // Get request body
        const reqBody = await req.json();
        const {
            senderId,
            receiverId,
        } = reqBody;
        console.log("Send", senderId, receiverId)
        const Chatfind = await pool.query("SELECT * FROM chat WHERE (senderId = ? AND receiverId = ?) OR (senderId = ? AND receiverId = ?)", [senderId, receiverId, receiverId, senderId]);
        return NextResponse.json({
            message: "message get successfully",
            success: true,
            Chat: Chatfind
        })


    } catch (err) {
        console.log(err.message);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }

}