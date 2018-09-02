import { actions, paths } from '../common/constants';

export default {
  getAuthUser: () => ({
    [actions.API_CALL]: {
      types: [
        actions.USER_AUTH_GET_REQUEST,
        actions.USER_AUTH_GET_SUCCESS,
        actions.USER_AUTH_GET_FAILURE,
      ],
      promise: client => client.get(paths.api.USER_AUTH),
    },
  }),

  getUser: id => ({
    [actions.API_CALL]: {
      types: [
        actions.USER_GET_REQUEST,
        actions.USER_GET_SUCCESS,
        actions.USER_GET_FAILURE,
      ],
      promise: client => client.get(paths.build(paths.api.USERS_ID, id)),
    },
  }),
};
