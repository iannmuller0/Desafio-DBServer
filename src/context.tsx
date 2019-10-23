import React from 'react';

interface IContext {
  user: string,
  updateContextUser(user: string): void
}

const Context = React.createContext<IContext>({user: '', updateContextUser: () => {} });

export const ContextProvider = Context.Provider;
export const ContextConsumer = Context.Consumer;
export default Context;