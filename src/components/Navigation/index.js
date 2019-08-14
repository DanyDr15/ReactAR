import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
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
    <Button outline color="primary">
      <Link to={ROUTES.LANDING}>Realidad Aumentada</Link>
      </Button>{' '}

      <Button outline color="primary">
      <Link to={ROUTES.AR}>Realidad Aument</Link>
      </Button>{' '}

      <Button outline color="secondary">
      <Link to={ROUTES.HOME}>Inicio</Link>
      </Button>{' '}

   <Button outline color="primary">
      <Link to={ROUTES.ACCOUNT}>Cuenta</Link>
      </Button>{' '}

    <Button outline color="secondary">
      <Link to={ROUTES.ADMIN}>Administrador</Link>
      </Button>{' '}

    <li>
      <SignOutButton />
    </li>
 </div>
);

const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </li>
  </ul>
);

export default Navigation;
