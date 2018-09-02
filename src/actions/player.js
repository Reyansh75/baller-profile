import { actions, paths } from '../common/constants';

export default {
  getPlayer: id => ({
    [actions.API_CALL]: {
      types: [
        actions.PLAYER_GET_REQUEST,
        actions.PLAYER_GET_SUCCESS,
        actions.PLAYER_GET_FAILURE,
      ],
      promise: client => client.get(paths.build(paths.api.PLAYERS_ID, id)),
    },
  }),
};
