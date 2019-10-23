export default interface IRestaurantVotes {
  onClick(index: number): void,
  RestaurantVoteList: {
    id: number,
    name: string,
    address: string,    
    hasBeenPicked: boolean,
    image: string,
    votes: number,
  }[],
}
