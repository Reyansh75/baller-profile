import { actions } from '../../common/constants';

const initialState = {
  data: {},
  isLoading: false,
};

const actionMap = {
  [actions.USER_AUTH_GET_REQUEST]: state => ({ ...state, isLoading: true }),
  [actions.USER_AUTH_GET_SUCCESS]: (state, { result }) => ({ ...state, isLoading: false, data: result.data }),
  [actions.USER_AUTH_GET_FAILURE]: state => ({ ...state, isLoading: false }),

  [actions.USER_GET_REQUEST]: state => ({ ...state, isLoading: true }),
  [actions.USER_GET_SUCCESS]: (state, { result }) => ({ ...state, isLoading: false, data: result.data }),
  [actions.USER_GET_FAILURE]: state => ({ ...state, isLoading: false }),
};

export default (state = initialState, action) => {
  if (actionMap[action.type]) {
    return actionMap[action.type](state, action);
  }

  return state;
};
