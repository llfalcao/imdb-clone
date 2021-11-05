import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';
import Header from './components/Header';
import Watchlist from './pages/Watchlist';
import { signInAsGuest, signOutUser } from './firebase';

const Routes = () => {
  const [user, setUser] = useState({ didAuth: false });

  useEffect(() => {
    if (localStorage.didAuth) {
      setUser({ didAuth: true });
    }
  }, []);

  function onSignIn() {
    signInAsGuest();
    setUser({ didAuth: true });
  }

  function onSignOut() {
    signOutUser();
    setUser({ didAuth: false });
  }

  return (
    <Router>
      <Header user={user} onSignIn={onSignIn} onSignOut={onSignOut} />
      <Switch>
        <Route exact path="/imdb-clone" component={App}></Route>
        <Route path="/imdb-clone/watchlist" component={Watchlist}></Route>
      </Switch>
    </Router>
  );
};

export default Routes;