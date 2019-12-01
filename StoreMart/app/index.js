import React, { Component } from 'react';
import { Login } from './views/Login';
import LinearGradient from 'react-native-linear-gradient';
import colors from './modules/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class App extends Component {
  render() {
    return (
      <LinearGradient
        // colors={['#4c669f', '#3b5998', '#192f6a']}
        colors={[colors.gradientStart, colors.gradientEnd]}
        style={styles.linearGradient}>
        <Login />
      </LinearGradient>
    );
  }
}

const styles = {
  linearGradient: {
    flex: 1,
    // paddingLeft: 15,
    // paddingRight: 15,
    // marginTop: hp('2%'),
    // marginBottom: hp('2%'),
    // width: wp('100%'),
    // height: hp('100%'),
  },
};
