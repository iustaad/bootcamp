const nodemailer = require("nodemailer");

export default function handler(req, res) {
  const { fromEmail, toEmail, subject, message } = req.body;

  console.log(message);

  // create reusable transporter object using the default SMTP transport (configured in .env.local)
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: process.env.BOOTCAMP_MAIL_PORT,
    auth: {
      user: process.env.BOOTCAMP_MAIL_USER,
      pass: process.env.BOOTCAMP_MAIL_PASS,
    },
  });

  const mailOptions = {
    from: fromEmail,
    to: toEmail,
    subject,
    html: message,
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(500).json({
        message: "Error sending email",
        error,
      });
    } else {
      res.status(200).json({
        message: "Email sent",
        info,
      });
    }
  });
}
