import { getData } from 'api/Api';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Review = () => {
  const [Reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  const fetchData = `movie/${movieId}/reviews`;
  useEffect(() => {
    getData(fetchData)
      .then(data => {
        setReviews([...data.results]);
      })
      .catch(error => {
        console.log(error.message);
      })
      .finally(() => {});
  }, [fetchData]);

  return (
    <>
      <ul>
        {Reviews[0] ? (
          Reviews.map(message => {
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
