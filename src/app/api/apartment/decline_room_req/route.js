import { NextResponse } from "next/server";
import { pool } from "@/dbConfig/dbConfig";

export async function POST(req) {
    try {
        // Get request body
        const reqBody = await req.json();
        const { invitation_id } = reqBody;
        console.log("\n\n\n**************body\n\n", reqBody)


        // Check if there is an existing match request
        const result = await pool.query(
            "UPDATE match_invitation set status='declined' where invitation_id=?",
            [invitation_id]
        );
        console.log("\n\n\n**************\n\n", invitation_id)
        if (result.changedRows > 0) {
            // Rows were updated
            return NextResponse.json({ status: "success", msg: 'declined!' });

        } else {
            // No rows were updated
            return NextResponse.json({ status: "failed", msg: 'Cannot decline request!' });

        }


    }
    catch (error) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}