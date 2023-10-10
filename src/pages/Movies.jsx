import { getAllPitures } from 'api/Api';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setsearchParams] = useSearchParams();
  const location = useLocation();
  console.log(location);
  const query = searchParams.get('query') ?? '';

  const [searchedFilms, setsearchedFilms] = useState({});

  const fetchData = `search/movie`;
  const fetchDataQuery = `&query=${query}`;

  const updateQueryString = e => {
    if (e.target.value === '') {
      return setsearchParams({});
    } else {
      setsearchParams({ query: e.target.value });
    }
  };

  useEffect(() => {
    getAllPitures(fetchData, fetchDataQuery)
      .then(data => {
        console.log('resived data:', data);
        setsearchedFilms({ ...data });
      })
      .catch(error => {
        console.log(error.message);
      })
      .finally(() => {
        console.log(' За введеними даними знайдено фільми.');
      });
  }, [fetchData, fetchDataQuery]);
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={updateQueryString}
        // onChange={e => {
        //   setsearchParams({ query: e.target.value });
        // }}
      />
      <button
        onClick={() => {
          console.log('You just clicked button Boom');
        }}
      >
        boom
      </button>

      <ul>
        {searchedFilms.results &&
          searchedFilms.results.map(film => {
            return (
              <li key={film.id}>
                <Link to={`${film.id}`} state={{ from: location }}>
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
