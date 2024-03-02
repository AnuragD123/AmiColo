import { pool } from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        // Get request body
        const reqBody = await req.json();
        const {
            room,
            message,
            sender,
            reciver,
        } = reqBody;

        const roomFind = await pool.query("SELECT * FROM chatroom WHERE (user1_id = ? AND user2_id = ?) OR (user1_id = ? AND user2_id = ?)", [sender.id, reciver.id, reciver.id, sender.id]);
        if (roomFind.length > 0) {
            const sendMessage = await pool.query("INSERT INTO chat (roomId, message,senderId,receiverId) VALUES (?, ?, ?, ?)", [room, message, sender.id, reciver.id]);
            return NextResponse.json({
                message: "message send successfully",
                success: true,
                roomFind: sendMessage
            })
        } else {
            return NextResponse.json({
                message: "Room Not Found",
                success: true,
                sendMessage
            })
        }


    } catch (err) {
        console.log(err.message);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }

}
