import { getPoster } from 'Services/getFilmPoster';
import { getMovieDetails } from 'api/Api';

import { useRef, useState } from 'react';
import { useEffect } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import { BackToBtn, BtnTxt } from './FilmInfoPage.styled';

const FilmInfoPage = () => {
  const { movieId } = useParams();
  const [filmInfo, setFilmInfo] = useState({});
  const location = useLocation();
  const backLinkLocationRef = useRef(location?.state?.from ?? '/Movies');

  useEffect(() => {
    getMovieDetails(movieId)
      .then(data => {
        setFilmInfo({ ...data });
      })
      .catch(error => {
        console.log(error.message);
      })
      .finally(() => {});
  }, [movieId]);

  return (
    <>
      <BackToBtn>
        <BtnTxt to={backLinkLocationRef.current}>Back to previous page</BtnTxt>
      </BackToBtn>

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
            <Link to="cast" state={{ from: location?.state?.from }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="review" state={{ from: location?.state?.from }}>
              Review
            </Link>
          </li>
        </ul>
      </nav>
      <Suspense fallback={<div>Loading...........................</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default FilmInfoPage;
