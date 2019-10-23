import styled from 'styled-components';
import { Container as GridContainer } from 'react-grid-system';

export const Container = styled(GridContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
`;

export const Button = styled.button`
  margin-bottom: 10px;
  padding: 10px;
  font-size: 20px;
  border-width: 1px;
  border-radius: 5px;
  border-style: solid;
  width: 100%;
  text-align: center;
  cursor: pointer;
`;

export const Input = styled.input`
  width: 100%;
  outline: none;
  padding:5px 0;
  border-width: 1px;
  border-radius: 4px;
  border-style: solid;
  margin-bottom: 12px;
`;
