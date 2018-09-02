import { actions, paths } from '../common/constants';

export default {
  getTeams: () => ({
    [actions.API_CALL]: {
      types: [
        actions.TEAMS_GET_REQUEST,
        actions.TEAMS_GET_SUCCESS,
        actions.TEAMS_GET_FAILURE,
      ],
      promise: client => client.get(paths.api.TEAMS),
    },
  }),
};
