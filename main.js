import {
  COUNTRIES,
  CHART_1_DATASETS,
  YEARS,
  CHART_2_DATASETS,
} from './consts.js';
import { chartBuilder, getNextApiUrl } from './utils.js';
import {
  appendToTable,
  clearTable,
  getTableData,
  tableBuilder,
} from './table.js';

const createTable = async () => {
  clearTable();
  document.getElementById('spinner').style.visibility = '';
  const showMoreData = document.getElementById('showMoreData');
  const data = await getTableData(getNextApiUrl());
  tableBuilder(data.slice(0, 10));
  document.getElementById('spinner').style.visibility = 'hidden';

  showMoreData.onclick = () => {
    appendToTable(data.slice(10, 100));
    showMoreData.style.visibility = 'hidden';
  };
};

(async () => {
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

  await createTable();

  document.getElementById('changeDataset').onclick = async () => {
    await createTable();
  };
})();
