import React from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Thumbnail, Icon } from 'native-base';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

import styles from './styles';

import images from '../../../static/images';

const FirstRoute = (toggleFollow, state) => (
  <View style={styles.playerCardContainer}>
    {state.players.map(player => (
      <View key={player.id} style={styles.playerCard}>
        <View style={styles.flexCenterRow}>
          <View style={styles.borderRadiusCircle}>
            <Thumbnail
              style={[styles.profileImage]}
              source={player.profile_image ? player.profile_image : images.user}
            />
          </View>
          <View style={styles.playerCardName}>
            <View style={styles.flexCenterRow}>
              <Text style={styles.nameText}>
                {player.first_name}
                {player.last_name}
                &nbsp;
              </Text>
              <Text style={styles.tagText}>
                {`@${player.username}`}
              </Text>
            </View>
            <Text style={styles.descText}>
              Central Attacking Midfielder
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => toggleFollow(1)} style={[state[1] ? styles.playerFollowingButton : styles.playerFollowButton]}>
          <Text style={state[1] ? styles.playerFollowingButtonText : styles.playerFollowButtonText}>
            {state[1] ? 'Following' : 'Follow'}
          </Text>
        </TouchableOpacity>
      </View>
    ))}
  </View>
);

const SecondRoute = () => (
  <View style={styles.invitePlayersContainer}>
    <ScrollView>
      <View style={styles.invitePlayersTitleContainer}>
        <Text style={styles.titleText}>
          Strengthen your squad by inviting players to join your team.
        </Text>
        <Text style={styles.secondaryText}>
          Tap up players already on BallerProfile!
        </Text>
        <Icon name="plus" style={styles.plusIcon} type="EvilIcons" />
      </View>
      <View style={styles.hrLineSecondary} />
      <View style={styles.invitePlayersSecondaryContainer}>
        <Text style={styles.addPlayersText}>
          Add players to your squad via social media
        </Text>
        <View style={styles.iconsContainer}>
          <Image
            source={images.whatsapp}
            style={styles.h60w60}
            resizeMode="contain"
          />
          <Image
            source={images.twitter2}
            style={[styles.h60w60, styles.mx40]}
            resizeMode="contain"
          />
          <Image
            source={images.insta2}
            style={styles.h60w60}
            resizeMode="contain"
          />
        </View>
      </View>
    </ScrollView>
  </View>
);

class Squad extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: (
      <Text style={styles.navigationText}>
        {navigation.getParam('team').team_name}
      </Text>
    ),
    headerStyle: {
      backgroundColor: '#0071c0',
    },
    headerTintColor: 'white',
  })

  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      routes: [
        { key: 'first', title: 'Current squad' },
        { key: 'second', title: 'Invite players' },
      ],
      1: false,
      2: false,
      3: false,
      team: props.navigation.getParam('team'),
      players: props.navigation.getParam('players'),
    };
  }

  toggleFollow = (id) => {
    this.setState({
      [id]: !this.state[id],
    });
  }

  render() {
    const { index, routes, players, team } = this.state;

    return (
      <TabView
        navigationState={this.state}
        tabStyle={styles.bgWhite}
        renderScene={SceneMap({
          first: () => FirstRoute(this.toggleFollow, this.state),
          second: SecondRoute,
        })}
        renderTabBar={props => (
          <TabBar
            {...props}
            renderLabel={(labelProps) => {
              const { route: { key, title } } = labelProps;

              let statisticsContent = '';

              if (key === 'first') {
                statisticsContent = players.length;
              }

              return (
                <View style={styles.flexCenterColumn}>
                  <Text style={routes[index].key === key ? styles.activeTab : styles.disabledTab}>
                    {title}
                  </Text>
                  <Text style={routes[index].key === key ? styles.activeTab : styles.disabledTab}>
                    {statisticsContent}
                  </Text>
                </View>
              );
            }}
            indicatorStyle={styles.bgBlue}
            labelStyle={styles.labelText}
            style={styles.bgWhite}
          />
        )}
        onIndexChange={changedIndex => this.setState({ index: changedIndex })}
        initialLayout={styles.h100w100}
      />
    );
  }
}

export default Squad;
