import React, { useState, useContext, SyntheticEvent } from 'react'
import { Container, Button, Input } from './login.style';
import { Redirect } from 'react-router-dom';
import Users from '../../mockData/UsersList';
import Context from '../../context';
import { find } from 'lodash';

const Login = () => {
  const context = useContext(Context)
  const [redirect, setRedirect] = useState(false);

  const fakeLogin = (event: SyntheticEvent) => {
    event.preventDefault();

    const user = find(Users, {'name': context.user });
    if (user) {
      setRedirect(true);
    }
  };

  const handleInput = (event: any) => {
    context.updateContextUser(event.target.value);
  }

  return (
    <Container>
      <form onSubmit={fakeLogin}>
      <Input type='text' placeholder='Nome cadastrado' onChange={handleInput} />
      <Button onClick={fakeLogin}>Login</Button>
      </form>
      {redirect ? <Redirect to='/restaurants' /> : null}
    </Container>
  );
};

export default Login;
