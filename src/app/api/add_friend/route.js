import { getDataFromToken } from "@/helper/getDataFromToken";
import { NextResponse } from "next/server";
import { pool } from "@/dbConfig/dbConfig";

export async function POST(req){
    try{
        const userId = await getDataFromToken(req);
        const data = await pool.query("ALTER TABLE matches ALTER COLUMN WHERE user1 === ?", [userId]);
        return NextResponse.json({data}, {status:200});
    }
    catch(error){
        console.log(error);
        return NextResponse.json({error: error.message}, {status: 500});
    }
}