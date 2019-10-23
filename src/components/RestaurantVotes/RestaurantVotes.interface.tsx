export default interface IRestaurantVotes {
  onClick(index: number): void,
  RestaurantVoteList: { name: string, votes: number, hasBeenPicked: boolean }[],
}
