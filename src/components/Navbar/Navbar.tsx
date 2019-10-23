import React from 'react';
import * as Styled from './Navbar.style';

const Layout = () => {
  return (
      <Styled.NavbarItems>
        <Styled.NavbarItem>
          <Styled.NavbarLink to='/restaurants'>Restaurantes</Styled.NavbarLink>
        </Styled.NavbarItem>
        <Styled.NavbarItem>
          <Styled.NavbarLink to='/voting'>Votação</Styled.NavbarLink>
        </Styled.NavbarItem>
        <Styled.NavbarItem>
          <Styled.NavbarLink to='/'>Login</Styled.NavbarLink>
        </Styled.NavbarItem>
      </Styled.NavbarItems>
  );
};

export default Layout;