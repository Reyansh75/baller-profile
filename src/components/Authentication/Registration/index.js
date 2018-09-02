import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { omit, merge } from 'lodash';
import { StatusBar, Image, Text, View, TouchableOpacity } from 'react-native';
import { Container, Content, Form as NativeForm } from 'native-base';

import selectors from './selectors';
import validations from './validations';

import styles from '../common/styles';

import { UppercasedText, Input, Form } from '../../common/components';

import actions from '../../../actions';
import images from '../../../static/images';
import { paths, forms } from '../../../common/constants';

class Registration extends Form {
  static navigationOptions = {
    headerTitle: (
      <View style={styles.displayFlexCenterRow}>
        <Text style={styles.headerMain}>
          Create your&nbsp;
          <Text style={styles.headerBaller}>
            Baller
          </Text>
          <Text style={styles.headerProfile}>
            Profile
          </Text>
        </Text>
      </View>
    ),
  }

  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      validating: {},
    };

    this.formId = forms.REGISTRATION;
    this.validations = validations;
  }

  handleRegistration = () => {
    this.handleSubmit()
      .then((canSubmit) => {
        const { values, register, navigation } = this.props;
        if (canSubmit) {
          const newValues = merge(omit(values, ['confirm_password']), { type: 'P' });

          register(newValues)
            .then(() => navigation.navigate(paths.client.Login));
        }
        return canSubmit;
      });
  }

  render() {
    const { isSubmitting } = this.props;

    return (
      <React.Fragment>
        <StatusBar />
        <Container>
          <Content>
            <NativeForm>
              <Input
                itemStyle={styles.registrationItem}
                {...this.getFieldProps('username')}
                label="Choose a username"
                labelStyle={styles.inputLabelRegistration}
              />
              <Input
                itemStyle={styles.registrationItem}
                {...this.getFieldProps('email')}
                label="Email address"
                labelStyle={styles.inputLabelRegistration}
              />
              <Input
                itemStyle={styles.registrationItem}
                {...this.getFieldProps('first_name')}
                label="First name"
                labelStyle={styles.inputLabelRegistration}
              />
              <Input
                itemStyle={styles.registrationItem}
                {...this.getFieldProps('last_name')}
                label="Last name"
                labelStyle={styles.inputLabelRegistration}
              />
              <Input
                itemStyle={styles.registrationItem}
                {...this.getFieldProps('password')}
                label="Select password"
                labelStyle={styles.inputLabelRegistration}
                type="password"
              />
              <Input
                itemStyle={styles.registrationItem}
                {...this.getFieldProps('confirm_password')}
                label="Confirm your password"
                type="password"
                labelStyle={styles.inputLabelRegistration}
              />
              <View style={styles.registrationFlexContainer}>
                <TouchableOpacity disabled={isSubmitting} onPress={this.handleRegistration} style={[styles.registrationReverseSubmitButton, isSubmitting ? { backgroundColor: 'rgba(1,114,193, 0.5)' } : {}]}>
                  <UppercasedText style={styles.registrationSubmitButtonText}>
                    Sign me up!
                  </UppercasedText>
                </TouchableOpacity>
              </View>
              <View style={styles.registrationOrContainer}>
                <UppercasedText style={styles.registrationOr}>
                  Or
                </UppercasedText>
              </View>
              <View style={styles.globalFlex}>
                <TouchableOpacity style={styles.instaButton}>
                  <View style={styles.displayFlexCenter}>
                    <Text style={styles.instaText}>
                      Continue with Instagram
                    </Text>
                  </View>
                  <Image
                    style={styles.logoInsta}
                    source={images.insta}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.globalFlex}>
                <TouchableOpacity style={styles.twitterButton}>
                  <View style={styles.displayFlexCenter}>
                    <Text style={styles.twitterText}>
                      Continue with Twitter
                    </Text>
                  </View>
                  <Image
                    style={styles.logoTwitter}
                    source={images.twitter}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
              <View syle={styles.globalFlex}>
                <Text style={styles.tosMain}>
                  By creating a BallerProfile, you agree to our
                </Text>
                <View style={styles.tosChildren}>
                  <Text style={styles.tosTerms}>
                    Terms&nbsp;
                  </Text>
                  <Text>
                    &&nbsp;
                  </Text>
                  <Text style={styles.tosConditions}>
                    Conditions
                  </Text>
                </View>
              </View>
            </NativeForm>
          </Content>
        </Container>
      </React.Fragment>
    );
  }
}

Registration.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};

export default connect(
  selectors,
  {
    ...actions.forms,
    ...actions.authentication,
  },
)(Registration);
