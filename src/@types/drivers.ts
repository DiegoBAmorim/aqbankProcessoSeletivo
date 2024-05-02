export interface IDrivers {
  MRData: Mrdata;
}

export interface Mrdata {
  xmlns: string;
  series: string;
  url: string;
  limit: string;
  offset: string;
  total: string;
  DriverTable: DriverTable;
}

export interface DriverTable {
  Drivers: Driver[];
}

export interface Driver {
  driverId: string;
  url: string;
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  nationality:
    | 'New Zealander'
    | 'Italian'
    | 'French'
    | 'Belgian'
    | 'Spanish'
    | 'American'
    | 'British'
    | 'Thai'
    | 'German'
    | 'Swedish'
    | 'Dutch';
  permanentNumber?: string;
  code?: string;
}
