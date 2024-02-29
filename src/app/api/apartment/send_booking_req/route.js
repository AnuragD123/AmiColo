import { getDataFromToken } from "@/helper/getDataFromToken";
import { NextResponse } from "next/server";
import { pool } from "@/dbConfig/dbConfig";

export async function POST(req) {
    try {
        // Get request body
        const reqBody = await req.json();
        const { room_id } = reqBody;
        const {selectedMatchIds} =reqBody;


        console.log(room_id);
        console.log(selectedMatchIds);


        const current_user_id = getDataFromToken(req);

        // Check if there is an existing match request
        const existingRequest = await pool.query(
            "SELECT * FROM booking_request WHERE user_id = ? AND room_id = ?",
            [current_user_id, room_id]
        );

        if (existingRequest.length === 0) {
            // If there is no existing match request, proceed to insert a new one
            const data = await pool.query(
                "INSERT INTO booking_request(user_id, room_id) VALUES (?, ?)",
                [current_user_id, room_id]
            );
            
            const bookingReqId = data.insertId; 
            console.log("bookingReq_ID =",bookingReqId);
            
            // Iterate through the array and insert rows into match_invitation table
            for (const userId of selectedMatchIds) {
                await pool.query(
                    "INSERT INTO match_invitation(booking_req_id, user_id) VALUES (?, ?)",
                    [bookingReqId, userId]
                );
            }
 
            console.log('Booking Request Sent!', data.rows);
            return NextResponse.json({ status:"success",msg:'Match request sent!' });
        } else {
            // If there is an existing match request, handle it accordingly
            console.log('There is already a Booking Req from you for this apartment');
            // You can send an appropriate response or perform additional action
            return NextResponse.json({ status:"failed",msg: "request aleady sent" }, { status: 200 });
        }






  



    }
    catch (error) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}