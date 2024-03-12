import { getDataFromToken } from "@/helper/getDataFromToken";
import { NextResponse } from "next/server";
import { pool } from "@/dbConfig/dbConfig";

export async function POST(req) {
    try {
        const reqBody = await req.json();
        const { id } = reqBody;

        const data = await pool.query(
            'UPDATE amicolo.booking_request SET status = "completed" WHERE booking_req_id = ?;',
            [id]
        );
            
        if (data.changedRows > 0) {
            // Rows were updated

            return NextResponse.json({ status:"success",data,msg:"Your Room has been booked Successfully!" }, { status: 200 });
        }else{
            return NextResponse.json({ status:"failed",data,msg:"Room Already Booked By You" }, { status: 200 });
        }
    } catch (error) {
        // console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
