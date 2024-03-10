import { getDataFromToken } from "@/helper/getDataFromToken";
import { NextResponse } from "next/server";
import { pool } from "@/dbConfig/dbConfig";

export async function POST(req) {
    try {
        const reqBody = await req.json();
        const { id } = reqBody;
        console.log("**********id ",id);
        const data = await pool.query(
            'DELETE FROM amicolo.match_invitation WHERE invitation_id = ?;',
            [id]
        );

        return NextResponse.json({ status:'success',msg:"Cancelled Invitation" }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ status:'failed',msg:"Cannot cancel Invitation"}, { status: 500 });
    }
}
