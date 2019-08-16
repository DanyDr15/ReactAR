import React from 'react';
import { Button} from 'reactstrap';
import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
  <Button color="primary" size="lg" type="button" onClick={firebase.doSignOut}>
    Salir
  </Button>
);

export default withFirebase(SignOutButton);
