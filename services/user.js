import axios from "axios";

class User {
  // For Moodle
  // getUserDetails() {
  //   const userToken = localStorage.getItem("token");
  //   const userName = localStorage.getItem("username");
  //   return axios.post(
  //     `${process.env.MOODLE_URL}/webservice/rest/server.php?wstoken=${userToken}&wsfunction=core_user_get_users&moodlewsrestformat=json&criteria[username][key]=username&criteria[username][value]=${userName}`
  //   );
  // }
  // getAllUsers() {
  //   const userToken = localStorage.getItem("token");
  //   return axios.post(
  //     `${process.env.MOODLE_URL}/webservice/rest/server.php?wstoken=${userToken}&wsfunction=core_user_get_users&moodlewsrestformat=json&criteria[email][key]=email&criteria[email][value]=%%`
  //   );
  // }

  getUserDetails() {
    // console.log("ChildrenDetails");

    const userName = localStorage.getItem("username");
    return axios.post("http://localhost:3000/api/users", { data: userName });
  }
}

export default new User();
