import { getDataFromToken } from "@/helper/getDataFromToken";
import { NextResponse } from "next/server";
import { pool } from "@/dbConfig/dbConfig";

export async function GET(req) {
    try {
        const currentUser = await getDataFromToken(req);

        const data = await pool.query(
            'SELECT users.id,users.first_name,users.last_name ,users.email,users.gender,users.dob, match_request.req_id,match_request.from_id,match_request.status FROM users INNER JOIN match_request ON users.id = match_request.from_id WHERE match_request.to_id = ? AND match_request.status = "pending"',
            [currentUser]
        );

        return NextResponse.json({ data }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
