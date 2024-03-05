import { getDataFromToken } from "@/helper/getDataFromToken";
import { NextResponse } from "next/server";
import { pool } from "@/dbConfig/dbConfig";

export async function POST(req) {
    try {

        const reqBody = await req.json();
        const { from_id } = reqBody;

        const currentUser = getDataFromToken(req);
        console.log("test1")
        const insertMatchesQuery = 'INSERT INTO matches(user1, user2) VALUES (?, ?), (?, ?)';
        const insertMatchesData = [from_id, currentUser, currentUser, from_id];
        console.log("test2")
        const updateQuery = 'UPDATE match_request SET status = ? WHERE from_id = ? AND to_id = ?';
        const updateData = ['accepted', from_id, currentUser];
        console.log("test3")
        const insertMatchesResult = await pool.query(insertMatchesQuery, insertMatchesData);
        console.log("test4")
        if (insertMatchesResult && insertMatchesResult.affectedRows > 0) {
            console.log("test5")
            // Execute the update query
            const updateResult = await pool.query(updateQuery, updateData);
            console.log('Update Request Result:', updateResult);
        } else {
            console.log("test6")
            console.log('Insert Matches Query was not successful.');
        }
        console.log("test7")
        return NextResponse.json({ status: "success"}, { status: 200 });
        console.log("test8")

    }
    catch (error) {
        console.log("test9")
        console.log(error.message);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}