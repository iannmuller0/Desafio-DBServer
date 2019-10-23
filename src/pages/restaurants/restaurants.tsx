import React from 'react';
import ShowRestaurantList from '../../components/ShowRestaurantsList/ShowRestaurantList';
import Navbar from '../../components/Navbar/Navbar';
import { Container } from 'react-grid-system';

const Restaurant = () => {
  return (
    <Container>
      <Navbar />
        <h1>Restaurantes</h1>
        <ShowRestaurantList />
    </Container>
  );
};

export default Restaurant;
