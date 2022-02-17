const Joi = require("Joi");
const express = require("express");
const app = express();

app.use(express.json());

const courses = [
  { id: 1, name: "course 1" },
  { id: 2, name: "course 2" },
  { id: 3, name: "course 3" },
];

// Get All courses API......
app.get("/", (req, res) => {
  res.send(courses);
});

// Get courses by ID API.....
app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  console.log(course);
  if (!course){
    res.status(404).send("The course with the given ID was not found");
    return;
  }
    res.send(course);
});

// Create course API....
app.post('/api/courses', (req, res) => {

    const {error} = validateCourse (req.body);
    if(error){
        res.status(400).send(error.details[0].message);
        return;
    } 
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };

    courses.push(course);
    res.send(course);
});

// Update course API......
app.put('/api/courses/:id', (req, res) =>{
    // Check id
    const course = courses.find((c) => c.id === parseInt(req.params.id));
    if (!course){
      res.status(404).send("The course with the given ID was not found");
      return;
    }
    // Validate the value
    const { error } = validateCourse(req.body);
    if(error){
        res.status(400).send(error.details[0].message);
        return;
    }
    // update
    course.name = req.body.name;

    // retrun updated value
    res.send(course);
});

// Delete course API....
app.delete('/api/courses/:id', (req, res) => {
    // Cheking course....
    const course = courses.find((c) => c.id === parseInt(req.params.id));
    if (!course){
      res.status(404).send("The course with the given ID was not found");
      return;
    }
    // Delete course....
    const index = courses.indexOf(course);
    courses.splice(index, 1);
    // Return the course....
    res.send(course);
});

// Validate input method....
function validateCourse (course) {
    schema = Joi.object({
        name: Joi.string()
             .min(3)
             .required()
    });

    return schema.validate(course);
};

const port = process.env.port || 4000;
app.listen(port, () => console.log(`lisiting on port ${port}....`));
