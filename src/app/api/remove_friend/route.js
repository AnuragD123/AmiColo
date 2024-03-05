import { getDataFromToken } from "@/helper/getDataFromToken";
import { NextResponse } from "next/server";
import { pool } from "@/dbConfig/dbConfig";

export async function POST(req) {
    try {
        const userId1 = await getDataFromToken(req);
        console.log("test1");
        if (userId1) {
            // User is authenticated, proceed with deleting the match
            const reqBody  = await req.json();
            const { userId2, } = reqBody
            console.log(userId2)
            console.log(userId1)
            console.log("test2");
            const deletionResult = await pool.query(
                "DELETE FROM matches WHERE user1 = ? AND user2 = ?",
                [userId1, userId2]
            );
            console.log("test3");
            if (deletionResult.affectedRows > 0) {
                console.log("test4");
                return NextResponse.json(
                    { message: "Match deleted successfully" },
                    { status: 200 }
                );
            } else {
                console.log("test5");
                return NextResponse.json(
                    { error: "No match found for deletion" },
                    { status: 404 }
                );
            }
        } else {
            console.log("test6");
            // User is not authenticated, return unauthorized error
            return NextResponse.json(
                { error: "Unauthorized access" },
                { status: 401 }
            );
        }
    } catch (error) {
        console.log("test7");
        console.error("Error deleting match:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
