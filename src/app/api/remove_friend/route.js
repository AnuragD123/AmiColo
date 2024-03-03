import { getDataFromToken } from "@/helper/getDataFromToken";
import { NextResponse } from "next/server";
import { pool } from "@/dbConfig/dbConfig";

export async function DELETE(req) {
    const { userId2 } = req.body;
    console.log(req)
    try {
        const userId1 = await getDataFromToken(req);
        if (!userId1) {
            const data = await pool.query(
                "DELETE FROM matches WHERE user1 = ?",
                [userId2]
            );
            return NextResponse.json({ data }, { status: 200 });
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
