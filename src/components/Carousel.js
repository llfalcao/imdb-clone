import { useState } from 'react';
import styled from 'styled-components';

const StyledCarousel = styled.div`
  position: relative;
`;

const Container = styled.div`
  display: flex;
  transition: 0.5s ease-in-out;
`;

const Arrow = styled.button`
  position: absolute;
  top: 25%;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  cursor: pointer;
  padding: 0.5rem 0;
  border: 1px solid rgb(255, 255, 255, 0.7);
  border-radius: 0.25rem;

  &:hover {
    color: #f5c518;
  }

  & .material-icons {
    font-size: 3.5rem;
  }
`;

const ArrowLeft = styled(Arrow)`
  left: 0;
`;

const ArrowRight = styled(Arrow)`
  right: 0;
`;

const LoadingError = styled.p`
  padding: 1rem;
  font-weight: 600;
  font-size: 1.5rem;
`;

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
    <StyledCarousel>
      {data !== undefined && data.length > 0 ? (
        <>
          <Container id={id} style={{ transform: `translateX(${pos}px)` }}>
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
          </Container>

          {pos < 0 ? (
            <ArrowLeft onClick={() => slide('left')}>
              <span className="material-icons material-icons-outlined">
                keyboard_arrow_left
              </span>
            </ArrowLeft>
          ) : null}

          <ArrowRight onClick={() => slide('right')}>
            <span className="material-icons material-icons-outlined">
              keyboard_arrow_right{' '}
            </span>
          </ArrowRight>
        </>
      ) : (
        <LoadingError>Something went wrong.</LoadingError>
      )}
    </StyledCarousel>
  );
};

export default Carousel;
