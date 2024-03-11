import { NextResponse } from "next/server";
import { pool } from "@/dbConfig/dbConfig";

export async function GET(req) {
  try {
    // Check if room_id is in the URL query string
    const url = new URL(req.url);
    const room_id = url.searchParams.get("room_id");

    // If room_id is not provided in the query string, return an error
    if (!room_id) {
      return NextResponse.json({ error: "Missing room_id parameter" }, { status: 400 });
    }

    // Check if there is an existing match request
    const room_data = await pool.query(
      "SELECT * FROM rooms WHERE id = ?",
      [room_id]
    );
    console.log("*************", room_data);

    return NextResponse.json({ status: "success",room_data, msg: "data fetched" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
