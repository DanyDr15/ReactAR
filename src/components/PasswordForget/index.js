import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Button, Input } from 'reactstrap';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const PasswordForgetPage = () => (
  <div>
    <h1 align="center">Para restablecer contraseña ingrese su correo</h1>
    <PasswordForgetForm />
  </div>
);

const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email } = this.state;

    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, error } = this.state;

    const isInvalid = email === '';

    return (
      <Form onSubmit={this.onSubmit}>
       
        <FormGroup>
         <Input 
          name="email"
          value={this.state.email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        </FormGroup>
        <Button disabled={isInvalid} type="submit">
          Reset My Password
        </Button>

        {error && <p>{error.message}</p>}
      </Form>
    );
  }
}

const PasswordForgetLink = () => (
  <p align="center">
    <Link to={ROUTES.PASSWORD_FORGET}>Olvisaste la contraseña?</Link>
  </p>
);

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm, PasswordForgetLink };