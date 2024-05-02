import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Colors} from '../../../../constants/Colors';
import {Subtitle} from '../../../../components/Subtitle';
import ArrowRightIcon from '../../../../assets/arrowRight.svg';

import {styles} from './styles';

export const History: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.history}>
      <View style={{marginTop: 20, marginBottom: 20}}>
        <Subtitle text="História" />
        <Text
          style={{
            marginTop: 6,
            color: Colors.PRIMARY_950,
            fontFamily: 'Inter-Bold',
            fontSize: 14,
          }}>
          Conheça os pilotos de formula 1 que fizeram história em 1960
        </Text>
      </View>

      <TouchableOpacity
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: 56,
          borderRadius: 12,
          padding: 16,
          backgroundColor: Colors.NEUTRO_900,
        }}
        onPress={() => navigation.navigate('History' as never)}
        activeOpacity={0.9}>
        <Text
          style={{
            color: Colors.PRIMARY_200,
            fontFamily: 'Inter-Bold',
            fontWeight: 'bold',
            fontSize: 14,
          }}>
          Ver pilotos
        </Text>
        <ArrowRightIcon style={{color: Colors.PRIMARY_200}} />
      </TouchableOpacity>
    </View>
  );
};
