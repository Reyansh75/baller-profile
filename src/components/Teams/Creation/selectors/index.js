import { get, map } from 'lodash';

import { forms, formats } from '../../../../common/constants';

export default state => ({
  values: get(state, `forms.data[${forms.TEAMS_CREATION}].values`, {}),
  leaguesOptions: map(state.leagues.data, league => ({ label: league.league_name, value: league.id })),
  nationsOptions: map(state.nations.data, nation => ({ label: nation.country, value: nation.id })),
  formatsOptions: map(formats, format => ({ label: format.label, value: format.value })),
});
