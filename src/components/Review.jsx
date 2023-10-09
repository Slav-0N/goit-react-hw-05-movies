// const Review = () => {
//   return <div>Review component</div>;
// };

// export default Review;

// import { getPoster } from 'Services/getFilmPoster';
import { getAllPitures } from 'api/Api';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Review = () => {
  const { filmId } = useParams();

  const [Reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = `movie/${filmId}/reviews`;

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
  }, [filmId]);

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
