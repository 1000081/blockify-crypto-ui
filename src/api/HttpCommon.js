import axios from "axios";

export default axios.create({
  baseURL: "https://cryptolisting-api.herokuapp.com/api",
  headers: {
    "Content-type": "application/json",
  },
});
