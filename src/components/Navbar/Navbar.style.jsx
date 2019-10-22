import styled from 'styled-components';

export const NavbarItems = styled.ul`
  justify-content: flex-end;
  list-style-type: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid gray;
`;

export const NavbarItem = styled.li`
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const NavbarLink = styled.span`
  text-decoration: none;
  cursor: pointer;

  :hover {
    color: #777575;
  }
`;
