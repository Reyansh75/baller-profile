import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { View, ScrollView, Image, Text, TouchableOpacity, StatusBar, ActivityIndicator } from 'react-native';
import { Container, Input, Item, Label } from 'native-base';

import selectors from './selectors';
import { TeamModal, TeamCard } from './components';

import styles from '../common/styles';

import { UppercasedText } from '../../common/components';

import actions from '../../../actions';
import images from '../../../static/images';
import { hashtag } from '../../../static/json';
import { paths } from '../../../common/constants';

class Selection extends React.Component {
  static navigationOptions = {
    header: null,
  }

  constructor() {
    super();

    this.state = {
      showModal: false,
      selectedTeam: undefined,
    };
  }

  componentDidMount() {
    const { getTeams } = this.props;

    StatusBar.setHidden(false);

    getTeams();
  }

  toggleModal = (team) => {
    const { showModal } = this.state;

    this.setState({
      showModal: !showModal,
      selectedTeam: team,
    });
  }

  render() {
    const { navigation, teams, isLoading, getTeamPlayers } = this.props;
    const { showModal, selectedTeam } = this.state;

    let content = (
      <View style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size={50} color="rgba(0,0,0,.6)" />
      </View>
    );

    if (!isLoading && teams) {
      content = (
        <React.Fragment>
          <TeamModal navigation={navigation} visible={showModal} selectedTeam={selectedTeam} toggleModal={this.toggleModal} />
          <Container>
            <View>
              <View style={styles.displayFlexCenterRow}>
                <UppercasedText style={styles.TeamsSelectionTitle}>
                  Find your team!
                </UppercasedText>
              </View>
              <View style={styles.displayFlexCenterRow}>
                <Item floatingLabel style={styles.findTeamItem}>
                  <Label style={styles.itemLabel}>
                    Type your team&#39;s name here...
                  </Label>
                  <Input />
                </Item>
              </View>
              <View style={styles.scrollerContainer}>
                <ScrollView
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  style={styles.teamScroller}
                >
                  {teams && teams.map(team => (
                    <TeamCard toggleModal={this.toggleModal} getTeamPlayers={getTeamPlayers} team={team} key={team.id} />
                  ))}
                </ScrollView>
              </View>
            </View>
            <View style={styles.bottomActions}>
              <TouchableOpacity onPress={() => navigation.navigate(paths.client.TeamsCreation)} style={styles.bottomMainButton}>
                <UppercasedText style={styles.bottomMainButtonText}>
                I can&#39;t find my team!
                </UppercasedText>
              </TouchableOpacity>
              <Text style={styles.bottomSecondaryText}>
              I don&#39;t play anymore!
              </Text>
            </View>
          </Container>
        </React.Fragment>
      );
    }

    return content;
  }
}

Selection.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
  getTeams: PropTypes.func.isRequired,
  teams: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  isLoading: PropTypes.bool.isRequired,
  getTeamPlayers: PropTypes.func.isRequired,
};

export default connect(
  selectors,
  {
    ...actions.teams,
    ...actions.team,
  },
)(Selection);
