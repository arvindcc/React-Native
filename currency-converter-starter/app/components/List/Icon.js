import React from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';
import style from './styles';

const Icon = ({ visible, checkmark, iconBackground }) => {
  const iconStyles = [style.icon];
  if (visible) {
    iconStyles.push(style.iconVisible);
  }
  if (iconBackground) {
    iconStyles.push({ backgroundColor: iconBackground });
  }
  return (
    <View style={iconStyles}>
      {
        checkmark ? (<Image style={style.checkIcon} resizeMode="contain" source={require('./images/check.png')} />) : null
      }
    </View>
  );
};

Icon.propTypes = {
  checkmark: PropTypes.bool,
  visible: PropTypes.bool,
  iconBackground: PropTypes.string,
};

export default Icon;
