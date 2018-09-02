import PropTypes from 'prop-types';
import React from 'react';
import { View, Image, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { Icon } from 'native-base';

import styles from './styles';

import { UppercasedText } from '../../common/components';

import images from '../../../static/images';

import { paths } from '../../../common/constants';

class WhatsNext extends React.Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    const { navigation } = this.props;

    return (
      <ImageBackground
        source={images.authBg1}
        style={styles.backgroundImageSize}
        imageStyle={styles.backgroundImageStyle}
      >
        <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.contentContainer}>
            <View style={styles.headerContainer}>
              <Image
                style={styles.logoWelcome}
                source={images.logo}
                resizeMode="contain"
              />
            </View>
            <View style={styles.flex025}>
              <UppercasedText style={[styles.display1Welcome]}>
                Whats next?
              </UppercasedText>
            </View>
            <View style={[styles.buttonContainer, styles.flex1]}>
              <TouchableOpacity style={styles.submitButton}>
                <UppercasedText style={styles.submitButtonText}>
                  Why use BallerProfile?
                </UppercasedText>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate(paths.client.ProfilesView)} style={[styles.submitButton, styles.my20, styles.backgroundRed]}>
                <UppercasedText style={styles.submitButtonText}>
                  Visit my profile page
                </UppercasedText>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.push(paths.client.TeamsCreation)} style={[styles.submitButton, styles.backgroundWhite]}>
                <UppercasedText style={[styles.submitButtonText, styles.colorBlack]}>
                  Create a fantasy team
                </UppercasedText>
              </TouchableOpacity>
            </View>
          </ScrollView>
          <View style={[styles.headerCloseContainer]}>
            <TouchableOpacity onPress={() => navigation.navigate(paths.client.TeamsSelection)}>
              <Icon style={styles.headerIcon} type="EvilIcons" name="close" />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

WhatsNext.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};

export default WhatsNext;
