import { getDataFromToken } from "@/helper/getDataFromToken";
import { NextResponse } from "next/server";
import { pool } from "@/dbConfig/dbConfig";

export async function POST(req) {
    try {
        // Get request body
        const reqBody = await req.json();
        const { to_user_id } = reqBody;


        console.log(to_user_id)

        const current_user_id = getDataFromToken(req);

        // Check if there is an existing match request
        const existingRequest = await pool.query(
            "SELECT * FROM match_request WHERE from_id = ? AND to_id = ?",
            [current_user_id, to_user_id]
        );

        if (existingRequest.length === 0) {
            // If there is no existing match request, proceed to insert a new one
            const data = await pool.query(
                "INSERT INTO match_request(from_id, to_id) VALUES (?, ?)",
                [current_user_id, to_user_id]
            );

            
            
            console.log('Match request sent!', data.rows);
            return NextResponse.json({ status:"success",msg:'Match request sent!' });
        } else {
            // If there is an existing match request, handle it accordingly
            console.log('There is already an existing match request between these users.');
            // You can send an appropriate response or perform additional action
            return NextResponse.json({ status:"failed",msg: "request aleady sent" }, { status: 200 });
        }






  



    }
    catch (error) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}