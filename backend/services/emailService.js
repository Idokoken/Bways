const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const sendWelcomeEmail = async (user) => {
  try {
    const mailOptions = {
      from: `"Bways" <${process.env.EMAIL_FROM}>`,
      to: user.email,
      subject: "Welcome to Bways!",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>Welcome to Bways, ${user.name}!</h2>

          <p>We're excited to have you on board.</p>

          <p>
            Your account has been successfully created.
            You can now log in and start exploring Bways.
          </p>

          <p>Thank you for joining us!</p>

          <p><strong>The Bways Team</strong></p>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log("Welcome email sent:", info.messageId);

    return info;
  } catch (error) {
    console.error("Welcome email failed:", error.message);
    throw error;
  }
};

module.exports = { sendWelcomeEmail };
