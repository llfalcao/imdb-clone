import { useState } from 'react';
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

  function onSignOut() {
    signOutUser();
    setUser({ didAuth: false });
  }

  return (
    <Router>
      <Header user={user} onSignOut={onSignOut} />
      <Switch>
        <Route exact path="/imdb-clone" component={App}></Route>
        <Route exact path="/imdb-clone/watchlist" component={Watchlist}></Route>
        <Route exact path="/imdb-clone/sign-in" component={SignIn}></Route>
      </Switch>
    </Router>
  );
};

export default Routes;
