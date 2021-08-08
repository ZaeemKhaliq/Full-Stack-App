import axios from "axios";

export default axios.create({
  baseURL: "https://full-stack-app-menn.herokuapp.com/api",
  headers: {
    "Content-type": "application/json"
  }
});
