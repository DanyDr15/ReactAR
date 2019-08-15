import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
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



    

  
    
//<Link to={ROUTES.LANDING}>Realidad Aumentada</Link>
//<Link to={ROUTES.HOME}>Inicio</Link>

const NavigationAuth = () => (
  <div>
    <Navbar color="faded" light>
    <NavbarBrand href="/" className="mr-auto">Menu</NavbarBrand>
      
              <Nav navbar>
                  <NavItem>
                  <NavLink href="/">Portada</NavLink>
                  </NavItem>

                  <NavItem>
                <Link to={ROUTES.AR}>Realidad Aument</Link>
                  </NavItem>

                  <NavItem>
                
                <NavLink href="/home">Inicio</NavLink>
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
        
      </Navbar>
 </div>
);

const NavigationNonAuth = () => (
  <div>
    <Navbar color="blue" light expand="md">
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
