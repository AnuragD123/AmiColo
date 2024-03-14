import { getDataFromToken } from "@/helper/getDataFromToken";
import { NextResponse } from "next/server";
import { pool } from "@/dbConfig/dbConfig";

export async function GET(req) {
    try {
        const currentUser = await getDataFromToken(req);

        const roomData = await pool.query(
            'SELECT * FROM booking_request b INNER JOIN rooms r ON b.room_id = r.id WHERE b.user_id = ? and status="pending";',
            [currentUser]
        );

        return NextResponse.json({ data: roomData }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

