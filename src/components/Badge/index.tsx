import React from 'react';
import {StyleProp, Text, TextStyle, View, ViewProps} from 'react-native';

import {styles} from './styles';
import {Sizes} from '../../constants/BadgeSizes';
import {Icons} from '../icons';
import {Colors} from '../../constants/Colors';

interface Props extends ViewProps {
  text: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  iconType?: 'calendar' | 'trophyIcon' | 'location';
  iconLeft?: boolean;
  iconRight?: boolean;
  textStyle?: StyleProp<TextStyle>;
  colorIcon?: string;
}

export const Badge: React.FC<Props> = ({
  iconLeft,
  text,
  iconRight,
  iconType,
  textStyle,
  colorIcon = Colors.BLACK,
  size = 'lg',
  ...rest
}) => {
  const combinedStyle = {
    ...styles.container,
    ...Sizes[size],
    ...(typeof rest.style === 'object' && rest.style !== null
      ? rest.style
      : {}),
  };
  return (
    <View {...rest} style={combinedStyle}>
      {iconLeft && iconType && (
        <View>
          <Icons type={iconType} style={{color: colorIcon}} />
        </View>
      )}
      <Text style={[styles.text, textStyle]}>{text}</Text>
      {iconRight && iconType && (
        <View>
          <Icons type={iconType} />
        </View>
      )}
    </View>
  );
};
