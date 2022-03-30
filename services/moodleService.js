// axios used for HTTP request
import axios from "axios";

class moodleService {
  login(credentials) {
    return axios.post(
      `${process.env.MOODLE_URL}/login/token.php?username=${credentials.username}&password=${credentials.password}&service=test1`
    );
  }
}

export default new moodleService();
