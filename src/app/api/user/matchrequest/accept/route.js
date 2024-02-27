import { getDataFromToken } from "@/helper/getDataFromToken";
import { NextResponse } from "next/server";
import { pool } from "@/dbConfig/dbConfig";

export async function POST(req) {
    try {

        const reqBody = await req.json();
        const { from_id } = reqBody;

        const currentUser = getDataFromToken(req);
        const insertMatchesQuery = 'INSERT INTO matches(user1, user2) VALUES (?, ?), (?, ?)';
        const insertMatchesData = [from_id, currentUser, currentUser, from_id];

        const updateQuery = 'UPDATE match_request SET status = ? WHERE from_id = ? AND to_id = ?';
        const updateData = ['accepted', from_id, currentUser];

        const insertMatchesResult = await pool.query(insertMatchesQuery, insertMatchesData);
        if (insertMatchesResult && insertMatchesResult.affectedRows > 0) {
            // Execute the update query
            const updateResult = await pool.query(updateQuery, updateData);
            console.log('Update Request Result:', updateResult);
        } else {
            console.log('Insert Matches Query was not successful.');
        }
  
        return NextResponse.json({ status: "success"}, { status: 200 });


    }
    catch (error) {
        console.log(error.message);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}