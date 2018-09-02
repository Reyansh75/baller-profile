import PropTypes from 'prop-types';
import React from 'react';
import Modal from 'react-native-modalbox';
import { isEqual, isEmpty } from 'lodash';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Icon, Thumbnail } from 'native-base';

import selectors from './selectors';

import styles from '../../../common/styles';

import { UppercasedText } from '../../../../common/components';

import actions from '../../../../../actions';
import images from '../../../../../static/images';
import { paths } from '../../../../../common/constants';

class TeamModal extends React.Component {
  componentWillReceiveProps(newProps) {
    const { selectedTeam, getUser } = this.props;

    if (!isEqual(newProps.selectedTeam, selectedTeam) && newProps.selectedTeam && !isEmpty(newProps.selectedTeam)) {
      getUser(newProps.selectedTeam.captain);
    }
  }

  render() {
    const { visible, toggleModal, selectedTeam = {}, navigation, user } = this.props;

    return (
      <Modal
        isOpen={visible}
        style={styles.modal}
      >
        <View style={styles.modalContent}>
          {selectedTeam && visible ? (
            <React.Fragment>
              <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => toggleModal()}>
                  <Icon style={styles.headerIcon} type="EvilIcons" name="close" />
                </TouchableOpacity>
              </View>
              <View style={styles.modalContainer}>
                <View style={styles.displayFlexCenterRow}>
                  <UppercasedText style={styles.teamModalTitle}>
                    {selectedTeam.team_name}
                  </UppercasedText>
                </View>
                <View style={styles.TeamsSelectionModalCard}>
                  <View style={styles.TeamsSelectionModalCardImage}>
                    <Image
                      style={styles.teamCardImage}
                      source={selectedTeam.team_image ? selectedTeam.team_image : images.team}
                      resizeMode="cover"
                    />
                  </View>
                  <View style={styles.displayFlexCenterColumn}>
                    <Text style={styles.TeamsSelectionModalDetailsText}>
                      {selectedTeam.players}
                    </Text>
                    <Text style={styles.TeamsSelectionModalDetailsText}>
                      {`Baller${selectedTeam.players > 1 ? 's' : ''}`}
                    </Text>
                  </View>
                  <View style={styles.displayFlexCenterColumn}>
                    {selectedTeam.league && (
                    <View style={styles.teamModalLeagueContainer}>
                      <Thumbnail style={styles.thumbnailProp} small source={images.league} />
                      <Text style={styles.teamModalLeague}>
                        {selectedTeam.league}
                      </Text>
                    </View>
                    )}
                    <View style={styles.teamModalProps}>
                      <Thumbnail style={styles.thumbnailProp} small source={user.profile_image ? user.profile_image : images.user} />
                      <Text style={styles.teamModalLeague}>
                        {`${user.first_name} ${user.last_name}`}
                        (Captain)
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.footerModal}>
                <TouchableOpacity onPress={() => navigation.navigate(paths.client.TeamsJoin)} style={styles.footerButtonModal}>
                  <UppercasedText style={styles.bottomMainButtonTextModal}>
                I play for this team
                  </UppercasedText>
                </TouchableOpacity>
              </View>
            </React.Fragment>
          )
            : null
    }
        </View>
      </Modal>
    );
  }
}

TeamModal.defaultProps = {
  selectedTeam: undefined,
};

TeamModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  selectedTeam: PropTypes.shape({}),
  toggleModal: PropTypes.func.isRequired,
  navigation: PropTypes.shape({}).isRequired,
};

export default connect(
  selectors,
  {
    ...actions.user,
  },
)(TeamModal);
