import React from 'react';
import {View, Text, Image} from 'react-native';

import {styles} from './styles';
import {Subtitle} from '../../../../components/Subtitle';
import {IRaceResults, Result} from '../../../../@types/raceResults';
import {formatRaceDateAndTime} from '../../../../utils/formatRaceDateAndTime';
import {Badge} from '../../../../components/Badge';
import {Colors} from '../../../../constants/Colors';

import TrophyIcon from '../../../../assets/trophy.svg';

interface Props {
  results: IRaceResults | undefined;
  driverResults: Result[] | undefined;
}

export const LastRace: React.FC<Props> = ({results, driverResults}) => {
  return (
    <View style={styles.lastRace}>
      <Subtitle text="Última Corrida" />

      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontFamily: 'Inter-Bold',
              fontSize: 18,
              marginTop: 0,
              marginBottom: 0,
            }}>
            {results?.MRData.RaceTable.Races[0].raceName ?? ''}
          </Text>
          <Image source={require('../../../../assets/raceCar.png')} />
        </View>

        <View style={{flexDirection: 'row', marginBottom: 8}}>
          <Text>Data </Text>
          <Text>
            {formatRaceDateAndTime(
              results?.MRData.RaceTable.Races[0].date,
              results?.MRData.RaceTable.Races[0].time,
            )}
          </Text>
        </View>

        <Badge
          iconLeft
          iconType="location"
          text={results?.MRData.RaceTable.Races[0].Circuit.circuitName ?? ''}
          style={{
            backgroundColor: Colors.NEUTRO_250,
            marginBottom: 10,
            maxWidth: '70%',
            justifyContent: 'space-evenly',
          }}
        />

        <View
          style={{
            justifyContent: 'center',
            borderWidth: 1,
            borderRadius: 12,
            borderColor: Colors.NEUTRO_300,
            gap: 8,
            padding: 12,
          }}>
          {driverResults?.map((result, index) => (
            <View
              style={{flexDirection: 'row', alignItems: 'center', gap: 8}}
              key={index}>
              <TrophyIcon
                style={{
                  color:
                    index + 1 === 1
                      ? Colors.WARNING_500
                      : index + 1 === 2
                      ? Colors.NEUTRO_400
                      : Colors.WARNING_900,
                }}
                width={20}
                height={20}
              />
              <View style={{flexDirection: 'row'}}>
                <Text>{index + 1}º </Text>
                <Text>{result?.Driver.givenName} </Text>
                <Text>{result?.Driver.familyName} </Text>
                <Text style={{color: Colors.NEUTRO_400}}>
                  {result.Constructor.name}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};
