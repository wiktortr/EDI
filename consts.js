import { getTableData } from './table.js';
import {
  datasetGenerator,
  getApiUrl,
  getChart1Data,
  getChart2Data,
  zeroPad,
} from './utils.js';

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

//sum of all goals by country
export const sumGoalsByCountry = (arr, country) => {
  const countryPlayers = arr.filter((player) => player.nationality === country);
  return countryPlayers.reduce((acc, player) => acc + player.goals, 0);
};

export const YEARS = new Array(10)
  .fill(0)
  .map((_, i) => `20${zeroPad(13 + i, 2)}r`);

// Get data for chart 1 from json file
export const getChart1DataSet = (arr) => {
  return [
    getChart1Data('Najniższa W. Rynkowa', 'min', arr),
    getChart1Data('Najwyższa W. Rynkowa', 'max', arr),
  ];
};

// Get data for chart 2 from json file
// export const getChart2DataSet = (arr, number) => {
//   let countries = uniqueNationalities(number);
//   let results = [];
//   for (let country in countries) results.push(goalsByCountry(arr, country));
//   return results;
// };

export const getChart2DataSet = (arr, countries) => {
  return [getChart2Data('Liczba, goli', arr, countries)];
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
