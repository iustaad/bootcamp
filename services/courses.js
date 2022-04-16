// axios used for HTTP request
import axios from "axios";

class courses {
  // All commited code is for MOODLE use.....

  getAllCourses() {
    const userToken = localStorage.getItem("token");
    return axios.post(
      `${process.env.MOODLE_URL}/webservice/rest/server.php?wstoken=${userToken}&wsfunction=core_course_get_courses&moodlewsrestformat=json`
    );
  }
  getEnrolledUser(courseid) {
    const userToken = localStorage.getItem("token");
    return axios.post(
      `${process.env.MOODLE_URL}/webservice/rest/server.php?wstoken=${userToken}&wsfunction=core_enrol_get_enrolled_users&moodlewsrestformat=json&courseid=${courseid}`
    );
  }
  getAssignment() {
    const userToken = localStorage.getItem("token");
    return axios.post(
      `${process.env.MOODLE_URL}/webservice/rest/server.php?wstoken=${userToken}&wsfunction=mod_assign_get_assignments&moodlewsrestformat=json`
    );
  }

  getCourse() {
    const courseName = localStorage.getItem("courseName");

    return axios.post("http://localhost:3000/api/course", { data: courseName });
  }
}

export default new courses();
