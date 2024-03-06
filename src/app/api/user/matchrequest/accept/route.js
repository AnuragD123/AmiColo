import { getDataFromToken } from "@/helper/getDataFromToken";
import { NextResponse } from "next/server";
import { pool } from "@/dbConfig/dbConfig";

export async function POST(req) {
    try {

        const reqBody = await req.json();
        const { from_id } = reqBody;

        const currentUser = getDataFromToken(req);
        const matchUserFind = await pool.query("SELECT * FROM matches WHERE (user1=? AND user2=?) OR (user2=? AND user1=?)", [from_id, currentUser, currentUser, from_id]);
        if (matchUserFind && matchUserFind.length === 0) {
            const insertMatchesQuery = 'INSERT INTO matches(user1, user2) VALUES (?, ?)';
            const insertMatchesData = [from_id, currentUser];
            const updateQuery = 'UPDATE match_request SET status = ? WHERE from_id = ? AND to_id = ?';
            const updateData = ['accepted', from_id, currentUser];
            const insertMatchesResult = await pool.query(insertMatchesQuery, insertMatchesData);
            if (insertMatchesResult && insertMatchesResult.affectedRows > 0) {
                const updateResult = await pool.query(updateQuery, updateData);
                console.log('Update Request Result:', updateResult);
            } else {
                console.log('Insert Matches Query was not successful.');
            }
        }

        return NextResponse.json({ status: "success" }, { status: 200 });

    }
    catch (error) {
        console.log("test9")
        console.log(error.message);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}