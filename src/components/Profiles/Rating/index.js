import React from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Thumbnail, Right, Icon } from 'native-base';

import styles from './styles';

import { UppercasedText } from '../../common/components';

import images from '../../../static/images';

class Rating extends React.Component {
  static navigationOptions = {
    headerTitle: (
      <Text style={styles.navigationText}>
        Rate this player
      </Text>
    ),
    headerStyle: {
      backgroundColor: '#0071c0',
    },
    headerTintColor: 'white',
  }

  render() {
    return (
      <React.Fragment>
        <View style={styles.ratingContainer}>
          <ScrollView style={styles.mb40}>
            <View style={styles.ratingContent}>
              <View style={styles.alternatePlayerCard}>
                <View style={styles.flexCenterRow}>
                  <View style={styles.borderRadiusCircle}>
                    <Thumbnail
                      style={[styles.profileImage]}
                      source={images.lm}
                    />
                  </View>
                  <View style={styles.playerCardName}>
                    <View style={styles.flexCenterRow}>
                      <Text style={styles.nameText}>
                        Dimitri Gbo
                      </Text>
                    </View>
                    <Text style={styles.descText}>
                      Centre Midfielder
                    </Text>
                  </View>
                </View>
                <View style={styles.flexItemsEndColumn}>
                  <Text style={styles.attributeText}>
                    12 Attributes
                  </Text>
                  <Text style={styles.attributeText}>
                    105 Ratings
                  </Text>
                </View>
              </View>
              <View style={styles.hrLineSecondary} />
              <View style={styles.skillsContainer}>
                <View style={styles.skillPillContainer}>
                  <TouchableOpacity style={[styles.skillPill]}>
                    <Text style={styles.skillPillText}>
                      Dribbling
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.skillPillScore]}>
                    <Text style={styles.skillPillText}>
                      19
                    </Text>
                  </TouchableOpacity>
                  <Right>
                    <Icon style={[styles.colorLightBlue, styles.fontSize30, styles.ml10]} name="plus" type="EvilIcons" />
                  </Right>
                </View>
                <View style={styles.skillPillContainer}>
                  <TouchableOpacity style={[styles.skillPill]}>
                    <Text style={styles.skillPillText}>
                      Shot Accuracy
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.skillPillScore]}>
                    <Text style={styles.skillPillText}>
                      23
                    </Text>
                  </TouchableOpacity>
                  <Right>
                    <Icon style={[styles.colorLightBlue, styles.fontSize30, styles.ml10]} name="plus" type="EvilIcons" />
                  </Right>
                </View>
                <View style={styles.skillPillContainer}>
                  <TouchableOpacity style={[styles.skillPill]}>
                    <Text style={styles.skillPillText}>
                      Tackling
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.skillPillScore]}>
                    <Text style={styles.skillPillText}>
                      19
                    </Text>
                  </TouchableOpacity>
                  <Right>
                    <Icon style={[styles.colorLightBlue, styles.fontSize30, styles.ml10]} name="plus" type="EvilIcons" />
                  </Right>
                </View>
                <View style={styles.skillPillContainer}>
                  <TouchableOpacity style={[styles.skillPill]}>
                    <Text style={styles.skillPillText}>
                      Mentar Strength
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.skillPillScore]}>
                    <Text style={styles.skillPillText}>
                      14
                    </Text>
                  </TouchableOpacity>
                  <Right>
                    <Icon style={[styles.colorLightBlue, styles.fontSize30, styles.ml10]} name="plus" type="EvilIcons" />
                  </Right>
                </View>
              </View>
              <View style={styles.hrLineSecondary} />
              <View style={styles.attackingContainer}>
                <Text style={styles.attackingText}>
                  Attacking
                </Text>
              </View>
              <View style={styles.hrLineSecondary} />
              <View style={styles.secondarySkillsContainer}>
                <View style={styles.secondarySkillsContent}>
                  <TouchableOpacity style={styles.skillButton}>
                    <Text style={styles.skillButtonText}>
                      Finishing
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.skillButton}>
                    <Text style={styles.skillButtonText}>
                      Long Range Shots
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.skillButton}>
                    <Text style={styles.skillButtonText}>
                      Dribbling
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.skillsButtonContentAlternate}>
                  <TouchableOpacity style={styles.skillButtonAlternate}>
                    <Text style={styles.skillButtonText}>
                      Counterattacking
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.skillButton}>
                    <Text style={styles.skillButtonText}>
                      Assists
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.skillButton}>
                    <Text style={styles.skillButtonText}>
                      Through Balls
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.skillsButtonContentAlternate}>
                  <TouchableOpacity style={styles.skillButtonAlternate}>
                    <Text style={styles.skillButtonText}>
                      Heading on Goal
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.skillButtonAlternate}>
                    <Text style={styles.skillButtonText}>
                      Off Ball Runs
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.footerButton}>
            <UppercasedText style={styles.bottomMainButtonText}>
              Done
            </UppercasedText>
          </TouchableOpacity>
        </View>
      </React.Fragment>
    );
  }
}

export default Rating;
