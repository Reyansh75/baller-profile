import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Thumbnail } from 'native-base';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

import styles from './styles';

import images from '../../../static/images';

const FirstRoute = (toggleFollow, state) => (
  <View style={styles.playerCardContainer}>
    <View style={styles.playerCard}>
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
              Dimitri Gbo&nbsp;
            </Text>
            <Text style={styles.tagText}>
              @Dimzinho
            </Text>
          </View>
          <Text style={styles.descText}>
            CDM for Strictly Ballers
          </Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => toggleFollow(1)} style={[state[1] ? styles.playerFollowingButton : styles.playerFollowButton]}>
        <Text style={state[1] ? styles.playerFollowingButtonText : styles.playerFollowButtonText}>
          {state[1] ? 'Following' : 'Follow'}
        </Text>
      </TouchableOpacity>
    </View>
    <View style={styles.playerCard}>
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
              Mena Ntueba&nbsp;
            </Text>
            <Text style={styles.tagText}>
              @Menchizedek
            </Text>
          </View>
          <Text style={styles.descText}>
            CM for Strictly Ballers
          </Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => toggleFollow(2)} style={[state[2] ? styles.playerFollowingButton : styles.playerFollowButton]}>
        <Text style={state[2] ? styles.playerFollowingButtonText : styles.playerFollowButtonText}>
          {state[2] ? 'Following' : 'Follow'}
        </Text>
      </TouchableOpacity>
    </View>
    <View style={styles.playerCard}>
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
              Roysten Drenthe&nbsp;
            </Text>
            <Text style={styles.tagText}>
              @RoysDrent
            </Text>
          </View>
          <Text style={styles.descText}>
            ST for Madridista
          </Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => toggleFollow(3)} style={[state[3] ? styles.playerFollowingButton : styles.playerFollowButton]}>
        <Text style={state[3] ? styles.playerFollowingButtonText : styles.playerFollowButtonText}>
          {state[3] ? 'Following' : 'Follow'}
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);

class NationalityView extends React.Component {
  static navigationOptions = {
    headerTitle: (
      <Text style={styles.navigationText}>
        Nationality
      </Text>
    ),
    headerStyle: {
      backgroundColor: '#0071c0',
    },
    headerTintColor: 'white',
  }

  constructor() {
    super();

    this.state = {
      index: 0,
      routes: [
        { key: 'first', title: 'Spain' },
        { key: 'second', title: 'England' },
      ],
      1: true,
      2: false,
      3: false,
    };
  }

  toggleFollow = (id) => {
    this.setState({
      [id]: !this.state[id],
    });
  }

  render() {
    const { index, routes } = this.state;

    return (
      <TabView
        navigationState={this.state}
        tabStyle={styles.bgWhite}
        renderScene={SceneMap({
          first: () => FirstRoute(this.toggleFollow, this.state),
          second: () => FirstRoute(this.toggleFollow, this.state),
          third: () => FirstRoute(this.toggleFollow, this.state),
        })}
        renderTabBar={props => (
          <TabBar
            {...props}
            renderLabel={(labelProps) => {
              const { route: { key, title } } = labelProps;

              let flag = '';

              if (key === 'first') {
                flag = 'spain';
              }
              if (key === 'second') {
                flag = 'england';
              }

              return (
                <View style={styles.flexCenterColumn}>
                  <Text style={routes[index].key === key ? styles.activeTab : styles.disabledTab}>
                    {title}
                  </Text>
                  <Image
                    style={styles.h25w25}
                    resizeMode="contain"
                    source={images[flag]}
                  />
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

export default NationalityView;
