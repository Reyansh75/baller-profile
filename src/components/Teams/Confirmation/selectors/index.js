export default state => ({
  team: state.team.data,
  user: state.user.data,
  isLoading: state.user.isLoading || state.team.isLoading,
});
