import axios from 'axios';

const baseurl = process.env.REACT_APP_BASE_URL;
const apiKey = process.env.REACT_APP_API_KEY;

let url = `${baseurl}?apikey=${apiKey}`;

const fetchData = async (movieTitle) => {
    try {
        const response = await axios.get(`${url}&s=${movieTitle}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

const fetchMovie = async (id) => {
    try {
        const response = await axios.get(`${url}&i=${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

const searchMovie = async (keyword) => {
    try {
        const response = await axios.get(`${url}&s=${keyword}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

export{fetchData, fetchMovie, searchMovie}