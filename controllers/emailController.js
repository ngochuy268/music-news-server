const EmailService = require('../services/emailService');

class EmailController {
  static async sendEmail(req, res) {
    try {
      const info = await EmailService.sendEmail(req.body);
      console.log('Email sent:', info.response);
      res.status(200).send('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    }
  }
}

module.exports = EmailController;