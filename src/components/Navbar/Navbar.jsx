import React from 'react';
import * as Styled from './Navbar.style';

const Layout = () => {
  return (
      <Styled.NavbarItems>
        <Styled.NavbarItem>
          <Styled.NavbarLink href='#'>Restaurantes</Styled.NavbarLink>
        </Styled.NavbarItem>
        <Styled.NavbarItem>
          <Styled.NavbarLink href='#'>Ver votação</Styled.NavbarLink>
        </Styled.NavbarItem>
        <Styled.NavbarItem>
          <Styled.NavbarLink href='#'>Login</Styled.NavbarLink>
        </Styled.NavbarItem>
      </Styled.NavbarItems>
  );
};

export default Layout;