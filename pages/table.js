import React, { useEffect, useState } from "react";
import axios from "axios";

const baseURL = "http://localhost:4000/";

function table() {
  const [courses, setCourses] = useState([]);
  async function getAllCourses() {
    const response = await axios.get(baseURL);
    setCourses(response.data)
    console.log(response.data);
  }

  useEffect(() => {
    getAllCourses();
  }, []);

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => (
            <tr key = {course.id}>
              <td>{course.id}</td>
              <td>{course.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default table;
