import React from 'react';
import { View, Image, ImageBackground } from 'react-native';

import styles from '../common/styles';

import { UppercasedText } from '../../common/components';

import images from '../../../static/images';

const First = () => (
  <ImageBackground
    source={images.authBg2}
    style={styles.backgroundImageSize}
    imageStyle={styles.backgroundImageStyle}
  >
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <Image
            style={styles.logo}
            source={images.logo}
            resizeMode="contain"
          />
        </View>
        <View style={styles.flexContainer}>
          <UppercasedText style={styles.display1Step2}>
            Track your stats...
          </UppercasedText>
        </View>
      </View>
    </View>
  </ImageBackground>
);

export default First;
