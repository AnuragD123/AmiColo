import { getDataFromToken } from "@/helper/getDataFromToken";
import { NextResponse } from "next/server";
// import { pool } from "@/dbConfig/dbConfig";
const Mailjet = require('node-mailjet');


export async function POST(req) {
    try {
        const reqBody = await req.json();
        const { mainUserEmail,otherEmails,price } = reqBody;

        const name = 'AmiColo User';
        otherEmails.push(mainUserEmail);

        const emails = otherEmails.map(email => ({
        Email: email,
        Name: name,
        }));


        const mailjet = Mailjet.apiConnect(
            "f3366977b75195573f95b1d43939fc6c",
            "729f795c0f09fe6ddd72ecf6cd6b1683",
        );
          
        const request = mailjet
        .post('send', { version: 'v3.1' })
        .request({
          Messages: [
            {
              From: {
                Email: "ami.colo.mtl@gmail.com",
                Name: "Next testing"
              },
              To: emails,
              Subject: " Booking Confirmation Email",
              TextPart: "",
              HTMLPart: "Dear"+name+", your booking has been confirmed and your share is:$"+price
            }
          ]
        })
    
        return NextResponse.json({message:"Mail Sent Successfully",response:request}, {status:200})
    } catch (error) {
        // console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
