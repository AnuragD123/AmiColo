import { getDataFromToken } from "@/helper/getDataFromToken";
import { NextResponse } from "next/server";
// import { pool } from "@/dbConfig/dbConfig";
const Mailjet = require('node-mailjet');


export async function POST(req) {
    try {
        const reqBody = await req.json();
        const { mainUserEmail, otherEmails, price } = reqBody;

        const name = 'AmiColo User';
        otherEmails.push(mainUserEmail);

        const emails = otherEmails.map(email => ({
            Email: email,
            Name: name,
        }));

        const formatDate = () => {
            const date = new Date();
            const options = { day: '2-digit', month: 'long', year: 'numeric' };
            return date.toLocaleDateString('en-US', options);
        };

        const formattedDate = formatDate();
        console.log(formattedDate);

        const formatTime = () => {
            const dateTime = new Date();

            const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };

            return dateTime.toLocaleTimeString('en-US', timeOptions);
        };

        const formattedTime = formatTime();
        console.log(formattedTime);



        const formatDueDate = () => {
            const currentDate = new Date();
            const dueDate = new Date(currentDate);
            dueDate.setDate(currentDate.getDate() + 3); // Adding three days to the current date

            const options = { day: '2-digit', month: 'long', year: 'numeric' };
            return dueDate.toLocaleDateString('en-US', options);
        };


        function generateBookingId(length) {
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let bookingId = '';
          
            for (let i = 0; i < length; i++) {
              const randomIndex = Math.floor(Math.random() * characters.length);
              bookingId += characters.charAt(randomIndex);
            }
          
            return bookingId;
          }


          const bookingID = generateBookingId(6);

        const formattedDueDate = formatDueDate();


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
                            Email: "booking@amicolo.com",
                            Name: "AmiColo"
                        },
                        To: emails,
                        Subject: " Booking Confirmation Email",
                        TextPart: "",
                        // HTMLPart: "Dear"+name+", your booking has been confirmed and your share is:$"+price
                        HTMLPart: `
              <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Booking Confirmation</title>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                        }
                        .container {
                            max-width: 600px;
                            margin: 0 auto;
                            padding: 20px;
                            border: 1px solid #ccc;
                            border-radius: 5px;
                        }
                        .header {
                            background-color: #007bff;
                            color: #fff;
                            padding: 10px;
                            text-align: center;
                            border-radius: 5px 5px 0 0;
                        }
                        .content {
                            padding: 20px;
                        }
                        .footer {
                            background-color: #f0f0f0;
                            padding: 10px;
                            text-align: center;
                            border-radius: 0 0 5px 5px;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h1>Booking Confirmation</h1>
                        </div>
                        <div class="content">
                            <p>Dear ${name},</p>
                            <p>We are delighted to confirm your booking. Below are the details:</p>
                            <ul>
                                
                                <li><strong>Booking ID:</strong> ${bookingID}</li>
                                <li><strong>Date:</strong> ${formattedDate}</li>
                                <li><strong>Time:</strong> ${formattedTime}</li>
                              
                            </ul>
                            <p><strong>Payment Information:</strong></p>
                            <p>Please make the payment of [Amount Due] to the following account:</p>
                            <p>Account Name: Amicolo ADMIN</p>
                            <p>Account Number: 899223898292</p>
                            <p>Bank Name: [Bank Name]</p>
                            <p>Amount Due: ${price}</p>
                            <p>Due Date: ${formattedDueDate}</p>
                            <div className="py-4">
                            <p className="text-base">
                              Thank you for choosing our services. Should you have any questions, feel free to contact us.
                            </p>
                            <p className="text-red-500 font-bold">
                              <span className="font-bold">Note:</span> Please do not make any payments as this is a dummy booking as AmiColo services are not live yet. Please do not plan anything based on this booking. If there are any kinds of losses faced by the customer based on this booking, the customer is solely responsible for it.
                            </p>
                          </div>
                        </div>
                        <div class="footer">
                            <p>Best Regards,<br>Team AmiColo</p>
                        </div>
                    </div>
                </body>
                </html>              
              `
                    }
                ]
            })

        return NextResponse.json({ message: "Mail Sent Successfully", response: request }, { status: 200 })
    } catch (error) {
        // console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
