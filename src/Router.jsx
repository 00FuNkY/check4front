/* eslint-disable react/jsx-no-undef */
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Conversion from './components/Conversion';
import Properties from './components/Properties';
import RoyalFamily from './components/RoyalFamily';

function Router() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/">Nos Biens</Link>
          </li>
          <li>
            <Link to="/RoyalFamily">Nous</Link>
          </li>
          <li>
            <Link to="/Conversion">Conversion</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/RoyalFamily">
            <RoyalFamily />
          </Route>
          <Route path="/Conversion">
            <Conversion />
          </Route>
          <Route exact path="/">
            <Properties />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Router;
