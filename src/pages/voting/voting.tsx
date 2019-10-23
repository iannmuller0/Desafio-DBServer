import React, { useState, useContext } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Restaurantvotes from '../../components/RestaurantVotes/RestaurantVotes';
import { Container } from 'react-grid-system';
import { Div } from './voting.style';
import Context from '../../context';
import { find } from 'lodash';
import Users from '../../mockData/UsersList';
import restaurantsList from '../../mockData/RestaurantList';


const Voting = () => {
  const context = useContext(Context)
  const [RestaurantVoteList, setRestaurantVoteList] = useState(restaurantsList);

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
      <h1>Vote no restaurante que você quer ir almoçar</h1>
      <Div>
        <Restaurantvotes onClick={vote} RestaurantVoteList={RestaurantVoteList} />
      </Div>
    </Container>
  );
};

export default Voting;
