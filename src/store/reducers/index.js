import { combineReducers } from 'redux';

import authentication from './authentication';
import teams from './teams';
import forms from './forms';
import team from './team';
import user from './user';
import player from './player';
import leagues from './leagues';
import nations from './nations';

export default combineReducers({
  authentication,
  nations,
  teams,
  forms,
  leagues,
  team,
  user,
  player,
});
