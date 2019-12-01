import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import styles from './styles';
import { Labels, Placeholders, ErrorMsg } from '../../modules/constant';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class Login extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.logoIcon}>
            <Icon name="shopping-basket" size={wp('25%')} color="yellow" />
          </View>
          <Input
            containerStyle={styles.inputContainer}
            inputStyle={styles.input}
            label={Labels.Login.email}
            labelStyle={styles.label}
            errorMessage={null}
            placeholder={Placeholders.Login.email}
            leftIcon={
              <Icon
                name="envelope"
                type="font-awesome"
                size={wp('5%')}
                color="black"
              />
            }
          />
          <Input
            containerStyle={styles.inputContainer}
            inputStyle={styles.input}
            label={Labels.Login.password}
            labelStyle={styles.label}
            errorMessage={null}
            placeholder={Placeholders.Login.password}
            secureTextEntry={true}
            leftIcon={
              <Icon
                name="lock"
                type="font-awesome"
                size={wp('5%')}
                color="black"
              />
            }
          />
          <Button
            containerStyle={styles.buttonContainer}
            titleStyle={styles.buttonTitle}
            buttonStyle={styles.button}
            icon={
              <Icon
                style={styles.buttonIcon}
                name="sign-in"
                size={wp('5%')}
                color="black"
              />
            }
            title={Labels.Login.loginBtn}
            type="outline"
          />
          <Button
            containerStyle={styles.buttonContainer}
            titleStyle={styles.buttonTitle}
            buttonStyle={styles.button}
            icon={
              <Icon
                style={styles.buttonIcon}
                name="user-plus"
                size={wp('5%')}
                color="black"
              />
            }
            title={Labels.Login.registerBtn}
            type="outline"
          />
        </View>
      </ScrollView>
    );
  }
}
console.log('Inside Login');
