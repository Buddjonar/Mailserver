
require("dotenv").config();
//Laddar in nodemailer som gör de möjligt att skicka mejl via node.js
const nodemailer = require("nodemailer");

//Skapar upp en koppling mellan gmail och nodemailer
//Hämtar användarnamn och app-lösenord ifrån en miljövariabel
//Vi gör så för att förhindra att andra kan komma åt dessa uppgifter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,       // din Gmail
    pass: process.env.EMAIL_PASS        // app-lösenord
  }
});

//Själva mejlet som ska skickas iväg
const mailOptions = {
  from: process.env.EMAIL_USER,
  to: "mottagare@example.com",
  subject: "Hej från Node.js!",
  text: "Detta är ett testmeddelande från en Glitch-app."
};

//Här så försöker vi skicka iväg det
//Stöter vi på error så skriver vi ut det i konsolen
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log("E-post skickad: " + info.response);
});