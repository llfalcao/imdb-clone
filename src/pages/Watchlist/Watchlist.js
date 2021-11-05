import { getAuth } from '@firebase/auth';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import { getWatchlist, removeMovie } from '../../firebase';
import * as S from './styles';

const Watchlist = () => {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const user = getAuth().currentUser;
    if (user === undefined || user === null) return;

    async function fetchAPI(id) {
      let response = await fetch(
        `https://imdb-api.com/en/API/SearchMovie/k_cr891qpm/${id}`,
      );
      response = await response.json();
      return response;
    }

    getWatchlist(user).then((items) => {
      const ls = JSON.parse(localStorage.getItem('movies'));
      if (ls && ls.length > 0) {
        items.forEach((id) => {
          const movie = ls.find((item) => item.id === id);
          setWatchlist((watchlist) => watchlist.concat(movie));
        });
      } else {
        items.forEach((id) => {
          fetchAPI(id)
            .then((data) =>
              setWatchlist((watchlist) => watchlist.concat(data.results[0])),
            )
            .catch((error) => console.error(error));
        });
      }
    });
  }, []);

  function removeFromWatchlist(id) {
    const user = getAuth().currentUser;
    if (user === undefined || user === null) return;
    removeMovie(user, id); // Remove it from Firebase
    setWatchlist((watchlist) => watchlist.filter((movie) => movie.id !== id));
  }

  return (
    <S.Container>
      <S.MovieContainer>
        {watchlist.length > 0 ? (
          watchlist.map((movie) => (
            <div className="movie" key={movie.id}>
              <div className="movie__cover">
                <img src={movie.image} alt={movie.title} />
              </div>
              <span className="movie__title" title={movie.title}>
                {movie.title}
              </span>
              <button className="btn-watchlist">Mark as watched</button>
              <S.Remove onClick={() => removeFromWatchlist(movie.id)}>
                <Button type="button" variant="icon" icon="highlight_off" />
              </S.Remove>
            </div>
          ))
        ) : (
          <div>
            <S.EmptyWatchlist>Your watchlist is empty.</S.EmptyWatchlist>
            <Link to="/imdb-clone">
              <Button type="button" variant="text" value="Return Home" />
            </Link>
          </div>
        )}
      </S.MovieContainer>
    </S.Container>
  );
};

export default Watchlist;
