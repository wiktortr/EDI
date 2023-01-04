import { datasetGenerator, zeroPad } from './utils.js';

export const COUNTRIES = [
  'Brazil',
  'France',
  'Germany',
  'Italy',
  'Netherlands',
  'Norway',
  'Poland',
  'Portugal',
];

export const YEARS = new Array(10)
  .fill(0)
  .map((_, i) => `20${zeroPad(22 - i, 2)}r`);

export const CHART_1_DATASETS = [
  datasetGenerator('Najniższa W. Rynkowa', COUNTRIES.length, 5000, 10000),
  datasetGenerator('Najwyższa W. Rynkowa', COUNTRIES.length, 5000, 100000),
];

export const CHART_2_DATASETS = [
  datasetGenerator('Brazil', YEARS.length, 1, 5),
  datasetGenerator('France', YEARS.length, 3, 10),
  datasetGenerator('Germany', YEARS.length, 2, 10),
  datasetGenerator('Italy', YEARS.length, 1, 7),
];
