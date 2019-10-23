import React from 'react';
import { map } from 'lodash';
import * as Styled from './RestaurantVotes.style';
import IRestaurantVotes from './RestaurantVotes.interface'

const Restaurantvotes = ({ onClick, RestaurantVoteList }: IRestaurantVotes) => (
  <>
    {
      map(RestaurantVoteList, (restaurant, index) => (
        <Styled.Div key={index}>
          <Styled.Img src={restaurant.image} />
          <Styled.Span>
            {restaurant.name}
          </Styled.Span>
          <Styled.Span>
            votos: {RestaurantVoteList[index].votes}
          </Styled.Span>
          { restaurant.hasBeenPicked 
            ?
              <span>Já escolhido nessa semana</span>
            :
              <Styled.Button onClick={() => onClick(index)}>VOTE</Styled.Button>
          } 
        </Styled.Div>
      ))
    }
  </>
);

export default Restaurantvotes;
