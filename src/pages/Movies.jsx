import { getAllPitures } from 'api/Api';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setsearchParams] = useSearchParams();
  const location = useLocation();

  const query = searchParams.get('query') ?? '';

  const [searchedFilms, setSearchedFilms] = useState({});

  const fetchData = `search/movie`;
  const fetchDataQuery = `&query=${query}`;

  const [inputValue, setInputValue] = useState('');
  const handleChange = event => {
    const { value } = event.target;
    setInputValue(value);
    console.log(value);
  };

  // const updateQueryString = e => {
  //   if (e.target.value === '') {
  //     return setsearchParams({});
  //   } else {
  //     setsearchParams({ query: e.target.value });
  //   }
  // };

  useEffect(() => {
    getAllPitures(fetchData, fetchDataQuery)
      .then(data => {
        console.log(data);
        setSearchedFilms({ ...data });
      })
      .catch(error => {
        console.log(error.message);
      })
      .finally(() => {});
  }, [fetchData, fetchDataQuery]);

  return (
    <div>
      {/* <input type="text" value={query} onChange={updateQueryString} />
      <button type="button">boom</button> */}

      <form
        onSubmit={e => {
          e.preventDefault();
          console.log(inputValue);
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
        {searchedFilms.results !== undefined &&
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
