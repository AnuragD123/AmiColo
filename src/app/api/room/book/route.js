import { getDataFromToken } from "@/helper/getDataFromToken";
import { NextResponse } from "next/server";
import { pool } from "@/dbConfig/dbConfig";
import axios from "axios";

export async function POST(req) {
    try {
        const reqBody = await req.json();
        const { id } = reqBody;
        console.log("booking req id=", id);

        const currentUserId = await getDataFromToken(req);

        const data = await pool.query(
            'UPDATE amicolo.booking_request SET status = "completed" WHERE booking_req_id = ?;',
            [id]
        );


        if (data.changedRows == 1) {

            const emaildata = await pool.query(`
            SELECT u.email as other_email, user1.email as main_user_email , r.price FROM match_invitation mi INNER JOIN booking_request br ON mi.booking_req_id = br.booking_req_id INNER JOIN users u ON mi.user_id = u.id INNER JOIN users user1 ON br.user_id = user1.id INNER JOIN rooms r on br.room_id = r.id WHERE user1.id = ?;
            `, [currentUserId]);

            const num = emaildata.length ;
            console.log("size=",num)
            if (num == 0) {
                const current_user_email = await pool.query(`SELECT u.email, r.price FROM booking_request br INNER JOIN users u ON br.user_id=u.id INNER JOIN rooms r ON br.room_id = r.id WHERE br.user_id=?;`, [currentUserId]);

                const email = current_user_email[0].email;
                const room_price = current_user_email[0].price;
                console.log("email=",email)
                console.log("price=",room_price)

                const others =[];

                const mailResult = await axios.post('https://amicolo.com/api/sendMail', { mainUserEmail:email, otherEmails:others, price:room_price })





            } else {
                const mainUserEmail = emaildata[0].main_user_email;
                const otherEmails = emaildata.map(row => row.other_email);
                const price = emaildata[0].price / (num + 1);

               
                console.log('total=', num);

                console.log("price=", price)
                console.log("main email=", mainUserEmail)
                console.log("otherEmails=", otherEmails)

                const mailResult = await axios.post('https://amicolo.com/api/sendMail', { mainUserEmail, otherEmails, price })

            }
            // Extract emails from the query result


            return NextResponse.json({ status: "success", emaildata, msg: "Your Room has been booked Successfully!" }, { status: 200 });
        } else {
            return NextResponse.json({ status: "failed", data, msg: "Room Already Booked By You" }, { status: 200 });
        }
    } catch (error) {
        // console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
