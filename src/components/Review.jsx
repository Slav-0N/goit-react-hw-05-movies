import { getAllPitures } from 'api/Api';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Review = () => {
  const { filmId } = useParams();
  const { filmWasFind } = useParams();

  const [Reviews, setReviews] = useState([]);

  useEffect(() => {
    // const fetchData = `movie/${filmId}/reviews`;
    let fetchData;
    if (filmId !== undefined) {
      fetchData = `movie/${filmId}/reviews`;
    } else {
      fetchData = `movie/${filmWasFind}/reviews`;
    }

    getAllPitures(fetchData)
      .then(data => {
        console.log('data.results-->', data.results);
        setReviews([...data.results]);
      })
      .catch(error => {
        console.log(error.message);
      })
      .finally(() => {
        console.log('');
      });
  }, [filmId, filmWasFind]);

  return (
    <>
      <ul>
        {Reviews[0] ? (
          Reviews.map(message => {
            console.log(Reviews);
            return (
              <li key={message.id}>
                <p>{message.author}</p>
                <p>{message.content}</p>
              </li>
            );
          })
        ) : (
          <div> We don't have any results for this movie.</div>
        )}
      </ul>
    </>
  );
};

export default Review;
