export type DaysOfWeek = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday'

export interface IBaseCountryDescription {
  common: string,
  official: string,
}

export interface INativeCountryName {
  [T: string]: IBaseCountryDescription
}
export interface ICountryName extends IBaseCountryDescription{
  nativeName: INativeCountryName
}

export interface IBaseImgPath {
  svg: string;
  png: string;
}
export interface ICountryFlags extends IBaseImgPath{
  alt?: string;
}

export interface ICountryCurrency {
  [T: string]: {
    name: string;
    symbol: string;
  }
}

export interface ICountryLanguage {
  [T: string]: string;
}

export interface ICountryTranslation {
  [T: string]: string;
}

export interface ICountryRegionalBlock {
  acronym: string;
  name: string;
  otherNames?: string[];
}

export interface ICountryIDD {
  root: string;
  suffixes: string[];
}

export interface IDemonymDescription {
  f: string;
  m: string;
}
export interface ICountryDemonyms {
  [T: string]: IDemonymDescription;
}

export interface ICountryMaps {
  "googleMaps": string;
  "openStreetMaps": string;
}

export interface ICountryCar {
  signs: string[]
  side: 'left' | 'right'
}

export interface ICountryPostalCode {
  formst: string;
  regex: string;
}

export interface ICountry {
  name: ICountryName;
  tld: string[];
  cca2: string;
  cca3: string;
  ccn3: string;
  cioc?: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: ICountryCurrency;
  idd?: ICountryIDD;
  capital: string;
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: ICountryLanguage;
  translations: ICountryTranslation;
  latlng: number[];
  landlocked: boolean;
  borders?: string[];
  area: number;
  demonyms: ICountryDemonyms;
  flag: string;
  maps: ICountryMaps;
  population: number;
  gini?: {
    [T: string]: number;
  };
  fifa: string;
  car: ICountryCar;
  timezones: string[];
  continents: string[];
  flags: ICountryFlags;

  callingCodes: string[];
  coatOfArms: IBaseImgPath;
  startOfWeek: DaysOfWeek;
  capitalInfo: {
    latlng: number[];
  }
  postalCode: ICountryPostalCode;
}

export interface ICountryInfoElement {
  title: string;
  description: string;
}

export interface ICountryInfo {
  img: string;
  name: string;
  info: ICountryInfoElement[];
  linkPath: string;
}
