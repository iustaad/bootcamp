const users = {
  admin: [
    {
      id: 1,
      first_name: "Gretta",
      last_name: "Harner",
      email: "gharner0@opensource.org",
      gender: "Female",
    },
    {
      id: 2,
      first_name: "Salomo",
      last_name: "Matejovsky",
      email: "smatejovsky1@trellian.com",
      gender: "Genderfluid",
    },
  ],

  ali: [
    {
      id: 1,
      first_name: "Josi",
      last_name: "Lewsley",
      email: "jlewsley0@shareasale.com",
      gender: "Female",
      ip_address: "111.22.5.96",
    },
    {
      id: 2,
      first_name: "Yorke",
      last_name: "Fawcitt",
      email: "yfawcitt1@cafepress.com",
      gender: "Male",
      ip_address: "210.54.5.222",
    },
  ],
};

export default function handler(req, res) {
  const userName = req.body.data;
  if (userName === "admin") {
    res.status(200).json(users.admin);
  } else if (userName === "ali") {
    res.status(200).json(users.ali);
  }
}
