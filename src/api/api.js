import axios from "axios";

const api = axios.create({
    baseURL: "curriculum-page-srv/",

});

export default api;