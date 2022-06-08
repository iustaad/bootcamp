export default function handler(req, res) {
  const { username, fromEmail, toEmail, tamplateId } = req.body;

  const mailjet = require("node-mailjet").connect(
    process.env.MAILJET_API_KEY,
    process.env.MAILJET_SECRET_KEY
  );
  const request = mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: "helpdesk@iustaad.com",
          Name: "iUstaad Team",
        },
        To: [
          {
            Email: toEmail,
            Name: username,
          },
        ],
        TemplateID: tamplateId,
        TemplateLanguage: true,
        Data: {
          name: username,
        },
        Variables: {},
      },
    ],
  });
  request
    .then((result) => {
      console.log(result.body.Messages[0].Status);
      res.status(200).json(result.body);
    })
    .catch((err) => {
      console.log(err);
      res.status(err.statusCode).json(err.body);
    });
}
