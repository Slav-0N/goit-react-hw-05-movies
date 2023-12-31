import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getData = async (searchParm, query = '') => {
  const { data } = await axios(
    `${searchParm}?language=en-EN&api_key=3ca44921ce7d7d1a85260e2073ddef9c${query}`
  );
  return data;
};

export const getMovieDetails = async movieId => {
  const { data } = await axios(
    `/movie/${movieId}?language=en-EN&api_key=3ca44921ce7d7d1a85260e2073ddef9c`
  );
  return data;
};

// const fetchLanguage = `language=ru-UA`;
// const apiKey = `api_key=3ca44921ce7d7d1a85260e2073ddef9c`;
// const fetchData = `trending/movie/day?${fetchLanguage}&${apiKey}`;
