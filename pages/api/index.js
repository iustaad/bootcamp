const users = {
  admin: [
    {
      id: 1,
      first_name: "Gretta",
      last_name: "Harner",
      email: "gharner0@opensource.org",
      gender: "Female",
      enrolledCourse: [
        {
          fullname: "Java For Web Development",
          id: 2,
          shortname: "Java",
          assignments: [
            {
              id: 1,
              name: "What is mean by JPA",
            },
            {
              id: 2,
              name: "What is mean by JVM",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      first_name: "Salomo",
      last_name: "Matejovsky",
      email: "smatejovsky1@trellian.com",
      gender: "Male",
      enrolledCourse: [
        {
          fullname: "Bootcamp 2022",
          id: 3,
          shortname: "Bootcamp",
          assignments: [
            {
              id: 1,
              name: "What is mean by Bootcamp",
            },
            {
              id: 2,
              name: "Why we need state management",
            },
          ],
        },
      ],
    },
  ],

  ali: [
    {
      id: 3,
      first_name: "Josi",
      last_name: "Lewsley",
      email: "jlewsley0@shareasale.com",
      gender: "Female",
      ip_address: "111.22.5.96",
      enrolledCourse: [
        {
          fullname: "Java For Web Development",
          id: 2,
          shortname: "Java",
          assignments: [
            {
              id: 1,
              name: "What is mean by JPA",
            },
            {
              id: 2,
              name: "What is mean by JVM",
            },
          ],
        },
      ],
    },
    {
      id: 4,
      first_name: "Yorke",
      last_name: "Fawcitt",
      email: "yfawcitt1@cafepress.com",
      gender: "Male",
      ip_address: "210.54.5.222",
      enrolledCourse: [
        {
          fullname: "Bootcamp 2022",
          id: 3,
          shortname: "Bootcamp",
          assignments: [
            {
              id: 1,
              name: "What is mean by Bootcamp",
            },
            {
              id: 2,
              name: "Why we need state management",
            },
          ],
        },
      ],
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
