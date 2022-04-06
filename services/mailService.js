import axios from "axios";
import { composePassResetTemplate } from "../emailTemplates/ComposePassResetTemplate";

class mailService {
  // @param {string} recipientEmail - The email address of the recipient.
  async passwordResetEmail(/* recipientEmail */) {
    const template = await composePassResetTemplate();
    return axios.post("http://localhost:3000/api/mail", {
      fromEmail: "helpdesk@iustaad.com",
      toEmail: "recipientEmail@email.com" /* recipientEmail,*/,
      subject: "Password Reset",
      message: template,
    });
  }
}

export default new mailService();
