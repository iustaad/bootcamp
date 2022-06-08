import axios from "axios";

class Students {
  getAllStudents() {
    return axios.get("http://localhost:3000/api/students/students");
  }
}

export default new Students();
