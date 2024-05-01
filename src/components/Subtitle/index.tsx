import React from 'react';
import {Text, TextProps, StyleProp, TextStyle} from 'react-native';
import {styles} from './styles';

interface Props extends TextProps {
  text: string;
  style?: StyleProp<TextStyle>;
}

export const Subtitle: React.FC<Props> = ({text, style, ...rest}) => {
  return (
    <Text style={[styles.subtitle, style]} {...rest}>
      {text}
    </Text>
  );
};
