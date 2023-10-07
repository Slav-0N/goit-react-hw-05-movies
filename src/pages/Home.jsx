import { getAllPitures } from 'api/Api';
import { useEffect } from 'react';
import { useState } from 'react';
const Home = () => {
  const [trendFilms, setTrendFilms] = useState([]);
  useEffect(() => {
    getAllPitures()
      .then(data => {
        // if (!data.hits.length) {
        //   alert('no pictures');
        //   return;
        // }
        setTrendFilms([...data.results]);
        console.log(data.results);
      })
      .catch(error => {
        console.log(error.message);
      })
      .finally(() => {
        console.log('Сегодняшние тренды загружены.');
      });
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <ul>
        {trendFilms.map(film => {
          return <li key={film.id}>{film.title}</li>;
        })}
      </ul>
    </main>
  );
};

export default Home;
