import axios from "axios";

class mailService {
  async passwordResetEmail(/* username, userEmail, resetToken */) {
    try {
      const res = await axios.post(`http://localhost:3000/api/mail`, {
        fromEmail: "helpdesk@iustaad.com",
        toEmail: "minhaj6006@gmail.com", // userEmail,
        username: "minhaj ur Rehman", // username,
        tamplateId: 3967405,
      });
      console.log(res.data.Messages[0]);
    } catch (err) {
      console.log(err);
    }
  }

  async sendCheckoutEmail(/* userEmail, id */) {
    try {
      const res = await axios.post(`http://localhost:3000/api/mail`, {
        fromEmail: "sales@iustaad.com",
        toEmail: "minhaj6006@gmail.com", // userEmail,
        username: "Minhaj ur Rehman", // username,
        tamplateId: 3974078,
      });
      console.log(res.data.Messages[0]);
    } catch (err) {
      console.log(err);
    }
  }

  async DemoClassEmail(/* userEmail, id */) {
    try {
      const res = await axios.post(`http://localhost:3000/api/mail`, {
        fromEmail: "sales@iustaad.com",
        toEmail: "minhaj6006@gmail.com", // userEmail,
        username: "Minhaj ur Rehman", // username,
        tamplateId: 3974092,
      });
      console.log(res.data.Messages[0]);
    } catch (err) {
      console.log(err);
    }
  }

  async ContactFormEmail(userEmail, name) {
    try {
      const res = await axios.post(`http://localhost:3000/api/mail`, {
        fromEmail: "helpdesk@iustaad.com",
        toEmail: userEmail,
        username: name,
        tamplateId: 3974086,
      });
      console.log(res.data.Messages[0]);
    } catch (err) {
      console.log(err);
    }
  }
}

export default new mailService();
