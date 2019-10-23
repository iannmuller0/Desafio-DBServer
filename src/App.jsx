import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Restaurants from './pages/restaurants/restaurants';
import Voting from './pages/voting/voting';
import Login from './pages/login/login';
import { ContextProvider } from './context';

const App = () => {
  const [user, setUser] = useState();

  const updateContextUser = (user) => {
    setUser(user);
  };

  return (
   <ContextProvider value={{user, updateContextUser}}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Login} />
        <Route path="/restaurants" component={Restaurants} />
        <Route path="/voting" component={Voting} />
      </Switch>
    </BrowserRouter>
  </ContextProvider>
  );
}

export default App;
