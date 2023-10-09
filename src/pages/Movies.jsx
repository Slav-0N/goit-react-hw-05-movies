import { getAllPitures } from 'api/Api';
import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setsearchParams] = useSearchParams();

  const query = searchParams.get('query');

  const [searchedFilms, setsearchedFilms] = useState({});

  const fetchData = `search/movie`;
  const fetchDataQuery = `&query=${query}`;

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={e => {
          setsearchParams({ query: e.target.value });
        }}
      />
      <button
        onClick={() => {
          getAllPitures(fetchData, fetchDataQuery)
            .then(data => {
              console.log('resived data:', data);
              setsearchedFilms({ ...data });
              console.log(searchedFilms);
            })
            .catch(error => {
              console.log(error.message);
            })
            .finally(() => {
              console.log(' За введеними даними знайдено фільми.');
            });
        }}
      >
        boom
      </button>

      <ul>
        {searchedFilms.results &&
          searchedFilms.results.map(film => {
            return (
              <li key={film.id}>
                <Link to={`${film.id}`}> {film.title} </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Movies;
