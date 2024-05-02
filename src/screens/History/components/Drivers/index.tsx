import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {Subtitle} from '../../../../components/Subtitle';
import {filterDrivers} from '../../../../utils/filterDrivers';
import {IDrivers} from '../../../../@types/drivers';
import {CountriesIcon} from '../../../../components/icons/Countries';
import {formatDate} from '../../../../utils/formatDate';
import {Colors} from '../../../../constants/Colors';

import {styles} from './styles';

interface Props {
  loading: boolean;
  drivers: IDrivers | undefined;
}

export const Drivers: React.FC<Props> = ({loading, drivers}) => {
  return (
    <View style={styles.container}>
      <Subtitle text="Pilotos" style={{marginBottom: 10}} />

      {loading ? (
        <View style={styles.loading}>
          <ActivityIndicator />
        </View>
      ) : (
        <View style={styles.card}>
          {filterDrivers(drivers?.MRData?.DriverTable?.Drivers)?.map(item => (
            <View key={item.driverId} style={styles.cardItem}>
              <CountriesIcon type={item.nationality} />

              <View>
                <Text style={{color: Colors.NEUTRO_950}}>{item.givenName}</Text>
                <Text style={{color: Colors.NEUTRO_500, fontSize: 14}}>
                  {formatDate(item.dateOfBirth)}
                </Text>
              </View>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};
