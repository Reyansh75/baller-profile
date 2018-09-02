import { actions, paths } from '../common/constants';

export default {
  createRelationship: id => ({
    [actions.API_CALL]: {
      types: [
        actions.RELATIONSHIP_CREATE_REQUEST,
        actions.RELATIONSHIP_CREATE_SUCCESS,
        actions.RELATIONSHIP_CREATE_FAILURE,
      ],
      promise: client => client.post(paths.api.RELATIONSHIPS, { idUserToFollow: id }),
    },
  }),
};
