const transporter = require('../config/mailer');

class EmailService {
  static async sendEmail(emailData) {
    const { name, email, subject, message } = emailData;

    const mailOptions = {
      from: email,
      to: 'popvibes.net@gmail.com',
      subject: subject,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    return new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          reject(error);
        } else {
          resolve(info);
        }
      });
    });
  }
}

module.exports = EmailService;