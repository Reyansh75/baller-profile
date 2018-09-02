import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Container, Content } from 'native-base';

import styles from '../common/styles';

import { UppercasedText } from '../../common/components';

import images from '../../../static/images';
import { paths } from '../../../common/constants';

class Notified extends React.Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <Content style={styles.marginBottom50}>
          <View style={styles.displayFlexCenterRow}>
            <UppercasedText style={styles.almostThereTitle}>
              You&#39;re almost there!
            </UppercasedText>
          </View>
          <View style={[styles.TeamsConfirmationPicContainer, styles.my70]}>
            <Image
              style={[styles.teamCardImage, styles.borderRadiusCircle]}
              source={images.aftv}
              resizeMode="contain"
            />
          </View>
          <View style={styles.TeamsConfirmationMessageContainer}>
            <Text style={[styles.TeamsConfirmationSecondaryText, { fontFamily: 'calibri-italic' }]}>
              The AFTV FC team captain and team admins have been notified... They will add you to the squad as soon as possible!
            </Text>
          </View>
        </Content>
        <View style={styles.footer}>
          <TouchableOpacity onPress={() => navigation.navigate(paths.client.WhatsNext)} style={styles.footerButton}>
            <UppercasedText style={styles.bottomMainButtonTextConfirmation}>
              Done
            </UppercasedText>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}

Notified.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};

export default Notified;
