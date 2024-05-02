import React from 'react';
import {Text} from 'react-native';

import {styles} from './styles';

interface Props {
  title: string;
}

export const HeaderTitle: React.FC<Props> = ({title}) => {
  return <Text style={styles.text}>{title}</Text>;
};
