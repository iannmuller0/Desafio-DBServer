import React, { useState, useContext } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Restaurantvotes from '../../components/RestaurantVotes/RestaurantVotes';
import { Container } from 'react-grid-system';
import { Div } from './voting.style';
import Context from '../../context';
import { find } from 'lodash';
import Users from '../../mockData/UsersList';

const Voting = () => {
  const context = useContext(Context)
  const [RestaurantVoteList, setRestaurantVoteList] = useState([
    { name: 'Mister X', votes: 1, hasBeenPicked: false},
    { name: 'Mr. Chau', votes: 0, hasBeenPicked: false},
    { name: 'Guacamole', votes: 0, hasBeenPicked: true},
    { name: 'Cachorro do Gordo', votes: 2, hasBeenPicked: false},
  ]);

  const vote = (index: number) => {
    const restaurants = [...RestaurantVoteList];
    const user = find(Users, {'name': context.user });

    if (user && !user.hasVoted) {
      user.hasVoted = true;
      restaurants[index].votes = restaurants[index].votes+1;
      setRestaurantVoteList(restaurants);
    }
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
