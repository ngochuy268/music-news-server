const transporter = require('../config/mailer');
const axios = require('axios');

class EmailService {
  static async sendEmail(emailData) {
    const { name, email, subject, message, captcha } = emailData;

    // Verify reCAPTCHA
    const recaptchaResponse = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=6LefuK4qAAAAACRcqvDNeBWpbolAJPO3PatKFiz_&response=${captcha}`
    );

    if (!recaptchaResponse.data.success) {
      throw new Error('reCAPTCHA verification failed');
    }

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