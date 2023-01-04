import {
  COUNTRIES,
  CHART_1_DATASETS,
  YEARS,
  CHART_2_DATASETS,
  API_URL,
} from './consts.js';
import { chartBuilder } from './utils.js';
import { tableBuilder } from './table.js';

async function getPlayersData() {
  const data = await fetch(API_URL);
  return await data.json();
}

function hideSpinner() {
  document.getElementById('spinner').style.visibility = 'hidden';
}

getPlayersData().then((data) => {
  tableBuilder(data);
  hideSpinner();
});

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
