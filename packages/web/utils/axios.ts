import axios from "axios";

export default axios.create({
    // baseURL: "http://localhost",
    baseURL: "https://investiq.app",
    // responseType: "json",
    // headers: {
    //     "Content-Type": "application/json"
    // }
});