import React from 'react';
import RestaurantList from '../../mockData/RestaurantList';
import { map } from 'lodash';
import * as Styled from './ShowRestaurantList.style';

const ShowRestaurantList = () => (
  <Styled.RestaurantsItems>
    {
      map(RestaurantList, (restaurant: {id: number, name: string, address: string}) => (
        <Styled.RestaurantsItem key={restaurant.id}>{restaurant.name}: {restaurant.address}</Styled.RestaurantsItem>
      ))
    }
  </Styled.RestaurantsItems>
);

export default ShowRestaurantList;
