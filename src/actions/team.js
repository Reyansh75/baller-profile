import { actions, paths } from '../common/constants';

export default {
  createTeam: data => ({
    [actions.API_CALL]: {
      types: [
        actions.TEAMS_CREATE_REQUEST,
        actions.TEAMS_CREATE_SUCCESS,
        actions.TEAMS_CREATE_FAILURE,
      ],
      promise: client => client.post(paths.api.TEAMS_CREATE, data),
    },
  }),

  getTeam: id => ({
    [actions.API_CALL]: {
      types: [
        actions.TEAM_GET_REQUEST,
        actions.TEAM_GET_SUCCESS,
        actions.TEAM_GET_FAILURE,
      ],
      promise: client => client.get(paths.build(paths.api.TEAMS_ID, id)),
    },
  }),

  getTeamPlayers: id => ({
    [actions.API_CALL]: {
      types: [
        actions.TEAM_GET_PLAYERS_REQUEST,
        actions.TEAM_GET_PLAYERS_SUCCESS,
        actions.TEAM_GET_PLAYERS_FAILURE,
      ],
      promise: client => client.get(paths.build(paths.api.TEAMS_ID_PLAYERS, id)),
    },
  }),
};
