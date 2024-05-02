import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import LogoIcon from '../../../../assets/logo.svg';
import RaceTrack from '../../../../assets/racetrack.svg';

import {Colors} from '../../../../constants/Colors';

import {Subtitle} from '../../../../components/Subtitle';
import {Badge} from '../../../../components/Badge';

import {formatRaceDateAndTime} from '../../../../utils/formatRaceDateAndTime';
import {INextRace} from '../../../../@types/nextRace';
import {styles} from './styles';

interface Props {
  nextRace: INextRace | undefined;
}

export const Header: React.FC<Props> = ({nextRace}) => {
  return (
    <SafeAreaView style={styles.header}>
      <View style={styles.headerWrapper}>
        <View>
          <LogoIcon />

          <Text
            style={{
              color: Colors.PRIMARY_50,
              fontFamily: 'Inter-Bold',
              fontSize: 20,
              marginTop: 6,
            }}>
            Olá, Ana Paula
          </Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Subtitle text="Próxima corrida" style={{marginBottom: 12}} />

            <Text
              style={{
                color: 'white',
                marginBottom: 6,
                fontFamily: 'Inter-Bold',
                fontSize: 18,
              }}>
              {nextRace?.MRData.RaceTable.Races[0].raceName}
            </Text>

            <Text
              style={{
                color: Colors.NEUTRO_350,
                fontFamily: 'Inter-SemiBold',
                fontSize: 14,
                marginBottom: 10,
              }}>
              Data{' '}
              {formatRaceDateAndTime(
                nextRace?.MRData.RaceTable.Races[0].date,
                nextRace?.MRData.RaceTable.Races[0].time,
              )}
            </Text>
            <Badge
              text={
                nextRace?.MRData.RaceTable.Races[0].Circuit.circuitName ?? ''
              }
              iconLeft
              iconType="location"
            />
          </View>
          <View>
            <RaceTrack />
          </View>
        </View>

        <View style={styles.badgeWrapper}>
          <Badge
            size="sm"
            text="Próximos Dias"
            colorIcon={Colors.WHITE}
            iconLeft
            iconType="calendar"
            textStyle={{color: Colors.WHITE}}
            style={{
              backgroundColor: Colors.BLACK,
            }}
          />
          <Badge
            textStyle={{color: Colors.WHITE}}
            style={{
              backgroundColor: 'transparent',
              borderWidth: 1,
              borderColor: Colors.NEUTRO_300,
            }}
            text="Dia 9, 14:00"
            size="sm"
          />
          <Badge
            text="Dia 24, 14:00"
            size="sm"
            textStyle={{color: Colors.WHITE}}
            style={{
              backgroundColor: 'transparent',
              borderWidth: 1,
              borderColor: Colors.NEUTRO_300,
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
