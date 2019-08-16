import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem} from 'reactstrap';
import { Button, ButtonGroup } from 'reactstrap';
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
      
    <ButtonGroup>
               
                 <Button outline color="info">
                <Link to={ROUTES.LANDING}>Marcadores</Link>
                  </Button>
               

                  <Button outline color="info">
                <Link to={ROUTES.AR}>Realidad Aumentada</Link>
                  </Button>

                  <Button outline color="info">
                
                  <Link to={ROUTES.HOME}>Inicio</Link>
                </Button>

                <Button outline color="info">
                <Link to={ROUTES.ACCOUNT}>Cuenta</Link>
                </Button>

                <Button  outline color="info">
                <Link to={ROUTES.ADMIN} color="dark">Administrador</Link>
                </Button>
                

                <NavItem>
                <SignOutButton />
                </NavItem>
                </ButtonGroup>
        
      </Navbar>
 </div>
);

const NavigationNonAuth = () => (
  <div>
    <Navbar color="blue" light expand="md">
      <NavbarBrand href="/">AR</NavbarBrand>
            <Nav className="ml-auto" navbar>
           
           <NavItem>
           <Button color="warning"> <Link to={ROUTES.SIGN_IN}> Iniciar Sesion</Link></Button>
            </NavItem>
           </Nav>
    </Navbar>
    </div>
);


export default Navigation;
