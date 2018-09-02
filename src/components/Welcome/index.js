import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity, StatusBar } from 'react-native';
import Swiper from 'react-native-swiper';

import { StepOne, StepTwo, StepThree, StepFour } from './components';
import styles from './common/styles';

import { UppercasedText } from '../common/components';

import actions from '../../actions';

class Welcome extends React.Component {
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props);

    this.state = {
      activeStep: 0,
    };
  }

  componentDidMount() {
    StatusBar.setHidden(true);
  }

  componentWillUnmount() {
    StatusBar.setHidden(false);
  }

  handleChangeIndex = (index) => {
    this.setState({
      activeStep: index,
    });
  }

  handleSkipSwiper = () => {
    this.setState({
      activeStep: 3,
    });
  }

  render() {
    const { navigation } = this.props;
    const { activeStep } = this.state;

    let content;

    if (activeStep < 3) {
      content = (
        <React.Fragment>
          <Swiper
            index={activeStep}
            onIndexChanged={index => this.handleChangeIndex(index)}
            loop={false}
            dotStyle={styles.dotStyle}
            activeDotStyle={styles.activeDotStyle}
            showButtons
          >
            <StepOne />
            <StepTwo />
            <StepThree />
          </Swiper>
          <TouchableOpacity onPress={this.handleSkipSwiper} style={styles.footerChildContainer}>
            <UppercasedText style={styles.skipButton}>
              {activeStep !== 2 ? 'Skip' : 'Done'}
            </UppercasedText>
          </TouchableOpacity>
        </React.Fragment>
      );
    }

    if (activeStep === 3) {
      content = <StepFour navigation={navigation} />;
    }

    return (
      <React.Fragment>
        {content}
      </React.Fragment>
    );
  }
}

Welcome.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};

export default connect(
  null,
  {
    ...actions.authentication,
  },
)(Welcome);
