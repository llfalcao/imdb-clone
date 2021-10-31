import { useState } from 'react';
import * as S from './styles';

const Carousel = ({ id, data }) => {
  const [pos, setPos] = useState(0);

  function addToWatchlist(movie) {
    let watchlist = JSON.parse(localStorage.getItem('watchlist'));
    if (watchlist === null) {
      watchlist = [movie];
    } else {
      watchlist.push(movie);
    }
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
  }

  function slide(direction) {
    const windowWidth = window.innerWidth;
    const carouselWidth =
      document.getElementById('carousel-upcoming').scrollWidth;

    if (direction === 'right') {
      if (carouselWidth + pos > windowWidth) {
        setPos((pos) => pos - windowWidth / 2);
      }
    } else {
      setPos((pos) => pos + windowWidth / 2);
    }
  }

  return (
    <S.Carousel>
      {data !== undefined && data.length > 0 ? (
        <>
          <S.Container id={id} style={{ transform: `translateX(${pos}px)` }}>
            {data.map((movie) => (
              <div className="movie" key={movie.id}>
                <div className="movie__cover">
                  <img src={movie.image} alt={movie.title} />
                </div>
                <span className="movie__rating">
                  <span className="material-icons icon-rating">star</span>
                  {movie.imDbRating
                    ? movie.imDbRating
                    : movie.metacriticRating
                    ? movie.metacriticRating
                    : '-'}
                </span>
                <span className="movie__date">{movie.releaseState}</span>
                <span className="movie__title" title={movie.title}>
                  {movie.title}
                </span>
                <button
                  className="btn-watchlist"
                  onClick={() => addToWatchlist(movie)}
                >
                  <span className="material-icons icon-watchlist">add</span>
                  Watchlist
                </button>
              </div>
            ))}
          </S.Container>

          {pos < 0 ? (
            <S.ArrowLeft onClick={() => slide('left')}>
              <span className="material-icons material-icons-outlined">
                keyboard_arrow_left
              </span>
            </S.ArrowLeft>
          ) : null}

          <S.ArrowRight onClick={() => slide('right')}>
            <span className="material-icons material-icons-outlined">
              keyboard_arrow_right{' '}
            </span>
          </S.ArrowRight>
        </>
      ) : (
        <S.LoadingError>Something went wrong.</S.LoadingError>
      )}
    </S.Carousel>
  );
};

export default Carousel;
