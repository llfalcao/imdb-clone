import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';
import Watchlist from './pages/Watchlist';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App}></Route>
        <Route path="/watchlist" component={Watchlist}></Route>
      </Switch>
    </Router>
  );
};

export default Routes;
