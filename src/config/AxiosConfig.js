import axios from "axios";

export const axiosConfigLocal = axios.create({
    baseURL: " http://localhost:8080/api",
});

