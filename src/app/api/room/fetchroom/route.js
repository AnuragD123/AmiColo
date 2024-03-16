import { getDataFromToken } from "@/helper/getDataFromToken";
import { NextResponse } from "next/server";
import { pool } from "@/dbConfig/dbConfig";

export async function GET(req) {
  try {
    // check if user is logged in
    const currentUserId = await getDataFromToken(req);
    var data = null;
    if (currentUserId == null) {
      data = await pool.query("SELECT * FROM amicolo.rooms;");
    } else {
      // bring all the bookmarked rooms of this user and add a feild isBookmarked to the rooms
      data = await pool.query("SELECT * FROM amicolo.rooms;");
      const bookmarkedRooms = await pool.query(
        "SELECT room_id FROM amicolo.bookmarks WHERE user_id = ?;",
        [currentUserId]
      );
      data = data.map((room) => {
        if (bookmarkedRooms.some((bookmark) => bookmark.room_id === room.id)) {
          room.isBookmarked = true;
        } else {
          room.isBookmarked = false;
        }
        return room;
      });
    }

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
