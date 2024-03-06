import { getDataFromToken } from "@/helper/getDataFromToken";
import { NextResponse } from "next/server";
import { pool } from "@/dbConfig/dbConfig";

export async function POST(req) {
    try {
        const userId1 = await getDataFromToken(req);
        if (userId1) {
            // User is authenticated, proceed with deleting the match
            const reqBody  = await req.json();
            const { userId2, } = reqBody
            const deletionResult = await pool.query(
                "DELETE FROM matches WHERE user1 = ? AND user2 = ?",
                [userId1, userId2]
            );
            if (deletionResult.affectedRows > 0) {
                return NextResponse.json(
                    { message: "Match deleted successfully" },
                    { status: 200 }
                );
            } else {
                return NextResponse.json(
                    { error: "No match found for deletion" },
                    { status: 404 }
                );
            }
        } else {
            // User is not authenticated, return unauthorized error
            return NextResponse.json(
                { error: "Unauthorized access" },
                { status: 401 }
            );
        }
    } catch (error) {
        console.error("Error deleting match:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
