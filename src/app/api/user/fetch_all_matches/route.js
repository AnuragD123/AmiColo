import { getDataFromToken } from "@/helper/getDataFromToken";
import { NextResponse } from "next/server";
import { pool } from "@/dbConfig/dbConfig";

export async function GET(req) {
    try {

        const currentUser = getDataFromToken(req);
    
        const matches = await pool.query("SELECT * FROM users u INNER JOIN matches m on m.user2=u.id WHERE user1=? and status='active';",[currentUser]);

        return NextResponse.json({ status: "success", matches}, { status: 200 });


    }
    catch (error) {
        console.log(error.message);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}