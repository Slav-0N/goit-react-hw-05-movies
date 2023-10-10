import { getAllPitures } from 'api/Api';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setsearchParams] = useSearchParams();
  const location = useLocation();

  // const query = searchParams.get('query') ?? '';
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
        setsearchedFilms({ ...data });
      })
      .catch(error => {
        console.log(error.message);
      })
      .finally(() => {});
  }, [fetchData, fetchDataQuery]);

  return (
    <div>
      <input type="text" value={query} onChange={updateQueryString} />
      {/* <button type="button">boom</button> */}

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
