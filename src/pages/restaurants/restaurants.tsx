import React from 'react';
import ShowRestaurantList from '../../components/ShowRestaurantsList/ShowRestaurantList';
import Navbar from '../../components/Navbar/Navbar';
import { Container } from 'react-grid-system';

const Restaunt = () => {
  return (
    <Container>
      <Navbar />
        <ShowRestaurantList />
    </Container>
  );
};

export default Restaunt;
