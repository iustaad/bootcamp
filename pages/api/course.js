const courses = {
  Java: [
    {
      fullname: "Java For Web Development",
      id: 2,
      shortname: "Java",
      assignments: [
        {
          id: 1,
          name: "what is mean by JPA",
        },
        {
          id: 2,
          name: "what is mean bu JVM",
        },
      ],
    },
  ],

  Bootcamp: [
    {
      fullname: "Bootcamp 2022",
      id: 3,
      shortname: "Bootcamp",
      assignments: [
        {
          id: 1,
          name: "what is mean by Bootcamp",
        },
        {
          id: 2,
          name: "Why we need state management",
        },
      ],
    },
  ],
};

export default function handler(req, res) {
  const courseName = req.body.data;

  if (courseName === "Java") {
    res.status(200).json(courses.Java);
  } else if (courseName === "Bootcamp") {
    res.status(200).json(courses.Bootcamp);
  }
}
