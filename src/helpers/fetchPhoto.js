import axios from "axios";

export  async function fetchByPhoto (name, page) {

    const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = '35770209-0f0794109d372fc2471926e98';
    const SEARCH_CONFIG = `q=${name}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`

    return await axios.get(`${BASE_URL}?key=${API_KEY}&${SEARCH_CONFIG}`)
}