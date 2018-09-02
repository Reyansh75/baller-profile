import PropTypes from 'prop-types';
import React from 'react';
import { AsyncStorage, View } from 'react-native';

import { paths } from '../../../common/constants';

class Selection extends React.Component {
  componentDidMount() {
    const { navigation } = this.props;

    AsyncStorage.getItem('token')
      .then((token) => {
        if (token) {
          navigation.navigate('Auth');
        } else {
          navigation.navigate('App');
        }
      });
  }

  render() {
    return (
      <View />
    );
  }
}

Selection.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};

export default Selection;
