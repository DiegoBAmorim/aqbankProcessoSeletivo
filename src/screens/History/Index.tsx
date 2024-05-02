/* eslint-disable react/no-unstable-nested-components */
import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Colors} from '../../constants/Colors';
import {httpClient} from '../../services/httpClient';

import {HeaderTitle} from './components/HeaderTitle';
import {HeaderLeft} from './components/HeaderLeft';
import {Drivers} from './components/Drivers';

import {RouterProps} from '../../routes';
import {IDrivers} from '../../@types/drivers';

import {styles} from './styles';

const History: React.FC<NativeStackScreenProps<RouterProps>> = ({
  navigation,
}) => {
  const [drivers, setDrivers] = useState<IDrivers>();
  const [loading, setLoading] = useState(false);

  const getDrivers = async () => {
    setLoading(true);
    try {
      const response = await httpClient('api/f1/drivers.json');
      if (response.status === 200) {
        setDrivers(response.data);
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  React.useEffect(() => {
    getDrivers();
  }, []);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => <HeaderTitle title="História" />,
      headerLeft: () => <HeaderLeft navigation={navigation} />,
    });
  }, [navigation]);

  return (
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View>
          <Text
            style={{
              color: Colors.NEUTRO_950,
              fontFamily: 'Inter-Bold',
              fontSize: 20,
              marginBottom: 8,
            }}>
            História da F1
          </Text>

          <Text
            style={{
              color: Colors.NEUTRO_500,
              fontFamily: 'Inter-SemiBold',
              fontSize: 16,
            }}>
            Conheça os nomes que fizeram história, desde os pioneiros até os
            campeões inesquecíveis.
          </Text>
        </View>

        <Drivers loading={loading} drivers={drivers} />
      </View>
    </ScrollView>
  );
};

export default History;
