import { actions } from '../../common/constants';

const initialState = {
  data: {},
  isLoading: false,
  hasFailedToLoad: false,
  players: [],
};

const actionMap = {
  [actions.TEAM_GET_REQUEST]: state => ({ ...state, isLoading: true }),
  [actions.TEAM_GET_SUCCESS]: (state, { result }) => ({ ...state, data: result.data, isLoading: false }),
  [actions.TEAM_GET_REQUEST]: state => ({ ...state, isLoading: false }),

  [actions.TEAM_GET_PLAYERS_REQUEST]: state => ({ ...state, isLoading: true }),
  [actions.TEAM_GET_PLAYERS_SUCCESS]: (state, { result }) => ({ ...state, isLoading: false, players: result.data }),
  [actions.TEAM_GET_PLAYERS_FAILURE]: state => ({ ...state, isLoading: false }),
};

export default (state = initialState, action) => {
  if (actionMap[action.type]) {
    return actionMap[action.type](state, action);
  }

  return state;
};
