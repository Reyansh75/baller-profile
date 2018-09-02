import { actions, paths } from '../common/constants';

export default {
  getLeagues: () => ({
    [actions.API_CALL]: {
      types: [
        actions.LEAGUES_GET_REQUEST,
        actions.LEAGUES_GET_SUCCESS,
        actions.LEAGUES_GET_FAILURE,
      ],
      promise: client => client.get(paths.api.LEAGUES),
    },
  }),
};
