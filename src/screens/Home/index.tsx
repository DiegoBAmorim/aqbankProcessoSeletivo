import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image, SafeAreaView} from 'react-native';

import {Colors} from '../../constants/Colors';
import {Subtitle} from '../../components/Subtitle';

import LogoIcon from '../../assets/logo.svg';
import RaceTrack from '../../assets/racetrack.svg';
import TrophyIcon from '../../assets/trophy.svg';
import ArrowRightIcon from '../../assets/arrowRight.svg';

import {styles} from './styles';
import {Badge} from '../../components/Badge';

const Home: React.FC = ({navigation}) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch('https://ergast.com/api/f1/current/last/results.json')
      .then(response => response.json())
      .then(data => {
        const raceResults = data.MRData.RaceTable.Races[0].Results.slice(0, 3);
        setResults(raceResults);
      })
      .catch(error => console.error('Erro ao carregar os dados:', error));
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.headerContainer}>
        <View
          style={{
            marginVertical: 20,
            paddingHorizontal: 20,
          }}>
          <View style={{marginBottom: 10}}>
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

          <View style={{flexDirection: 'row'}}>
            <View>
              <Subtitle text="Próxima corrida" style={{marginBottom: 12}} />

              <Text
                style={{
                  color: 'white',
                  marginBottom: 16,
                  fontFamily: 'Inter-Bold',
                  fontSize: 18,
                }}>
                GP do Bahrein
              </Text>

              <Text
                style={{
                  color: Colors.NEUTRO_350,
                  fontFamily: 'Inter-SemiBold',
                  fontSize: 14,
                }}>
                Data Sáb., 2 de Mar., 12:00
              </Text>
              <Badge
                text="Circuito Internacional do Bahrein"
                iconLeft
                iconType="location"
              />
            </View>
            <View>
              <RaceTrack />
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              gap: 11,
            }}>
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

      <View style={styles.lastRaceContainer}>
        <View>
          <Subtitle text="Última Corrida" style={{marginTop: 10}} />

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
                marginTop: 12,
                marginBottom: 15,
              }}>
              GP de Abu Dhabi
            </Text>
            <Image source={require('../../assets/raceCar.png')} />
          </View>

          <View style={{flexDirection: 'row', marginBottom: 8}}>
            <Text>Data </Text>
            <Text>Sáb., 2 de Jan, De 2023 12:00</Text>
          </View>

          <View />
          <View style={{marginBottom: 18}}>
            <Badge
              iconLeft
              iconType="location"
              text="Circuito Yas Marina Circuit"
            />
          </View>

          <View
            style={{
              justifyContent: 'center',
              borderWidth: 1,
              borderRadius: 12,
              borderColor: Colors.NEUTRO_300,
              gap: 8,
              padding: 12,
              // marginTop: 16,
            }}>
            {/* TODO: TIRAR ANY E TIPAR CORRETAMENTE*/}
            {results.map((result: any, index) => (
              <View style={{flexDirection: 'row'}} key={index}>
                <TrophyIcon style={{color: Colors.WARNING_500}} />
                <Text>
                  {`${index + 1}º ${result?.Driver.givenName} ${
                    result.Driver.familyName
                  } ${result.Constructor.name}`}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      <View style={styles.historyContainer}>
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
          onPress={() => navigation.navigate('History')}
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
    </View>
  );
};

export default Home;
