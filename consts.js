import { getTableData } from './table.js';
import {
  datasetGenerator,
  getApiUrl,
  getChart1Data,
  zeroPad,
} from './utils.js';

export const COUNTRIES = [
  'Brazylia',
  'Francja',
  'Niemcy',
  'Włochy',
  'Holandia',
  'Norwegia',
  'Polska',
  'Portugalia',
];

//Get all unique countries from given dataset (json)

export const uniqueNationalities = async (number) => {
  let arr = await getTableData(getApiUrl(number));
  return [...new Set(arr.map((player) => player.nationality))];
};

//get all min player market value grouped by country
export const minMarketValueByCountry = (arr) => {
  const uniqueCountries = [...new Set(arr.map((player) => player.nationality))];
  return uniqueCountries.reduce((acc, country) => {
    const countryPlayers = arr.filter(
      (player) => player.nationality === country
    );
    const minMarketValue = Math.min(
      ...countryPlayers.map((player) => player.market_value)
    );
    acc[country] = minMarketValue;
    return acc;
  }, {});
};

//get all max player market value grouped by country
export const maxMarketValueByCountry = (arr) => {
  const uniqueCountries = [...new Set(arr.map((player) => player.nationality))];
  return uniqueCountries.reduce((acc, country) => {
    const countryPlayers = arr.filter(
      (player) => player.nationality === country
    );
    const maxMarketValue = Math.max(
      ...countryPlayers.map((player) => player.market_value)
    );
    acc[country] = maxMarketValue;
    return acc;
  }, {});
};

export const YEARS = new Array(10)
  .fill(0)
  .map((_, i) => `20${zeroPad(13 + i, 2)}r`);

export const CHART_1_DATASETS = [
  datasetGenerator('Najniższa W. Rynkowa', COUNTRIES.length, 5000, 10000),
  datasetGenerator('Najwyższa W. Rynkowa', COUNTRIES.length, 5000, 100000),
];

export const getChart1Dataset = (arr) => {
  return [
    getChart1Data('Najniższa W. Rynkowa', 'min', arr),
    getChart1Data('Najwyższa W. Rynkowa', 'max', arr),
  ];
};

export const CHART_2_DATASETS = [
  datasetGenerator('Brazylia', YEARS.length, 1, 5),
  datasetGenerator('Francja', YEARS.length, 3, 10),
  datasetGenerator('Niemcy', YEARS.length, 2, 10),
  datasetGenerator('Włochy', YEARS.length, 1, 7),
];

export const API_URL_BASE =
  'https://raw.githubusercontent.com/wiktortr/EDI/main/jsons/players';

export const DATA_FORMAT = 'json';

export const NUMBER_OF_DATASETS = 3;
