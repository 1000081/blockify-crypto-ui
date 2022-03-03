import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8010/proxy/api",
  headers: {
    "Content-type": "application/json",
  },
});