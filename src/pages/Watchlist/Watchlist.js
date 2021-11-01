import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Button from '../../components/Button';
import * as S from './styles';

const Watchlist = () => {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    function getLocalStorage() {
      const watchlist = localStorage.watchlist;
      if (watchlist !== null) {
        setWatchlist(JSON.parse(watchlist));
        return true;
      }
      return false;
    }

    async function getMovie(id) {
      const isLocallyStored = getLocalStorage();
      if (isLocallyStored) return;

      let response = await fetch(
        `https://imdb-api.com/en/API/SearchMovie/k_cr891qpm/${id}`,
      );

      response = await response.json();

      setWatchlist((watchlist) => {
        if (response === null) return [];
        const updated = [...watchlist];
        updated.push(response.results[0]);
        return updated;
      });
    }

    const movies = JSON.parse(localStorage.getItem('watchlist'));
    if (movies == null) return;
    movies.map((id) => getMovie(id));
  }, []);

  function removeFromWatchlist(id) {
    const index = watchlist.findIndex((movie) => movie.id === id);

    setWatchlist((watchlist) => {
      const updated = [...watchlist];
      updated.splice(index, 1);
      localStorage.setItem('watchlist', JSON.stringify(updated));
      return updated;
    });
  }

  return (
    <S.Container>
      <Header />
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
            <Link to="/">
              <Button type="button" variant="text" value="Return Home" />
            </Link>
          </div>
        )}
      </S.MovieContainer>
    </S.Container>
  );
};

export default Watchlist;
