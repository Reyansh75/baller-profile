export default state => ({
  team: state.team.data,
  players: state.team.players,
  isLoading: state.team.isLoading || state.user.isLoading,
});
