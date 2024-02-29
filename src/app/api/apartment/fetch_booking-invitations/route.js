import { getDataFromToken } from "@/helper/getDataFromToken";
import { NextResponse } from "next/server";
import { pool } from "@/dbConfig/dbConfig";

export async function GET(req) {
    try {

        const currentUser = getDataFromToken(req);

        const SQL = "SELECT invitedby.first_name as invitedby_first_name,invitedby.last_name as invitedby_last_name, br.user_id AS invited_byID, mi.*, invited_user.first_name AS invited_user_name, r.* FROM users invitedby INNER JOIN booking_request br ON invitedby.id = br.user_id INNER JOIN match_invitation mi ON br.booking_req_id = mi.booking_req_id INNER JOIN users invited_user ON invited_user.id = mi.user_id INNER JOIN rooms r on br.room_id=r.room_id WHERE mi.user_id = ?;" 
    
        const booking_requests = await pool.query(SQL,[currentUser]);
  
        return NextResponse.json({ status: "success", booking_requests}, { status: 200 });


    }
    catch (error) {
        console.log(error.message);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}