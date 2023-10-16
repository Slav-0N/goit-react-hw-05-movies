import { getAllPitures } from 'api/Api';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setsearchParams] = useSearchParams();
  const location = useLocation();

  const query = searchParams.get('query') ?? '';

  const [searchedFilms, setSearchedFilms] = useState([]);

  // const fetchData = `search/movie`;
  // const fetchDataQuery = `&query=${query}`;

  const [inputValue, setInputValue] = useState('');
  const handleChange = event => {
    const { value } = event.target;
    setInputValue(value);
  };
  useEffect(() => {
    if (!query) return;
    const fetchData = `search/movie`;
    const fetchDataQuery = `&query=${query}`;
    getAllPitures(fetchData, fetchDataQuery)
      .then(data => {
        setSearchedFilms(data.results);
      })
      .catch(error => {
        console.log(error.message);
      })
      .finally(() => {});
  }, [query]);

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();

          setsearchParams({ query: inputValue });
        }}
      >
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
          value={inputValue}
        />
        <button type="submit"> Search </button>
      </form>

      <ul>
        {!!searchedFilms.length &&
          searchedFilms.map(film => {
            return (
              <li key={film.id}>
                <Link to={`/movies/${film.id}`} state={{ from: location }}>
                  {' '}
                  {film.title}{' '}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Movies;
