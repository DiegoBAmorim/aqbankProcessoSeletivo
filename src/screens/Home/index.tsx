import React, {useEffect, useState} from 'react';
import {View} from 'react-native';

import {History} from './components/History';
import {Header} from './components/Header';
import {LastRace} from './components/LastRace';

import {INextRace} from '../../@types/nextRace';
import {IRaceResults, Result} from '../../@types/raceResults';

import {httpClient} from '../../services/httpClient';

import {styles} from './styles';

const Home: React.FC = () => {
  const [results, setResults] = useState<IRaceResults>();
  const [driverResults, setDriverResults] = useState<Result[]>([]);
  const [nextRace, setNextRace] = useState<INextRace>();

  useEffect(() => {
    httpClient<IRaceResults>('api/f1/current/last/results.json')
      .then(response => {
        const raceResults =
          response?.data.MRData.RaceTable.Races[0].Results.slice(0, 3);
        setResults(response.data);
        setDriverResults(raceResults);
      })
      .catch(err => console.log(err));

    httpClient<INextRace>('api/f1/current/next.json')
      .then(response => {
        setNextRace(response.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <View style={styles.container}>
      <Header nextRace={nextRace} />

      <LastRace driverResults={driverResults} results={results} />

      <History />
    </View>
  );
};

export default Home;
