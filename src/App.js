import './App.css';
import { useEffect, useState } from 'react';
import Section from './components/Section';
import Hero from './components/Hero';
import { getUpcomingMovies, getMoviesInTheaters } from './web';

const App = () => {
  const [upcoming, setUpcoming] = useState({ data: [], loading: true });
  const [inTheaters, setInTheaters] = useState({ data: [], loading: true });

  useEffect(() => {
    const ls = JSON.parse(localStorage.getItem('movies'));
    if (ls !== null && ls.length > 0) {
      ls.forEach((movie) => {
        if (movie.releaseState.includes('Opening')) {
          setInTheaters((prevState) => {
            const { data } = prevState;
            const newData = data.concat(movie);
            return { ...prevState, data: newData, loading: false };
          });
        } else {
          setUpcoming((prevState) => {
            const { data } = prevState;
            const newData = data.concat(movie);
            return { ...prevState, data: newData, loading: false };
          });
        }
      });
      return;
    }

    getUpcomingMovies().then((data) => {
      setUpcoming({ data, loading: false });
      const ls = JSON.parse(localStorage.getItem('movies'));
      if (ls !== null) {
        const found = ls.some(
          (movie) => !movie.releaseState.includes('Opening'),
        );
        if (found) return;
        localStorage.setItem('movies', JSON.stringify(ls.concat(data)));
      } else {
        localStorage.setItem('movies', JSON.stringify(data));
      }
    });

    getMoviesInTheaters().then((data) => {
      setInTheaters({ data, loading: false });
      const ls = JSON.parse(localStorage.getItem('movies'));
      if (ls !== null) {
        const found = ls.some(
          (movie) => !movie.releaseState.includes('Opening'),
        );
        if (found) return;

        localStorage.setItem('movies', JSON.stringify(ls.concat(data)));
      } else {
        localStorage.setItem('movies', JSON.stringify(data));
      }
    });
  }, []);

  return (
    <div className="App">
      <Hero />

      <Section
        id="carousel-upcoming"
        title="Coming soon to theaters"
        subtitle="Trailers for upcoming releases"
        type="carousel"
        data={upcoming.data}
        loading={upcoming.loading}
      />

      <Section
        id="carousel-intheaters"
        title="In theaters"
        subtitle="Showtimes near you"
        type="carousel"
        data={inTheaters.data}
        loading={inTheaters.loading}
      />
    </div>
  );
};

export default App;
