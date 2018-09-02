import PropTypes from 'prop-types';
import React from 'react';
import { merge } from 'lodash';
import { TouchableOpacity, View, Text, Image } from 'react-native';

import styles from '../../../common/styles';

import images from '../../../../../static/images';

class TeamCard extends React.Component {
  constructor() {
    super();

    this.state = {
      players: 0,
    };
  }

  componentDidMount() {
    const { team, getTeamPlayers } = this.props;

    getTeamPlayers(team.id)
      .then(({ result }) => this.setState({ players: result.data.length }));
  }

  render() {
    const { team, toggleModal } = this.props;
    const { players } = this.state;

    return (
      <TouchableOpacity onPress={() => toggleModal(merge(team, { players }))} key={team.id}>
        <View style={styles.TeamsSelectionCard}>
          <View style={styles.TeamsSelectionCardImage}>
            <Image
              style={styles.teamCardImage}
              source={team.team_image ? team.team_image : images.team}
              resizeMode="cover"
            />
          </View>
          <View style={styles.displayFlexCenterColumn}>
            <Text style={styles.TeamsSelectionCardDetailsText}>
              {`${players} baller${players.length > 1 ? 's' : ''}`}
            </Text>
            <Text style={styles.TeamsSelectionCardDetailsText}>
              {team.team_name}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

TeamCard.propTypes = {
  team: PropTypes.shape({}).isRequired,
  getTeamPlayers: PropTypes.func.isRequired,
};

export default TeamCard;
