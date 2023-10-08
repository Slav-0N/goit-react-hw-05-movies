import { getPoster } from 'Services/getFilmPoster';
import { getAllPitures } from 'api/Api';

import { useState } from 'react';
import { useEffect } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';

const FilmInfoPage = () => {
  const { filmId } = useParams();

  const [filmInfo, setFilmInfo] = useState({});

  useEffect(() => {
    const fetchData = `movie/${filmId}`;

    getAllPitures(fetchData)
      .then(data => {
        console.log('resived data:', data);
        setFilmInfo({ ...data });
      })
      .catch(error => {
        console.log(error.message);
      })
      .finally(() => {
        console.log(' Докладну інфу, про стрічку, завантажено.');
      });
  }, [filmId]);

  return (
    <>
      <img src={getPoster(filmInfo.poster_path)} width={250} alt="poster" />
      <h1>{filmInfo.title}</h1>
      <p>User score: __ %</p>
      <h2>Overview</h2>
      <p>{filmInfo.overview}</p>
      <h3>Genres</h3>
      <p>
        {filmInfo.genres &&
          filmInfo.genres.map(genre => (
            <span key={genre.id}>{genre.name} </span>
          ))}
      </p>
      <h4>Additional information</h4>
      <nav>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="review">Review</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default FilmInfoPage;
