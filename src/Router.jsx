/* eslint-disable react/jsx-no-undef */
import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Conversion from './components/Conversion';
import Properties from './components/Properties';
import RoyalFamily from './components/RoyalFamily';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import Home from './components/Home';
import Auth from './components/Auth';
import Admin from './components/Admin';

function Router() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <BrowserRouter>
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Malooo</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/Properties">Nos biens</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/RoyalFamily">Nous</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Conversion">Conversion</NavLink>
              </NavItem>
            </Nav>
            <Nav navbar>
              <NavItem>
                <NavLink href="/Connexion">Se Connecter</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        <Switch>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/RoyalFamily">
            <RoyalFamily />
          </Route>
          <Route path="/Conversion">
            <Conversion />
          </Route>
          <Route path="/Properties">
            <Properties />
          </Route>
          <Route path="/Connexion">
            <Auth />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Router;
