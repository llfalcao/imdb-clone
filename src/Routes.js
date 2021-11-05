import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';
import Header from './components/Header';
import Watchlist from './pages/Watchlist';
import SignIn from './pages/SignIn';
import { signOutUser } from './firebase';

const Routes = () => {
  const [user, setUser] = useState({
    didAuth: false,
  });

  useEffect(() => {
    if (localStorage.didAuth) {
      setUser({ didAuth: true });
    }
  }, []);

  function onSignIn() {
    setUser({ didAuth: true });
    localStorage.setItem('didAuth', user.didAuth.toString());
  }

  function onSignOut() {
    signOutUser();
    setUser({ didAuth: false });
    localStorage.removeItem('didAuth');
  }

  return (
    <Router>
      <Header user={user} onSignIn={onSignIn} onSignOut={onSignOut} />
      <Switch>
        <Route exact path="/imdb-clone" component={App}></Route>
        <Route exact path="/imdb-clone/watchlist" component={Watchlist}></Route>
        <Route
          exact
          path="/imdb-clone/sign-in"
          render={(props) => <SignIn onSignIn={onSignIn} />}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
