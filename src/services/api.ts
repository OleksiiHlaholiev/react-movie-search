import {API_KEY, URL_API_BASE} from "../constants/constants";

const asyncRequest = async (url: string, options?: any) => {
    try {
        const response = await fetch(url, options);
        const data = await response.json();

        return data;
    } catch (error) {
        throw error;
    }
}

export const getMovies = (endPoint: string, queryString: string) => {
    const requestURL = `${URL_API_BASE}${endPoint}?api_key=${API_KEY}${queryString}`;

    return asyncRequest(requestURL);
}

export const getMovieById = (videoId: string | number) => {
    const requestURL = `/movie/${videoId}`;
    const queryString = '&language=ru-RU';

    return getMovies(requestURL, queryString);
}
