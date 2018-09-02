import { validations } from '../../../common/utils';

export default {
  team_name: value => Promise.resolve(validations.isEmpty(value) ? 'Name is required' : ''),

  format: value => Promise.resolve(validations.isEmpty(value) ? 'Format is required' : ''),

  location: value => Promise.resolve(validations.isEmpty(value) ? 'Location is required' : ''),

  nickname: value => Promise.resolve(validations.isEmpty(value) ? 'Nickname is required' : ''),

  abbreviated_name: value => Promise.resolve(validations.isEmpty(value) ? 'Abbreviated name is required' : ''),
};
