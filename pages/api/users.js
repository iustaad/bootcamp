const users = {
  admin: [
    {
      id: 1,
      fullName: "Admin Admin",
      firstName: "Admin",
      lastName: "Admin",
      email: "admin@gmail.com",
    },
  ],

  ali: [
    {
      id: 2,
      fullName: "Muhammad Ali",
      firstName: "Muhammad",
      lastName: "Ali",
      email: "ali@gmail.com",
    },
  ],
};

export default function handler(req, res) {
  const userName = req.body.data;

  if (userName === "admin") {
    console.log("inside if block");
    res.status(200).json(users.admin);
  } else if (userName === "ali") {
    res.status(200).json(users.admin);
  }
}
