export interface INextRace {
  MRData: Mrdata;
}

export interface Mrdata {
  xmlns: string;
  series: string;
  url: string;
  limit: string;
  offset: string;
  total: string;
  RaceTable: RaceTable;
}

export interface RaceTable {
  season: string;
  round: string;
  Races: Race[];
}

export interface Race {
  season: string;
  round: string;
  url: string;
  raceName: string;
  Circuit: Circuit;
  date: string;
  time: string;
  FirstPractice: FirstPractice;
  Qualifying: Qualifying;
  SecondPractice: SecondPractice;
  Sprint: Sprint;
}

export interface Circuit {
  circuitId: string;
  url: string;
  circuitName: string;
  Location: Location;
}

export interface Location {
  lat: string;
  long: string;
  locality: string;
  country: string;
}

export interface FirstPractice {
  date: string;
  time: string;
}

export interface Qualifying {
  date: string;
  time: string;
}

export interface SecondPractice {
  date: string;
  time: string;
}

export interface Sprint {
  date: string;
  time: string;
}
