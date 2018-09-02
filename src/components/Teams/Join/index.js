import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Container, Content } from 'native-base';

import styles from '../common/styles';

import { UppercasedText } from '../../common/components';

import images from '../../../static/images';
import { paths } from '../../../common/constants';

class Join extends React.Component {
  static navigationOptions = {
    headerTitle: (
      <View style={styles.displayFlexCenterRowCreation}>
        <Text style={styles.headerMain}>
          AFTV FC SQUAD
        </Text>
      </View>
    ),
  }

  constructor(props) {
    super(props);

    this.state = {
      1: false,
      2: false,
      3: false,
      4: false,
    };
  }

  toggleFollow = (id) => {
    this.setState({
      [id]: !this.state[id],
    });
  }

  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <Content>
          <TouchableOpacity onPress={() => this.setState({ 1: true, 2: true, 3: true, 4: true })}>
            <View style={[{ backgroundColor: '#0071c0' }, styles.displayFlexCenterRowCreation, styles.py20]}>
              <UppercasedText style={styles.followAllText}>
                Click to follow all players
              </UppercasedText>
            </View>
          </TouchableOpacity>
          <View style={[{ borderTopWidth: 0.6, borderColor: 'rgba(0,0,0,.3)', borderBottomWidth: 0.6 }, styles.displayFlexCenterRowCreation, styles.py20]}>
            <UppercasedText style={styles.TeamsJoinMainText}>
              2&nbsp;
            </UppercasedText>
            <UppercasedText style={styles.TeamsJoinSecondaryText}>
              Goalkeepers
            </UppercasedText>
          </View>
          <View style={[{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }]}>
            <TouchableOpacity style={{ paddingTop: 15, paddingBottom: 15, flex: 1, borderRightWidth: 0.6, borderRightColor: 'rgba(0,0,0,.3)' }} onPress={() => navigation.navigate(paths.client.ProfilesView)}>
              <View style={styles.displayFlexCenterColumn}>
                <View style={styles.TeamsJoinCardImage}>
                  <Image
                    style={styles.joinTeamCardImage}
                    source={images.shaarawy}
                    resizeMode="contain"
                  />
                </View>
                <Text style={[styles.playerNameText, styles.py10]}>
                Dimitri Gbo
                </Text>
                <Text style={[styles.playerNameSecondaryText, styles.pb5]}>
                Goalkeeper
                </Text>
                <Text style={styles.playerNameSecondaryText}>
                Team admin
                </Text>
                <TouchableOpacity onPress={() => this.toggleFollow(1)} style={[this.state[1] ? styles.playerFollowingButton : styles.playerFollowButton]}>
                  <Text style={this.state[1] ? styles.playerFollowingButtonText : styles.playerFollowButtonText}>
                    {this.state[1] ? 'Following' : 'Follow'}
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ paddingTop: 15, paddingBottom: 15, flex: 1, borderRightWidth: 0.6, borderRightColor: 'rgba(0,0,0,.3)' }} onPress={() => navigation.navigate(paths.client.ProfilesView)}>
              <View style={styles.displayFlexCenterColumn}>
                <View style={styles.TeamsJoinCardImage}>
                  <Image
                    style={styles.joinTeamCardImage}
                    source={images.shaarawy}
                    resizeMode="contain"
                  />
                </View>
                <Text style={[styles.playerNameText, styles.py10]}>
                  Dimitri Gbo
                </Text>
                <Text style={[styles.playerNameSecondaryText, styles.pb5]}>
                  Goalkeeper
                </Text>
                <Text style={styles.playerNameSecondaryText}>
                  Team admin
                </Text>
                <TouchableOpacity onPress={() => this.toggleFollow(2)} style={[this.state[2] ? styles.playerFollowingButton : styles.playerFollowButton]}>
                  <Text style={this.state[2] ? styles.playerFollowingButtonText : styles.playerFollowButtonText}>
                    {this.state[2] ? 'Following' : 'Follow'}
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </View>
          <View style={[{ borderTopWidth: 0.6, borderColor: 'rgba(0,0,0,.3)', borderBottomWidth: 0.6 }, styles.displayFlexCenterRowCreation, styles.py20]}>
            <UppercasedText style={styles.TeamsJoinMainText}>
              6&nbsp;
            </UppercasedText>
            <UppercasedText style={styles.TeamsJoinSecondaryText}>
              Defenders
            </UppercasedText>
          </View>
          <View style={[{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }]}>
            <TouchableOpacity style={{ paddingTop: 15, paddingBottom: 15, flex: 1, borderRightWidth: 0.6, borderRightColor: 'rgba(0,0,0,.3)' }} onPress={() => navigation.navigate(paths.client.ProfilesView)}>
              <View style={styles.displayFlexCenterColumn}>
                <View style={styles.TeamsJoinCardImage}>
                  <Image
                    style={styles.joinTeamCardImage}
                    source={images.shaarawy}
                    resizeMode="contain"
                  />
                </View>
                <Text style={[styles.playerNameText, styles.py10]}>
                Dimitri Gbo
                </Text>
                <Text style={[styles.playerNameSecondaryText, styles.pb5]}>
                Goalkeeper
                </Text>
                <Text style={styles.playerNameSecondaryText}>
                Team admin
                </Text>
                <TouchableOpacity onPress={() => this.toggleFollow(3)} style={[this.state[3] ? styles.playerFollowingButton : styles.playerFollowButton]}>
                  <Text style={this.state[3] ? styles.playerFollowingButtonText : styles.playerFollowButtonText}>
                    {this.state[3] ? 'Following' : 'Follow'}
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ paddingTop: 15, paddingBottom: 15, flex: 1, borderRightWidth: 0.6, borderRightColor: 'rgba(0,0,0,.3)' }} onPress={() => navigation.navigate(paths.client.ProfilesView)}>
              <View style={styles.displayFlexCenterColumn}>
                <View style={styles.TeamsJoinCardImage}>
                  <Image
                    style={styles.joinTeamCardImage}
                    source={images.shaarawy}
                    resizeMode="contain"
                  />
                </View>
                <Text style={[styles.playerNameText, styles.py10]}>
                  Dimitri Gbo
                </Text>
                <Text style={[styles.playerNameSecondaryText, styles.pb5]}>
                  Goalkeeper
                </Text>
                <Text style={styles.playerNameSecondaryText}>
                  Team admin
                </Text>
                <TouchableOpacity onPress={() => this.toggleFollow(4)} style={[this.state[4] ? styles.playerFollowingButton : styles.playerFollowButton]}>
                  <Text style={this.state[4] ? styles.playerFollowingButtonText : styles.playerFollowButtonText}>
                    {this.state[4] ? 'Following' : 'Follow'}
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </View>
        </Content>
        <View style={[styles.footer]}>
          <TouchableOpacity onPress={() => navigation.navigate(paths.client.ProfilesCreation)} style={styles.footerButton}>
            <UppercasedText style={styles.bottomMainButtonText}>
              Join AFTV FC
            </UppercasedText>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}

Join.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};

export default Join;
