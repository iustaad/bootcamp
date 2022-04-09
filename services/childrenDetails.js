import axios from "axios";

class ChildrenDetails {
  getChildrenDetails() {
    // console.log("ChildrenDetails");

    const userName = localStorage.getItem("username");
    return axios.post("http://localhost:3000/api", { data: userName });
  }
}

export default new ChildrenDetails();
