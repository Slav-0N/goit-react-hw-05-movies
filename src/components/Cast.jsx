import { getPoster } from 'Services/getFilmPoster';
import { getAllPitures } from 'api/Api';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [castList, setCastList] = useState([]);
  const fetchData = `movie/${movieId}/credits`;
  useEffect(() => {
    getAllPitures(fetchData)
      .then(data => {
        setCastList([...data.cast]);
      })
      .catch(error => {
        console.log(error.message);
      })
      .finally(() => {});
  }, [fetchData, movieId]);

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
