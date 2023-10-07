import axios from 'axios';

export const getAllPitures = async (searchValue, page) => {
  const { data } = await axios(
    'https://api.themoviedb.org/3/trending/movie/day?language=ru-UA&api_key=3ca44921ce7d7d1a85260e2073ddef9c'
  );
  return data;
};
