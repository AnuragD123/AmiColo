import { getDataFromToken } from "@/helper/getDataFromToken";
import { NextResponse } from "next/server";
import { pool } from "@/dbConfig/dbConfig";

export async function POST(req) {
  try {
    const reqBody = await req.json();
    const { room_id } = reqBody;

    const currentUserId = await getDataFromToken(req);

    const data = await pool.query(
      "INSERT IGNORE INTO amicolo.bookmarks (room_id, user_id) VALUES (?, ?);",
      [room_id, currentUserId]
    );

    return NextResponse.json({ message: "Room bookmarked" }, { status: 200 });
  } catch (error) {
    // console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET(req) {
  try {
    const currentUserId = await getDataFromToken(req);

    const data = await pool.query(
      "SELECT r.* FROM amicolo.rooms r INNER JOIN amicolo.bookmarks b ON r.id = b.room_id WHERE b.user_id = ?;",
      [currentUserId]
    );

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    const reqBody = await req.json();
    const { room_id } = reqBody;

    const currentUserId = await getDataFromToken(req);

    const data = await pool.query(
      "DELETE FROM amicolo.bookmarks WHERE room_id = ? AND user_id = ?;",
      [room_id, currentUserId]
    );

    if (data.affectedRows == 1) {
      return NextResponse.json(
        { message: "Room unbookmarked" },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: "Room not unbookmarked" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
