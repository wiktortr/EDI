import {
  COUNTRIES,
  CHART_1_DATASETS,
  YEARS,
  CHART_2_DATASETS,
} from './consts.js';
import { chartBuilder } from './utils.js';

chartBuilder(
  document.getElementById('chart1'),
  'bar',
  COUNTRIES,
  CHART_1_DATASETS
);

chartBuilder(
  document.getElementById('chart2'),
  'line',
  YEARS,
  CHART_2_DATASETS
);
