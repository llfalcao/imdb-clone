import './App.css';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import Section from './components/Section';

const App = () => {
  const [upcoming, setUpcoming] = useState({ data: [], loading: true });

  useEffect(() => {
    async function getComingSoon() {
      let response = await fetch(
        'https://imdb-api.com/en/API/ComingSoon/k_cr891qpm',
      );
      response = await response.json();
      setUpcoming((upcoming) => ({
        ...upcoming,
        data: response.items,
        loading: false,
      }));
    }

    getComingSoon();
  }, []);

  return (
    <div className="App">
      <Header />

      <div>
        <Section
          title="Coming soon to theaters"
          subtitle="Trailers for upcoming releases"
          type="carousel"
          data={upcoming.data}
          loading={upcoming.loading}
          id="carousel-upcoming"
        />
      </div>
    </div>
  );
};

export default App;
