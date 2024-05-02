import React from 'react';
import {TouchableOpacity} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import ArrowLeft from '../../../../assets/arrowLeft.svg';
import {RouterProps} from '../../../../routes';

import {styles} from './styles';

interface Props {
  navigation: NativeStackNavigationProp<RouterProps, any, undefined>;
}

export const HeaderLeft: React.FC<Props> = ({navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      activeOpacity={0.8}
      style={styles.button}>
      <ArrowLeft />
    </TouchableOpacity>
  );
};
