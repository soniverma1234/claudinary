
import nodemailer from "nodemailer";
import "dotenv/config";

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465,

    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

export const verifySMTP = async () => {
    try {
        if (
            !process.env.SMTP_HOST ||
            !process.env.SMTP_PORT ||
            !process.env.SMTP_USER ||
            !process.env.SMTP_PASS
        ) {
            console.log("SMTP ENV Missing");
            return;
        }

        await transporter.verify();

        console.log("SMTP Connected Successfully");

    } catch (error) {
        console.log("SMTP connection failed:", error.message);
    }
};

export default transporter;
