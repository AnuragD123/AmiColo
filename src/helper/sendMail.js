'use server'
import nodemailer from 'nodemailer';

import bcryptjs from 'bcryptjs';


export const sendEmail = async (emailData) => {

    try {
        // create a hased token
        // const hashedToken = await bcryptjs.hash(userId.toString(), 10)

       
        const transport = nodemailer.createTransport({
            host: 'smtp.hostinger.com', // Replace with your Hostinger SMTP server
            port: 465, // Standard SMTP port (you might need to use 465 or other ports depending on your Hostinger setup)
            secure: true, // Set to true for secure connection (TLS/SSL)
            auth: {
                user: 'support@amicolo.com', // Replace with your email
                pass: 'ami@COLO2023' // Replace with your email password or application-specific password
            }
        });

        if (emailData.type === "CONTACT_US") {

            const mailOptions = {
                from: 'support@amicolo.com',
                to: "anuragdubey859@gmail.com",
                subject: `Message from ${emailData.firstName} ${emailData.lastName}`,
                html: `
                  <p><strong>Name:</strong> ${emailData.firstName} ${emailData.lastName}</p>
                  <p><strong>Email:</strong> ${emailData.email}</p>
                  <p><strong>Phone Number:</strong> ${emailData.phoneNumber}</p>
                  <p><strong>Message:</strong></p>
                  <p>${emailData.message}</p>
                `,
            };

            const mailresponse = await transport.sendMail
                (mailOptions);
            console.log(mailresponse);
            return mailresponse;



        } else if (emailType === "RESET") {

        }


        // const mailOptions = {
        //     from: 'senders email',
        //     to: email,
        //     subject: emailType === "VERIFY" ? "Verify your email" : "Reset your password",
        //     html: `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a> to ${emailType === "VERIFY" ? "verify your email" : "reset your password"}
        //     or copy and paste the link below in your browser. <br> ${process.env.DOMAIN}/verifyemail?token=${hashedToken}
        //     </p>`
        // }




    } catch (error) {
        throw new Error(error.message);
    }
}

