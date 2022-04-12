import axios from "axios";
import { composeCheckoutEmail } from "../components/composeEmail/composeCheckoutEmail";
import { composeDemoClassEmail } from "../components/composeEmail/composeDemoClassEmail";
import { composePassReset } from "../components/composeEmail/composePassReset";

class mailService {
  /**
   * @description sends an email to the user with a link to reset their password and the email is sent to the user's email address.
   * @param {string} email -- email of the user
   * @param {Number} token -- token to be sent to the user
   */
  async passwordResetEmail(/* userEmail, resetToken */) {
    const template = await composePassReset(/* resetToken */); //Not remove await keyword here
    return axios.post("http://localhost:3000/api/mail", {
      fromEmail: "helpdesk@iustaad.com",
      toEmail: "userEmail@email.com" /* userEmail,*/,
      subject: "Password Reset Request 🔑",
      message: template,
    });
  }

  /**
   * @description: sends an email to the user with a link to checkout their cart and the email is sent to the user's email address.
   * @param {string} email -- email of the user
   * @param {Number} id -- Order id
   */
  async sendCheckoutEmail(/* userEmail, id */) {
    const template = await composeCheckoutEmail(/*id*/ 24); //Not remove await keyword here
    return axios.post("http://localhost:3000/api/mail", {
      fromEmail: "sales@iustaad.com",
      toEmail: "to@mail.com" /* userEmail,*/,
      subject: "Your order has been placed 🎉",
      message: template,
    });
  }

  /**
   * @description: sends an email to the user.
   * @param {string} email -- email of the user
   * @param {Number} id -- Order id
   */
  async DemoClassEmail(/* userEmail, id */) {
    const template = await composeDemoClassEmail(/*id*/ 65); //Not remove await keyword here
    return axios.post("http://localhost:3000/api/mail", {
      fromEmail: "sales@iustaad.com",
      toEmail: "to@mail.com" /* userEmail,*/,
      subject: "Demo Class Request",
      message: template,
    });
  }
}

export default new mailService();
