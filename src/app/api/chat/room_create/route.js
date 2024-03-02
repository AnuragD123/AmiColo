import { pool } from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        // Get request body
        const reqBody = await req.json();
        const { user_1, user_2 } = reqBody;

        const roomFind = await pool.query("SELECT * FROM chatroom WHERE (user1_id = ? AND user2_id = ?) OR (user1_id = ? AND user2_id = ?)", [user_1, user_2, user_2, user_1]);
        if (roomFind.length == 0) {
            const createRoom = await pool.query("INSERT INTO chatroom (user1_id, user2_id) VALUES (?, ?)", [user_1, user_2]);
            return NextResponse.json({
                message: "Room created successfully",
                success: true,
                roomFind: createRoom
            })
        }
        return NextResponse.json({
            message: "Room created Already",
            success: true,
            roomFind
        })

    } catch (err) {
        console.log(err.message);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }

}