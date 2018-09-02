import { actions, paths } from '../common/constants';

export default {
  getNations: () => ({
    [actions.API_CALL]: {
      types: [
        actions.NATIONS_GET_REQUEST,
        actions.NATIONS_GET_SUCCESS,
        actions.NATIONS_GET_FAILURE,
      ],
      promise: client => client.get(paths.api.NATIONS),
    },
  }),
};
