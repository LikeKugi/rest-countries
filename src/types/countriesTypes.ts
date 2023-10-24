export interface ICountryFlags {
  svg: string;
  png: string;
}

export interface ICountryCurrency {
  code: string;
  name: string;
  symbol: string;
}

export interface ICountryLanguage {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

export interface ICountryTranslation {
  [T: string]: string;
}

export interface ICountryRegionalBlock {
  acronym: string;
  name: string;
  otherNames?: string[];
}

export interface ICountry {
  name: string;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital: string;
  altSpellings: string[];
  subregion: string;
  region: string;
  population: number;
  latlng: number[];
  demonym: string;
  area: number;
  gini?: number;
  timezones: string[];
  borders?: string[];
  nativeName: string;
  numericCode: string;
  flags: ICountryFlags;
  currencies: ICountryCurrency[];
  languages: ICountryLanguage[];
  translations: ICountryTranslation;
  flag: string;
  regionalBlocs: ICountryRegionalBlock[];
  cioc?: string;
  independent: boolean;
}

export interface ICountryInfoElement {
  title: string;
  description: string;
}

export interface ICountryInfo {
  img: string;
  name: string;
  info: ICountryInfoElement[];
}
