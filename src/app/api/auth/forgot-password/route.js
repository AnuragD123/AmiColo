import { NextResponse } from "next/server";
const Mailjet = require("node-mailjet");
import { pool } from "@/dbConfig/dbConfig";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {
    const reqBody = await req.json();
    const { email } = reqBody;

    const users = await pool.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);

    if (users?.length === 0) {
      return NextResponse.json(
        { message: "User with this email does not exist" },
        { status: 404 }
      );
    }

    const tokenData = {
      email: email,
      id: users?.[0]?.id,
    };

    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {
      expiresIn: "1hr",
    });

    const name = users?.[0]?.first_name + " " + users?.[0]?.last_name;

    const formatDate = () => {
      const date = new Date();
      const options = { day: "2-digit", month: "long", year: "numeric" };
      return date.toLocaleDateString("en-US", options);
    };

    const formattedDate = formatDate();
    const formatTime = () => {
      const dateTime = new Date();

      const timeOptions = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };

      return dateTime.toLocaleTimeString("en-US", timeOptions);
    };

    const formattedTime = formatTime();

    const formatDueDate = () => {
      const currentDate = new Date();
      const dueDate = new Date(currentDate);
      dueDate.setDate(currentDate.getDate() + 3); // Adding three days to the current date

      const options = { day: "2-digit", month: "long", year: "numeric" };
      return dueDate.toLocaleDateString("en-US", options);
    };

    const mailjet = Mailjet.apiConnect(
      "f3366977b75195573f95b1d43939fc6c",
      "729f795c0f09fe6ddd72ecf6cd6b1683"
    );

    const request = mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: "booking@amicolo.com",
            Name: "AmiColo",
          },
          To: [
            {
              Email: email,
              Name: name,
            },
          ],
          Subject: "Reset Your Password",
          TextPart: "",
          HTMLPart: `
            <h3>Reset Your Password</h3>
            <p>Dear ${name},</p>
            <p>
              You have requested to reset your password. Please click the link below to reset your password.
            </p>
            <p>
              <a href="https://amicolo.com/reset-password/${token}/${email}">Reset Password</a>
            </p>
            <p>
              If you did not request to reset your password, please ignore this email.
            </p>
            <p>
              Thank you.
            </p>
            <p>
              AmiColo Team
            </p>
            <p>
              ${formattedDate} ${formattedTime}
            </p>
            <p>
              This email was sent to ${email}. If you received this email by mistake, please let us know.
            </p>
              `,
        },
      ],
    });

    return NextResponse.json(
      { message: "Mail Sent Successfully", response: request },
      { status: 200 }
    );
  } catch (error) {
    // console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
