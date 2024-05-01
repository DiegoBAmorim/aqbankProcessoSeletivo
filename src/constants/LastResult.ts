export const LastResult = {
  MRData: {
    xmlns: 'http://ergast.com/mrd/1.5',
    series: 'f1',
    url: 'http://ergast.com/api/f1/current/last/results.json',
    limit: '30',
    offset: '0',
    total: '20',
    RaceTable: {
      season: '2024',
      round: '5',
      Races: [
        {
          season: '2024',
          round: '5',
          url: 'https://en.wikipedia.org/wiki/2024_Chinese_Grand_Prix',
          raceName: 'Chinese Grand Prix',
          Circuit: {
            circuitId: 'shanghai',
            url: 'http://en.wikipedia.org/wiki/Shanghai_International_Circuit',
            circuitName: 'Shanghai International Circuit',
            Location: {
              lat: '31.3389',
              long: '121.22',
              locality: 'Shanghai',
              country: 'China',
            },
          },
          date: '2024-04-21',
          time: '07:00:00Z',
          Results: [
            {
              number: '1',
              position: '1',
              positionText: '1',
              points: '25',
              Driver: {
                driverId: 'max_verstappen',
                permanentNumber: '33',
                code: 'VER',
                url: 'http://en.wikipedia.org/wiki/Max_Verstappen',
                givenName: 'Max',
                familyName: 'Verstappen',
                dateOfBirth: '1997-09-30',
                nationality: 'Dutch',
              },
              Constructor: {
                constructorId: 'red_bull',
                url: 'http://en.wikipedia.org/wiki/Red_Bull_Racing',
                name: 'Red Bull',
                nationality: 'Austrian',
              },
              grid: '1',
              laps: '56',
              status: 'Finished',
              Time: {
                millis: '6052554',
                time: '1:40:52.554',
              },
              FastestLap: {
                rank: '2',
                lap: '33',
                Time: {
                  time: '1:38.406',
                },
                AverageSpeed: {
                  units: 'kph',
                  speed: '199.414',
                },
              },
            },
            {
              number: '4',
              position: '2',
              positionText: '2',
              points: '18',
              Driver: {
                driverId: 'norris',
                permanentNumber: '4',
                code: 'NOR',
                url: 'http://en.wikipedia.org/wiki/Lando_Norris',
                givenName: 'Lando',
                familyName: 'Norris',
                dateOfBirth: '1999-11-13',
                nationality: 'British',
              },
              Constructor: {
                constructorId: 'mclaren',
                url: 'http://en.wikipedia.org/wiki/McLaren',
                name: 'McLaren',
                nationality: 'British',
              },
              grid: '4',
              laps: '56',
              status: 'Finished',
              Time: {
                millis: '6066327',
                time: '+13.773',
              },
              FastestLap: {
                rank: '4',
                lap: '1',
                Time: {
                  time: '1:38.751',
                },
                AverageSpeed: {
                  units: 'kph',
                  speed: '198.717',
                },
              },
            },
            {
              number: '11',
              position: '3',
              positionText: '3',
              points: '15',
              Driver: {
                driverId: 'perez',
                permanentNumber: '11',
                code: 'PER',
                url: 'http://en.wikipedia.org/wiki/Sergio_P%C3%A9rez',
                givenName: 'Sergio',
                familyName: 'Pérez',
                dateOfBirth: '1990-01-26',
                nationality: 'Mexican',
              },
              Constructor: {
                constructorId: 'red_bull',
                url: 'http://en.wikipedia.org/wiki/Red_Bull_Racing',
                name: 'Red Bull',
                nationality: 'Austrian',
              },
              grid: '2',
              laps: '56',
              status: 'Finished',
              Time: {
                millis: '6071714',
                time: '+19.160',
              },
              FastestLap: {
                rank: '7',
                lap: '33',
                Time: {
                  time: '1:39.388',
                },
                AverageSpeed: {
                  units: 'kph',
                  speed: '197.444',
                },
              },
            },
            {
              number: '16',
              position: '4',
              positionText: '4',
              points: '12',
              Driver: {
                driverId: 'leclerc',
                permanentNumber: '16',
                code: 'LEC',
                url: 'http://en.wikipedia.org/wiki/Charles_Leclerc',
                givenName: 'Charles',
                familyName: 'Leclerc',
                dateOfBirth: '1997-10-16',
                nationality: 'Monegasque',
              },
              Constructor: {
                constructorId: 'ferrari',
                url: 'http://en.wikipedia.org/wiki/Scuderia_Ferrari',
                name: 'Ferrari',
                nationality: 'Italian',
              },
              grid: '6',
              laps: '56',
              status: 'Finished',
              Time: {
                millis: '6076177',
                time: '+23.623',
              },
              FastestLap: {
                rank: '6',
                lap: '33',
                Time: {
                  time: '1:39.384',
                },
                AverageSpeed: {
                  units: 'kph',
                  speed: '197.452',
                },
              },
            },
            {
              number: '55',
              position: '5',
              positionText: '5',
              points: '10',
              Driver: {
                driverId: 'sainz',
                permanentNumber: '55',
                code: 'SAI',
                url: 'http://en.wikipedia.org/wiki/Carlos_Sainz_Jr.',
                givenName: 'Carlos',
                familyName: 'Sainz',
                dateOfBirth: '1994-09-01',
                nationality: 'Spanish',
              },
              Constructor: {
                constructorId: 'ferrari',
                url: 'http://en.wikipedia.org/wiki/Scuderia_Ferrari',
                name: 'Ferrari',
                nationality: 'Italian',
              },
              grid: '7',
              laps: '56',
              status: 'Finished',
              Time: {
                millis: '6086537',
                time: '+33.983',
              },
              FastestLap: {
                rank: '10',
                lap: '19',
                Time: {
                  time: '1:39.764',
                },
                AverageSpeed: {
                  units: 'kph',
                  speed: '196.700',
                },
              },
            },
            {
              number: '63',
              position: '6',
              positionText: '6',
              points: '8',
              Driver: {
                driverId: 'russell',
                permanentNumber: '63',
                code: 'RUS',
                url: 'http://en.wikipedia.org/wiki/George_Russell_(racing_driver)',
                givenName: 'George',
                familyName: 'Russell',
                dateOfBirth: '1998-02-15',
                nationality: 'British',
              },
              Constructor: {
                constructorId: 'mercedes',
                url: 'http://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One',
                name: 'Mercedes',
                nationality: 'German',
              },
              grid: '8',
              laps: '56',
              status: 'Finished',
              Time: {
                millis: '6091278',
                time: '+38.724',
              },
              FastestLap: {
                rank: '11',
                lap: '39',
                Time: {
                  time: '1:40.112',
                },
                AverageSpeed: {
                  units: 'kph',
                  speed: '196.016',
                },
              },
            },
            {
              number: '14',
              position: '7',
              positionText: '7',
              points: '7',
              Driver: {
                driverId: 'alonso',
                permanentNumber: '14',
                code: 'ALO',
                url: 'http://en.wikipedia.org/wiki/Fernando_Alonso',
                givenName: 'Fernando',
                familyName: 'Alonso',
                dateOfBirth: '1981-07-29',
                nationality: 'Spanish',
              },
              Constructor: {
                constructorId: 'aston_martin',
                url: 'http://en.wikipedia.org/wiki/Aston_Martin_in_Formula_One',
                name: 'Aston Martin',
                nationality: 'British',
              },
              grid: '3',
              laps: '56',
              status: 'Finished',
              Time: {
                millis: '6095968',
                time: '+43.414',
              },
              FastestLap: {
                rank: '1',
                lap: '45',
                Time: {
                  time: '1:37.810',
                },
                AverageSpeed: {
                  units: 'kph',
                  speed: '200.629',
                },
              },
            },
            {
              number: '81',
              position: '8',
              positionText: '8',
              points: '4',
              Driver: {
                driverId: 'piastri',
                permanentNumber: '81',
                code: 'PIA',
                url: 'http://en.wikipedia.org/wiki/Oscar_Piastri',
                givenName: 'Oscar',
                familyName: 'Piastri',
                dateOfBirth: '2001-04-06',
                nationality: 'Australian',
              },
              Constructor: {
                constructorId: 'mclaren',
                url: 'http://en.wikipedia.org/wiki/McLaren',
                name: 'McLaren',
                nationality: 'British',
              },
              grid: '5',
              laps: '56',
              status: 'Finished',
              Time: {
                millis: '6108752',
                time: '+56.198',
              },
              FastestLap: {
                rank: '9',
                lap: '1',
                Time: {
                  time: '1:39.739',
                },
                AverageSpeed: {
                  units: 'kph',
                  speed: '196.749',
                },
              },
            },
            {
              number: '44',
              position: '9',
              positionText: '9',
              points: '2',
              Driver: {
                driverId: 'hamilton',
                permanentNumber: '44',
                code: 'HAM',
                url: 'http://en.wikipedia.org/wiki/Lewis_Hamilton',
                givenName: 'Lewis',
                familyName: 'Hamilton',
                dateOfBirth: '1985-01-07',
                nationality: 'British',
              },
              Constructor: {
                constructorId: 'mercedes',
                url: 'http://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One',
                name: 'Mercedes',
                nationality: 'German',
              },
              grid: '18',
              laps: '56',
              status: 'Finished',
              Time: {
                millis: '6110540',
                time: '+57.986',
              },
              FastestLap: {
                rank: '14',
                lap: '34',
                Time: {
                  time: '1:40.835',
                },
                AverageSpeed: {
                  units: 'kph',
                  speed: '194.610',
                },
              },
            },
            {
              number: '27',
              position: '10',
              positionText: '10',
              points: '1',
              Driver: {
                driverId: 'hulkenberg',
                permanentNumber: '27',
                code: 'HUL',
                url: 'http://en.wikipedia.org/wiki/Nico_H%C3%BClkenberg',
                givenName: 'Nico',
                familyName: 'Hülkenberg',
                dateOfBirth: '1987-08-19',
                nationality: 'German',
              },
              Constructor: {
                constructorId: 'haas',
                url: 'http://en.wikipedia.org/wiki/Haas_F1_Team',
                name: 'Haas F1 Team',
                nationality: 'American',
              },
              grid: '9',
              laps: '56',
              status: 'Finished',
              Time: {
                millis: '6113030',
                time: '+1:00.476',
              },
              FastestLap: {
                rank: '13',
                lap: '32',
                Time: {
                  time: '1:40.815',
                },
                AverageSpeed: {
                  units: 'kph',
                  speed: '194.649',
                },
              },
            },
            {
              number: '31',
              position: '11',
              positionText: '11',
              points: '0',
              Driver: {
                driverId: 'ocon',
                permanentNumber: '31',
                code: 'OCO',
                url: 'http://en.wikipedia.org/wiki/Esteban_Ocon',
                givenName: 'Esteban',
                familyName: 'Ocon',
                dateOfBirth: '1996-09-17',
                nationality: 'French',
              },
              Constructor: {
                constructorId: 'alpine',
                url: 'http://en.wikipedia.org/wiki/Alpine_F1_Team',
                name: 'Alpine F1 Team',
                nationality: 'French',
              },
              grid: '13',
              laps: '56',
              status: 'Finished',
              Time: {
                millis: '6115366',
                time: '+1:02.812',
              },
              FastestLap: {
                rank: '15',
                lap: '33',
                Time: {
                  time: '1:40.937',
                },
                AverageSpeed: {
                  units: 'kph',
                  speed: '194.414',
                },
              },
            },
            {
              number: '23',
              position: '12',
              positionText: '12',
              points: '0',
              Driver: {
                driverId: 'albon',
                permanentNumber: '23',
                code: 'ALB',
                url: 'http://en.wikipedia.org/wiki/Alexander_Albon',
                givenName: 'Alexander',
                familyName: 'Albon',
                dateOfBirth: '1996-03-23',
                nationality: 'Thai',
              },
              Constructor: {
                constructorId: 'williams',
                url: 'http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering',
                name: 'Williams',
                nationality: 'British',
              },
              grid: '14',
              laps: '56',
              status: 'Finished',
              Time: {
                millis: '6118060',
                time: '+1:05.506',
              },
              FastestLap: {
                rank: '12',
                lap: '34',
                Time: {
                  time: '1:40.790',
                },
                AverageSpeed: {
                  units: 'kph',
                  speed: '194.697',
                },
              },
            },
            {
              number: '10',
              position: '13',
              positionText: '13',
              points: '0',
              Driver: {
                driverId: 'gasly',
                permanentNumber: '10',
                code: 'GAS',
                url: 'http://en.wikipedia.org/wiki/Pierre_Gasly',
                givenName: 'Pierre',
                familyName: 'Gasly',
                dateOfBirth: '1996-02-07',
                nationality: 'French',
              },
              Constructor: {
                constructorId: 'alpine',
                url: 'http://en.wikipedia.org/wiki/Alpine_F1_Team',
                name: 'Alpine F1 Team',
                nationality: 'French',
              },
              grid: '15',
              laps: '56',
              status: 'Finished',
              Time: {
                millis: '6121777',
                time: '+1:09.223',
              },
              FastestLap: {
                rank: '5',
                lap: '40',
                Time: {
                  time: '1:39.198',
                },
                AverageSpeed: {
                  units: 'kph',
                  speed: '197.822',
                },
              },
            },
            {
              number: '24',
              position: '14',
              positionText: '14',
              points: '0',
              Driver: {
                driverId: 'zhou',
                permanentNumber: '24',
                code: 'ZHO',
                url: 'http://en.wikipedia.org/wiki/Zhou_Guanyu',
                givenName: 'Guanyu',
                familyName: 'Zhou',
                dateOfBirth: '1999-05-30',
                nationality: 'Chinese',
              },
              Constructor: {
                constructorId: 'sauber',
                url: 'http://en.wikipedia.org/wiki/Sauber_Motorsport',
                name: 'Sauber',
                nationality: 'Swiss',
              },
              grid: '16',
              laps: '56',
              status: 'Finished',
              Time: {
                millis: '6124243',
                time: '+1:11.689',
              },
              FastestLap: {
                rank: '3',
                lap: '42',
                Time: {
                  time: '1:38.633',
                },
                AverageSpeed: {
                  units: 'kph',
                  speed: '198.955',
                },
              },
            },
            {
              number: '18',
              position: '15',
              positionText: '15',
              points: '0',
              Driver: {
                driverId: 'stroll',
                permanentNumber: '18',
                code: 'STR',
                url: 'http://en.wikipedia.org/wiki/Lance_Stroll',
                givenName: 'Lance',
                familyName: 'Stroll',
                dateOfBirth: '1998-10-29',
                nationality: 'Canadian',
              },
              Constructor: {
                constructorId: 'aston_martin',
                url: 'http://en.wikipedia.org/wiki/Aston_Martin_in_Formula_One',
                name: 'Aston Martin',
                nationality: 'British',
              },
              grid: '11',
              laps: '56',
              status: 'Finished',
              Time: {
                millis: '6135340',
                time: '+1:22.786',
              },
              FastestLap: {
                rank: '8',
                lap: '37',
                Time: {
                  time: '1:39.444',
                },
                AverageSpeed: {
                  units: 'kph',
                  speed: '197.333',
                },
              },
            },
            {
              number: '20',
              position: '16',
              positionText: '16',
              points: '0',
              Driver: {
                driverId: 'kevin_magnussen',
                permanentNumber: '20',
                code: 'MAG',
                url: 'http://en.wikipedia.org/wiki/Kevin_Magnussen',
                givenName: 'Kevin',
                familyName: 'Magnussen',
                dateOfBirth: '1992-10-05',
                nationality: 'Danish',
              },
              Constructor: {
                constructorId: 'haas',
                url: 'http://en.wikipedia.org/wiki/Haas_F1_Team',
                name: 'Haas F1 Team',
                nationality: 'American',
              },
              grid: '17',
              laps: '56',
              status: 'Finished',
              Time: {
                millis: '6140087',
                time: '+1:27.533',
              },
              FastestLap: {
                rank: '18',
                lap: '45',
                Time: {
                  time: '1:41.077',
                },
                AverageSpeed: {
                  units: 'kph',
                  speed: '194.145',
                },
              },
            },
            {
              number: '2',
              position: '17',
              positionText: '17',
              points: '0',
              Driver: {
                driverId: 'sargeant',
                permanentNumber: '2',
                code: 'SAR',
                url: 'http://en.wikipedia.org/wiki/Logan_Sargeant',
                givenName: 'Logan',
                familyName: 'Sargeant',
                dateOfBirth: '2000-12-31',
                nationality: 'American',
              },
              Constructor: {
                constructorId: 'williams',
                url: 'http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering',
                name: 'Williams',
                nationality: 'British',
              },
              grid: '20',
              laps: '56',
              status: 'Finished',
              Time: {
                millis: '6147664',
                time: '+1:35.110',
              },
              FastestLap: {
                rank: '17',
                lap: '14',
                Time: {
                  time: '1:41.000',
                },
                AverageSpeed: {
                  units: 'kph',
                  speed: '194.293',
                },
              },
            },
            {
              number: '3',
              position: '18',
              positionText: 'R',
              points: '0',
              Driver: {
                driverId: 'ricciardo',
                permanentNumber: '3',
                code: 'RIC',
                url: 'http://en.wikipedia.org/wiki/Daniel_Ricciardo',
                givenName: 'Daniel',
                familyName: 'Ricciardo',
                dateOfBirth: '1989-07-01',
                nationality: 'Australian',
              },
              Constructor: {
                constructorId: 'rb',
                url: 'http://en.wikipedia.org/wiki/RB_Formula_One_Team',
                name: 'RB F1 Team',
                nationality: 'Italian',
              },
              grid: '12',
              laps: '33',
              status: 'Retired',
              FastestLap: {
                rank: '16',
                lap: '16',
                Time: {
                  time: '1:40.994',
                },
                AverageSpeed: {
                  units: 'kph',
                  speed: '194.304',
                },
              },
            },
            {
              number: '22',
              position: '19',
              positionText: 'R',
              points: '0',
              Driver: {
                driverId: 'tsunoda',
                permanentNumber: '22',
                code: 'TSU',
                url: 'http://en.wikipedia.org/wiki/Yuki_Tsunoda',
                givenName: 'Yuki',
                familyName: 'Tsunoda',
                dateOfBirth: '2000-05-11',
                nationality: 'Japanese',
              },
              Constructor: {
                constructorId: 'rb',
                url: 'http://en.wikipedia.org/wiki/RB_Formula_One_Team',
                name: 'RB F1 Team',
                nationality: 'Italian',
              },
              grid: '19',
              laps: '26',
              status: 'Retired',
              FastestLap: {
                rank: '20',
                lap: '11',
                Time: {
                  time: '1:41.593',
                },
                AverageSpeed: {
                  units: 'kph',
                  speed: '193.158',
                },
              },
            },
            {
              number: '77',
              position: '20',
              positionText: 'R',
              points: '0',
              Driver: {
                driverId: 'bottas',
                permanentNumber: '77',
                code: 'BOT',
                url: 'http://en.wikipedia.org/wiki/Valtteri_Bottas',
                givenName: 'Valtteri',
                familyName: 'Bottas',
                dateOfBirth: '1989-08-28',
                nationality: 'Finnish',
              },
              Constructor: {
                constructorId: 'sauber',
                url: 'http://en.wikipedia.org/wiki/Sauber_Motorsport',
                name: 'Sauber',
                nationality: 'Swiss',
              },
              grid: '10',
              laps: '19',
              status: 'Retired',
              FastestLap: {
                rank: '19',
                lap: '11',
                Time: {
                  time: '1:41.276',
                },
                AverageSpeed: {
                  units: 'kph',
                  speed: '193.763',
                },
              },
            },
          ],
        },
      ],
    },
  },
};
