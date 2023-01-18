import { datasetGenerator, zeroPad } from './utils.js';

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

export const YEARS = new Array(10)
  .fill(0)
  .map((_, i) => `20${zeroPad(13 + i, 2)}r`);

export const CHART_1_DATASETS = [
  datasetGenerator('Najniższa W. Rynkowa', COUNTRIES.length, 5000, 10000),
  datasetGenerator('Najwyższa W. Rynkowa', COUNTRIES.length, 5000, 100000),
];

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
