import { getDataFromToken } from "@/helper/getDataFromToken";
import { NextResponse } from "next/server";
import { pool } from "@/dbConfig/dbConfig";

export async function POST(req){
    try{
        const userId = await getDataFromToken(req);

        const reqBody = await req.json();
        const { recommended_user_ids } = reqBody;
        console.log(recommended_user_ids);

        // const data = await pool.query("SELECT * FROM users WHERE id != ?", [userId]);


        /* new api to fetch using ML ALGO */
        const data = await pool.query("SELECT * FROM users WHERE id in (?)",[recommended_user_ids]);

        console.log(data);
        return NextResponse.json({data}, {status:200});
        

    }
    catch(error){
        console.log(error);
        return NextResponse.json({error: error.message}, {status: 500});
    }
}