import { getDataFromToken } from "@/helper/getDataFromToken";
import { NextResponse } from "next/server";
import { pool } from "@/dbConfig/dbConfig";

export async function POST(req) {
    try {
        const userId1 = await getDataFromToken(req);
        const reqBody = await req.json();
        const { userId2 } = reqBody;

        // Insert a new row into the matches table with userId1 and userId2
        const data = await pool.query(
            "INSERT INTO matches (user1, user2) VALUES (?, ?)",
            [userId1, userId2]
        );

        return NextResponse.json({ data }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
