import {
  COUNTRIES,
  CHART_1_DATASETS,
  YEARS,
  CHART_2_DATASETS,
  API_URL,
} from './consts.js';
import { chartBuilder } from './utils.js';

async function getPlayersData() {
  const data = await fetch(API_URL);
  return await data.json();
}

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

function createTableHeaderNames(data) {
  return Object.keys(data[0])
    .map((h) => h.replaceAll('_', ' '))
    .map(capitalize);
}

function createHeaderElement(header) {
  const th = document.createElement('th');
  th.innerText = header;
  th.setAttribute('scope', 'col');
  return th;
}

function createTableDataElement(tableData) {
  const td = document.createElement('td');
  td.innerHTML = tableData;
  return td;
}

function createRow(rowData) {
  const tr = document.createElement('tr');
  Object.values(rowData)
    .map(createTableDataElement)
    .forEach((el) => tr.appendChild(el));

  return tr;
}

function createTable(data) {
  const tableHeadersElement = document.getElementById('table_headers');
  const tableBody = document.getElementById('table_body');

  createTableHeaderNames(data)
    .map(createHeaderElement)
    .forEach((el) => tableHeadersElement.append(el));

  data.map(createRow).forEach((row) => tableBody.append(row));
}

function hideSpinner() {
  document.getElementById('spinner').style.visibility = 'hidden';
}

getPlayersData().then((data) => {
  createTable(data);
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
