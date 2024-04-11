import { NextResponse } from "next/server";
import { pool } from "@/dbConfig/dbConfig";

export async function POST(req) {
  try {
    const reqBody = await req.json();
    const { booking_req_id } = reqBody;

    const usersData = await pool.query(
      `SELECT u.first_name , u.avatar,u.last_name , u.email , m.invitation_id, m.status AS invitation_status FROM booking_request b INNER JOIN match_invitation m ON b.booking_req_id = m.booking_req_id INNER JOIN users u ON m.user_id = u.id WHERE m.booking_req_id = ? AND (m.status = 'pending' OR m.status = 'accepted');`,
      [booking_req_id]
    );

    return NextResponse.json({ data: usersData }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
