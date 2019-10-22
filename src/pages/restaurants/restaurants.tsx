import React from 'react';
import RestaurantList from '../../mockData/RestaurantList';
import Navbar from '../../components/Navbar/Navbar';
import { map } from 'lodash';
import { Container } from 'react-grid-system';

const Restaunt = () => {
  return (
    <Container>
      <Navbar />
      <ul>
        { 
          map(RestaurantList, (restaunt: any) => (
            <li key={restaunt.id}>{restaunt.name} - {restaunt.address}</li>
          ))
        }
      </ul>
    </Container>
  );
};

export default Restaunt;