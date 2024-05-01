import React from 'react';
import {View, Text, StyleSheet, ScrollView, Pressable} from 'react-native';

import {Colors} from '../../constants/Colors';
import {CountriesIcon} from '../../components/icons/Countries';
import ArrowLeft from '../../assets/arrowLeft.svg';
import {getDriversAfter1960} from '../../utils/getDriversAfter1960';

const Drivers = {
  MRData: {
    xmlns: 'http://ergast.com/mrd/1.5',
    series: 'f1',
    url: 'http://ergast.com/api/f1/drivers.json',
    limit: '30',
    offset: '0',
    total: '859',
    DriverTable: {
      Drivers: [
        {
          driverId: 'abate',
          url: 'http://en.wikipedia.org/wiki/Carlo_Mario_Abate',
          givenName: 'Carlo',
          familyName: 'Abate',
          dateOfBirth: '1932-1-1',
          nationality: 'Italian',
        },
        {
          driverId: 'abecassis',
          url: 'http://en.wikipedia.org/wiki/George_Abecassis',
          givenName: 'George',
          familyName: 'Abecassis',
          dateOfBirth: '1913-03-21',
          nationality: 'British',
        },
        {
          driverId: 'acheson',
          url: 'http://en.wikipedia.org/wiki/Kenny_Acheson',
          givenName: 'Kenny',
          familyName: 'Acheson',
          dateOfBirth: '1957-11-27',
          nationality: 'British',
        },
        {
          driverId: 'adams',
          url: 'http://en.wikipedia.org/wiki/Philippe_Adams',
          givenName: 'Philippe',
          familyName: 'Adams',
          dateOfBirth: '1969-11-19',
          nationality: 'Belgian',
        },
        {
          driverId: 'ader',
          url: 'http://en.wikipedia.org/wiki/Walt_Ader',
          givenName: 'Walt',
          familyName: 'Ader',
          dateOfBirth: '1913-12-15',
          nationality: 'American',
        },
        {
          driverId: 'adolff',
          url: 'http://en.wikipedia.org/wiki/Kurt_Adolff',
          givenName: 'Kurt',
          familyName: 'Adolff',
          dateOfBirth: '1921-11-05',
          nationality: 'German',
        },
        {
          driverId: 'agabashian',
          url: 'http://en.wikipedia.org/wiki/Fred_Agabashian',
          givenName: 'Fred',
          familyName: 'Agabashian',
          dateOfBirth: '1913-08-21',
          nationality: 'American',
        },
        {
          driverId: 'ahrens',
          url: 'http://en.wikipedia.org/wiki/Kurt_Ahrens,_Jr.',
          givenName: 'Kurt',
          familyName: 'Ahrens',
          dateOfBirth: '1940-04-19',
          nationality: 'German',
        },
        {
          driverId: 'aitken',
          permanentNumber: '89',
          code: 'AIT',
          url: 'http://en.wikipedia.org/wiki/Jack_Aitken',
          givenName: 'Jack',
          familyName: 'Aitken',
          dateOfBirth: '1995-09-23',
          nationality: 'British',
        },
        {
          driverId: 'albers',
          code: 'ALB',
          url: 'http://en.wikipedia.org/wiki/Christijan_Albers',
          givenName: 'Christijan',
          familyName: 'Albers',
          dateOfBirth: '1979-04-16',
          nationality: 'Dutch',
        },
        {
          driverId: 'albon',
          permanentNumber: '23',
          code: 'ALB',
          url: 'http://en.wikipedia.org/wiki/Alexander_Albon',
          givenName: 'Alexander',
          familyName: 'Albon',
          dateOfBirth: '1996-03-23',
          nationality: 'Thai',
        },
        {
          driverId: 'alboreto',
          url: 'http://en.wikipedia.org/wiki/Michele_Alboreto',
          givenName: 'Michele',
          familyName: 'Alboreto',
          dateOfBirth: '1956-12-23',
          nationality: 'Italian',
        },
        {
          driverId: 'alesi',
          url: 'http://en.wikipedia.org/wiki/Jean_Alesi',
          givenName: 'Jean',
          familyName: 'Alesi',
          dateOfBirth: '1964-06-11',
          nationality: 'French',
        },
        {
          driverId: 'alguersuari',
          code: 'ALG',
          url: 'http://en.wikipedia.org/wiki/Jaime_Alguersuari',
          givenName: 'Jaime',
          familyName: 'Alguersuari',
          dateOfBirth: '1990-03-23',
          nationality: 'Spanish',
        },
        {
          driverId: 'alliot',
          url: 'http://en.wikipedia.org/wiki/Philippe_Alliot',
          givenName: 'Philippe',
          familyName: 'Alliot',
          dateOfBirth: '1954-07-27',
          nationality: 'French',
        },
        {
          driverId: 'allison',
          url: 'http://en.wikipedia.org/wiki/Cliff_Allison',
          givenName: 'Cliff',
          familyName: 'Allison',
          dateOfBirth: '1932-02-08',
          nationality: 'British',
        },
        {
          driverId: 'alonso',
          permanentNumber: '14',
          code: 'ALO',
          url: 'http://en.wikipedia.org/wiki/Fernando_Alonso',
          givenName: 'Fernando',
          familyName: 'Alonso',
          dateOfBirth: '1981-07-29',
          nationality: 'Spanish',
        },
        {
          driverId: 'amati',
          url: 'http://en.wikipedia.org/wiki/Giovanna_Amati',
          givenName: 'Giovanna',
          familyName: 'Amati',
          dateOfBirth: '1959-07-20',
          nationality: 'Italian',
        },
        {
          driverId: 'amick',
          url: 'http://en.wikipedia.org/wiki/Red_Amick',
          givenName: 'Red',
          familyName: 'Amick',
          dateOfBirth: '1929-01-19',
          nationality: 'American',
        },
        {
          driverId: 'george_amick',
          url: 'http://en.wikipedia.org/wiki/George_Amick',
          givenName: 'George',
          familyName: 'Amick',
          dateOfBirth: '1924-10-24',
          nationality: 'American',
        },
        {
          driverId: 'amon',
          url: 'http://en.wikipedia.org/wiki/Chris_Amon',
          givenName: 'Chris',
          familyName: 'Amon',
          dateOfBirth: '1943-07-20',
          nationality: 'New Zealander',
        },
        {
          driverId: 'anderson',
          url: 'http://en.wikipedia.org/wiki/Bob_Anderson_(racing_driver)',
          givenName: 'Bob',
          familyName: 'Anderson',
          dateOfBirth: '1931-05-19',
          nationality: 'British',
        },
        {
          driverId: 'andersson',
          url: 'http://en.wikipedia.org/wiki/Conny_Andersson_(racing_driver)',
          givenName: 'Conny',
          familyName: 'Andersson',
          dateOfBirth: '1939-12-28',
          nationality: 'Swedish',
        },
        {
          driverId: 'andretti',
          url: 'http://en.wikipedia.org/wiki/Michael_Andretti',
          givenName: 'Michael',
          familyName: 'Andretti',
          dateOfBirth: '1962-10-05',
          nationality: 'American',
        },
        {
          driverId: 'mario_andretti',
          url: 'http://en.wikipedia.org/wiki/Mario_Andretti',
          givenName: 'Mario',
          familyName: 'Andretti',
          dateOfBirth: '1940-02-28',
          nationality: 'American',
        },
        {
          driverId: 'andrews',
          url: 'http://en.wikipedia.org/wiki/Keith_Andrews_(driver)',
          givenName: 'Keith',
          familyName: 'Andrews',
          dateOfBirth: '1920-06-15',
          nationality: 'American',
        },
        {
          driverId: 'apicella',
          url: 'http://en.wikipedia.org/wiki/Marco_Apicella',
          givenName: 'Marco',
          familyName: 'Apicella',
          dateOfBirth: '1965-10-07',
          nationality: 'Italian',
        },
        {
          driverId: 'armi',
          url: 'http://en.wikipedia.org/wiki/Frank_Armi',
          givenName: 'Frank',
          familyName: 'Armi',
          dateOfBirth: '1918-10-12',
          nationality: 'American',
        },
        {
          driverId: 'arnold',
          url: 'http://en.wikipedia.org/wiki/Chuck_Arnold',
          givenName: 'Chuck',
          familyName: 'Arnold',
          dateOfBirth: '1926-05-30',
          nationality: 'American',
        },
        {
          driverId: 'arnoux',
          url: 'http://en.wikipedia.org/wiki/Ren%C3%A9_Arnoux',
          givenName: 'René',
          familyName: 'Arnoux',
          dateOfBirth: '1948-07-04',
          nationality: 'French',
        },
      ],
    },
  },
};
const History: React.FC = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text
          style={{
            fontSize: 14,
            fontFamily: 'Inter-SemiBold',
          }}>
          História
        </Text>
      ),
      headerLeft: props => (
        <Pressable
          {...props}
          onPress={() => navigation.goBack()}
          style={{
            width: 40,
            height: 40,
            backgroundColor: Colors.PRIMARY_50,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 7,
          }}>
          <ArrowLeft />
        </Pressable>
      ),
    });
  }, [navigation]);

  //TODO: ORDENAR DATAS DE PILOTOS APARITR DE 1 DE JANEIRO DE 1960
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

          <Text style={{color: Colors.NEUTRO_500, fontWeight: 'semibold'}}>
            Conheça os nomes que fizeram história, desde os pioneiros até os
            campeões inesquecíveis.
          </Text>
        </View>

        <View style={{marginTop: 42}}>
          <Text style={{color: '#808080', marginBottom: 10, fontSize: 12}}>
            Pilotos
          </Text>

          <View style={styles.card}>
            {getDriversAfter1960(Drivers.MRData.DriverTable.Drivers).map(
              (item: any) => (
                <View key={item.driverId} style={styles.cardItem}>
                  <CountriesIcon type={item.nationality} />

                  <View style={{flexDirection: 'column'}}>
                    <Text>{item.givenName}</Text>
                    <Text>Nascido em 10 de julho de 1932</Text>
                  </View>
                </View>
              ),
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    paddingHorizontal: 20,
  },
  container: {
    // alignItems: 'center',
    marginTop: 40,
  },
  card: {
    gap: 12,
  },
  cardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 68,
    width: 335,
    gap: 16,
    paddingLeft: 12,
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: Colors.NEUTRO_200,
  },
});

export default History;
