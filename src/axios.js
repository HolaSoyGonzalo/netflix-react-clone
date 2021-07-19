import axios from "axios";

/**Base URL for requests to the movie DB */

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance