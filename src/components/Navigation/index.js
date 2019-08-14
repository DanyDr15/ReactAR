import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
 } from 'reactstrap';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';


const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
  <div>
     <Nav pills>
        <NavItem>
          <Link to={ROUTES.LANDING}>Realidad Aumentada</Link>
        </NavItem>

        <NavItem>
      <Link to={ROUTES.AR}>Realidad Aument</Link>
        </NavItem>

        <NavItem>
      <Link to={ROUTES.HOME}>Inicio</Link>
      </NavItem>

      <NavItem>
      <Link to={ROUTES.ACCOUNT}>Cuenta</Link>
      </NavItem>

      <NavItem>
      <Link to={ROUTES.ADMIN}>Administrador</Link>
      </NavItem>

      <NavItem>
      <SignOutButton />
      </NavItem>
    </Nav>
 </div>
);

const NavigationNonAuth = () => (
  <div>
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">AR</NavbarBrand>
            <Nav className="ml-auto" navbar>
           
           <NavItem>
              <Link to={ROUTES.SIGN_IN}> Iniciar Sesion</Link>
            </NavItem>
           </Nav>
    </Navbar>
    </div>
);

export default Navigation;
