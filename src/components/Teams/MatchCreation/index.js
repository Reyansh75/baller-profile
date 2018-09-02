import React from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Item, Label, Input } from 'native-base';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

import styles from './styles';

import { UppercasedText } from '../../common/components';

const SecondRoute = () => (
  <View style={styles.createMatchContainer}>
    <ScrollView>
      <View style={styles.createMatchContent}>
        <Item floatingLabel style={styles.findTeamItem}>
          <Label style={styles.itemLabel}>
            Strictly Ballers
          </Label>
          <Input
            disabled
            selectionColor="#fff"
          />
        </Item>
        <Item floatingLabel style={styles.findTeamItem}>
          <Label style={styles.itemLabel}>
            AFTV FC
          </Label>
          <Input
            disabled
            selectionColor="#fff"
          />
        </Item>
        <Item floatingLabel style={styles.findTeamItem}>
          <Label style={styles.itemLabel}>
            7v7
          </Label>
          <Input
            disabled
            selectionColor="#fff"
          />
        </Item>
        <Item floatingLabel style={styles.findTeamItem}>
          <Label style={styles.itemLabel}>
            Next Level Footbal League
          </Label>
          <Input
            disabled
            selectionColor="#fff"
          />
        </Item>
        <Item floatingLabel style={styles.findTeamItem}>
          <Label style={styles.itemLabel}>
            19/08/18
          </Label>
          <Input
            disabled
            selectionColor="#fff"
          />
        </Item>
        <Item floatingLabel style={styles.findTeamItem}>
          <Label style={styles.itemLabel}>
            15:00
          </Label>
          <Input
            disabled
            selectionColor="#fff"
          />
        </Item>
        <Item floatingLabel style={styles.findTeamItem}>
          <Label style={styles.itemLabel}>
            New River Sports Center, N22 5HD
          </Label>
          <Input
            disabled
            selectionColor="#fff"
          />
        </Item>
      </View>
    </ScrollView>
    <View style={styles.footer}>
      <TouchableOpacity style={styles.footerButton}>
        <UppercasedText style={styles.bottomMainButtonText}>
          Done
        </UppercasedText>
      </TouchableOpacity>
    </View>
  </View>
);

class MatchCreation extends React.Component {
  static navigationOptions = {
    headerTitle: (
      <Text style={styles.navigationText}>
        Create a Match
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
        { key: 'first', title: 'Match details' },
        { key: 'second', title: 'Extras' },
      ],
    };
  }

  render() {
    const { index, routes } = this.state;

    return (
      <TabView
        navigationState={this.state}
        tabStyle={styles.bgWhite}
        renderScene={SceneMap({
          first: SecondRoute,
          second: SecondRoute,
        })}
        renderTabBar={props => (
          <TabBar
            {...props}
            renderLabel={(labelProps) => {
              const { route: { key, title } } = labelProps;

              return (
                <View style={styles.flexCenterColumn}>
                  <Text style={routes[index].key === key ? styles.activeTab : styles.disabledTab}>
                    {title}
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

export default MatchCreation;
