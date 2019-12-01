import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../modules/colors';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('100%'),
    width: wp('100%'),
    paddingTop: hp('2%'),
    paddingBottom: hp('2%'),
    paddingLeft: wp('2%'),
    paddingRight: wp('2%'),
  },
  logoIcon: {
    borderWidth: wp('0.5%'),
    borderRadius: 50,
    borderColor: colors.white,
    paddingTop: hp('3%'),
    paddingBottom: hp('3%'),
    paddingLeft: wp('6%'),
    paddingRight: wp('6%'),
    alignItems: 'center',
  },
  inputContainer: {
    paddingLeft: wp('4%'),
    paddingRight: wp('4%'),
    paddingTop: hp('1%'),
    paddingBottom: hp('1%'),
  },
  input: {
    paddingLeft: wp('2%'),
    color: colors.black,
  },
  label: {
    color: colors.black,
  },
  buttonIcon: {
    paddingRight: wp('1%'),
  },
  buttonContainer: {
    width: wp('80%'),
    borderColor: colors.yellow,
    paddingTop: hp('1%'),
    paddingBottom: hp('1%'),
  },
  buttonTitle: {
    color: colors.yellow,
    fontWeight: 'bold',
  },
  button: {
    borderColor: colors.white,
    borderWidth: wp('0.5%'),
    borderRadius: wp('2%'),
  },
});

export default styles;
