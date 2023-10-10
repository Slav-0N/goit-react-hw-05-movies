import { getPoster } from 'Services/getFilmPoster';
import { getAllPitures } from 'api/Api';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { filmId } = useParams();
  const { filmWasFind } = useParams();

  const [castList, setCastList] = useState([]);

  useEffect(() => {
    // const fetchData = `movie/${filmId}/credits`;
    let fetchData;
    if (filmId !== undefined) {
      fetchData = `movie/${filmId}/credits`;
    } else {
      fetchData = `movie/${filmWasFind}/credits`;
    }

    getAllPitures(fetchData)
      .then(data => {
        setCastList([...data.cast]);
      })
      .catch(error => {
        console.log(error.message);
      })
      .finally(() => {});
  }, [filmId, filmWasFind]);

  return (
    <>
      <div>Cast component</div>
      <ul>
        {castList.map(actor => {
          return (
            <li key={actor.cast_id}>
              <ul>
                <img
                  src={getPoster(actor.profile_path)}
                  width={100}
                  alt="poster"
                />
                <li>
                  <p>{actor.name}</p>
                  <p>
                    <span>Character: </span>
                    {actor.character}
                  </p>
                </li>
              </ul>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Cast;