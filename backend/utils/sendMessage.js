const nodemailer = require("nodemailer");
const sendMsg = async(opts) => {
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_EMAIL,
            pass: process.env.SMTP_PASSWORD,
        },
    });
    let msg = {
        from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
        to: opts.email,
        subject: opts.subject,
        text: opts.message,
    }
    const info = await transporter.sendMail(msg);

    console.log("Message sent: %s", info.messageId);
}

module.exports = sendMsg;