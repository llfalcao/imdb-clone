import './App.css';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import Section from './components/Section';

const App = () => {
  const [upcoming, setUpcoming] = useState({ loading: true });

  useEffect(() => {
    function getLocalStorage() {
      const upcoming = localStorage.getItem('upcomingMovies');
      if (upcoming !== null && upcoming !== '[]') {
        setUpcoming({ data: JSON.parse(upcoming), loading: false });
        return true;
      }
      return false;
    }

    async function getComingSoon() {
      const isLocallyStored = getLocalStorage();
      if (isLocallyStored) return;
      let response = await fetch(
        'https://imdb-api.com/en/API/ComingSoon/k_cr891qpm',
      );
      response = await response.json();
      const data = await response.items.map((item) => {
        if (item.image.includes('amazon')) {
          item.image =
            item.image.substring(0, item.image.indexOf('._')) +
            '._V1_UX256.jpg';
        }
        return item;
      });
      setUpcoming({ data, loading: false });
      localStorage.setItem('upcomingMovies', JSON.stringify(response.items));
    }

    getComingSoon();
  }, []);

  return (
    <div className="App">
      <Header />

      <div>
        <Section
          id="carousel-upcoming"
          title="Coming soon to theaters"
          subtitle="Trailers for upcoming releases"
          type="carousel"
          data={upcoming.data}
          loading={upcoming.loading}
        />
      </div>
    </div>
  );
};

export default App;
