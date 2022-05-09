import axios from "axios";
import composeCheckoutEmail from "../components/composeEmail/composeCheckoutEmail";
import composeDemoClassEmail from "../components/composeEmail/composeDemoClassEmail";
import composePassReset from "../components/composeEmail/composePassReset";
import composeContactFormEmail from "../components/composeEmail/composeContactFormEmail";

class mailService {
  /**
   * @description sends an email to the user with a link to reset their password and the email is sent to the user's email address.
   * @param {string} email -- email of the user
   * @param {Number} token -- token to be sent to the user
   */
  async passwordResetEmail(/* userEmail, resetToken */) {
    return axios.post("http://localhost:3000/api/mail", {
      fromEmail: "helpdesk@iustaad.com",
      toEmail: "userEmail@email.com" /* userEmail,*/,
      subject: "Password Reset Request 🔑",
      message: composePassReset(/*username, resetToken */ "Minhaj", "12345"),
    });
  }

  /**
   * @description: sends an email to the user with a link to checkout their cart and the email is sent to the user's email address.
   * @param {string} email -- email of the user
   * @param {Number} id -- Order id
   */
  async sendCheckoutEmail(/* userEmail, id */) {
    return axios.post("http://localhost:3000/api/mail", {
      fromEmail: "sales@iustaad.com",
      toEmail: "to@mail.com" /* userEmail,*/,
      subject: "Your order has been placed 🎉",
      message: composeCheckoutEmail(/*usename ,id*/ "Minhaj", 24),
    });
  }

  /**
   * @description: sends an email to the user.
   * @param {string} email -- email of the user
   * @param {Number} id -- Order id
   */
  async DemoClassEmail(/* userEmail, id */) {
    return axios.post("http://localhost:3000/api/mail", {
      fromEmail: "sales@iustaad.com",
      toEmail: "to@mail.com" /* userEmail,*/,
      subject: "Demo Class Request",
      message: composeDemoClassEmail(/*id*/ "Minhaj", 65),
    });
  }

  async ContactFormEmail(userEmail, name) {
    return axios.post("http://localhost:3000/api/mail", {
      fromEmail: "helpdesk@iustaad.com",
      toEmail: userEmail,
      subject: "Thank you for contacting us",
      message: composeContactFormEmail(name),
    });
  }
}

export default new mailService();
