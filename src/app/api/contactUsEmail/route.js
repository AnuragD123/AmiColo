import { getDataFromToken } from "@/helper/getDataFromToken";
import { NextResponse } from "next/server";

const Mailjet = require('node-mailjet');


export async function POST(req) {
  try {
    const reqBody = await req.json();
    const { formData } = reqBody;
    console.log("BODY DATA", reqBody)
    const name = 'AmiColo User';

    const emails = [{
      Email: formData.email,
      Name: name,
    }];

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
              Email: "noreply@amicolo.com",
              Name: "Next testing"
            },
            To: emails,
            // To: "support@amicolo.com",
            Subject: formData.heading,
            TextPart: "",
            HTMLPart: formData?.type == "contact" ? `
              <!DOCTYPE html>
              <html lang="en">
                <head>
                  <meta charset="UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <title>Contact Us</title>
                  <style>
                    /* Your styles here */
                  </style>
                </head>
                <body>
                  <div class="container">
                    <div class="header">
                      <h1>${formData.heading}</h1>
                    </div>
                    <div class="content">
                      <p>Dear ${formData.firstName} ${formData.lastName},</p>
                      <p>Our team work on your query we will connect you soon:</p>
                      <p>Email: ${formData.userEmail}</p>
                      <p>Number: ${formData.phoneNumber}</p>
                      <p>Messages: ${formData.message}</p>
                      <p>Thank you for choosing our services. Should you have any questions, feel free to contact us.</p>
                    </div>
                    <div class="footer">
                      <p>Best Regards,<br>Team AmiColo</p>
                    </div>
                  </div>
                </body>
              </html>
            `:
              `
            <!DOCTYPE html>
            <html lang="en">
              <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Report</title>
                <style>
                  /* Your styles here */
                </style>
              </head>
              <body>
                <div class="container">
                  <div class="header">
                    <h1>${formData.heading}</h1>
                  </div>
                  <div class="content">
                    <p>Dear ${formData.firstName} ${formData.lastName},</p>
                    <p>Our team will work on your query: ${formData.message}. We will connect with you soon.</p>

                    <p>Thank you for choosing our services. Should you have any questions, feel free to contact us.</p>
                  </div>
                  <div class="footer">
                    <p>Best Regards,<br>Team AmiColo <br>support@amicolo.com</p>
                  </div>
                </div>
              </body>
            </html>
          `
          }
        ]
      })

    return NextResponse.json({ message: "Mail Sent Successfully", response: request, ApiRes: true }, { status: 200 })
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}