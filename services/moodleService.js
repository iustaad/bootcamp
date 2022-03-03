import axios from "axios";

const baseURL = "http://localhost/";

class moodleService {
  credentials(username, password) {
    return axios.post(
      `${baseURL}login/token.php?username=${username}&password=${password}&service=moodle_mobile_app`
    );
  }

  getAllEnrolledUsers(token) {
    return axios.post(
      `${baseURL}webservice/rest/server.php?wstoken=${token}&wsfunction=core_enrol_get_enrolled_users&moodlewsrestformat=json&courseid=2`
    );
  }
}

export default new moodleService();
