import axios from "axios";

const entriesApi = axios.create({
  baseURL: "https://vue-entries-course-default-rtdb.firebaseio.com",
});

export default entriesApi;
