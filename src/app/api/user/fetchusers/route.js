import { getDataFromToken } from "@/helper/getDataFromToken";
import { NextResponse } from "next/server";
import { pool } from "@/dbConfig/dbConfig";

export async function GET(req){
    try{
        const userId = await getDataFromToken(req);

        const data = await pool.query("SELECT * FROM users WHERE id != ?", [userId]);

        console.log(data);
        return NextResponse.json({data}, {status:200});
        

    }
    catch(error){
        console.log(error);
        return NextResponse.json({error: error.message}, {status: 500});
    }
}