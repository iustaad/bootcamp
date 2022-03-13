// axios used for HTTP request
import axios from "axios";

const moodleURL = "http://localhost";

class moodleService {
  login(credentials) {
    return axios.post(
      `${moodleURL}/login/token.php?username=${credentials.username}&password=${credentials.password}&service=moodle_mobile_app`
    );
  }

  enrolledUser() {
    const userToken = localStorage.getItem("token");
    // console.log(token);

    return axios.post(
      `${moodleURL}/webservice/rest/server.php?wstoken=${userToken}&wsfunction=core_enrol_get_enrolled_users&moodlewsrestformat=json&courseid=2`
    );
  }
}

export default new moodleService();
