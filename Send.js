const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,       // din Gmail
    pass: process.env.EMAIL_PASS        // app-lösenord
  }
});

const mailOptions = {
  from: process.env.EMAIL_USER,
  to: "mottagare@example.com",
  subject: "Hej från Node.js!",
  text: "Detta är ett testmeddelande från en Glitch-app."
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log("E-post skickad: " + info.response);
});