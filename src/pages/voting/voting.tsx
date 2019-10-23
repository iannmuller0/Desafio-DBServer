import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Restaurantvotes from '../../components/RestaurantVotes/RestaurantVotes';
import { Container } from 'react-grid-system';
import { Div } from './voting.style';

const Voting = () => {
  const [RestaurantVoteList, setRestaurantVoteList] = useState([
    { name: 'Mister X', votes: 1},
    { name: 'Mr. Chau', votes: 0},
    { name: 'Guacamole', votes: 0},
    { name: 'Cachorro do Gordo', votes: 2},
  ]);

  const vote = (index: number) => {
    const restaurants = [...RestaurantVoteList];
    restaurants[index].votes = restaurants[index].votes+1;
    setRestaurantVoteList(restaurants);
  }

  return (
    <Container>
      <Navbar />
      <Div>
        <Restaurantvotes onClick={vote} RestaurantVoteList={RestaurantVoteList} />
      </Div>
    </Container>
  );
};

export default Voting;
