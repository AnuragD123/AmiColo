import { getDataFromToken } from "@/helper/getDataFromToken";
import { NextResponse } from "next/server";
import { pool } from "@/dbConfig/dbConfig";

export async function GET(req) {
  try {
    const userId = await getDataFromToken(req);
    const data = await pool.query(
      `SELECT * FROM booking_request INNER JOIN rooms ON booking_request.room_id = rooms.id WHERE booking_request.user_id = ? AND booking_request.status = 'completed'`,
      [userId]
    );
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
