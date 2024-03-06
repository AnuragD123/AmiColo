import { getDataFromToken } from "@/helper/getDataFromToken";
import { NextResponse } from "next/server";
import { pool } from "@/dbConfig/dbConfig";

export async function POST(req) {
    try {
        const reqBody = await req.json();
        const { from_id } = reqBody;
        const currentUser = getDataFromToken(req);
        
        // Update query to mark the request as declined
        const updateQuery = 'UPDATE match_request SET status = ? WHERE from_id = ? AND to_id = ?';
        const updateData = ['declined', from_id, currentUser];

        // Execute the update query
        const updateResult = await pool.query(updateQuery, updateData);
        
        if (updateResult && updateResult.affectedRows > 0) {
            console.log('Friend request declined successfully.');
            return NextResponse.json({ status: "success" }, { status: 200 });
        } else {
            console.log('Failed to decline friend request.');
            return NextResponse.json({ error: 'Failed to decline friend request.' }, { status: 500 });
        }
    } catch (error) {
        console.log(error.message);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
