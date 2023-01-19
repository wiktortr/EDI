import {
  COUNTRIES,
  CHART_1_DATASETS,
  YEARS,
  CHART_2_DATASETS,
  NUMBER_OF_DATASETS,
} from './consts.js';
import { chartBuilder, getApiUrl } from './utils.js';
import {
  appendToTable,
  clearTable,
  getTableData,
  tableBuilder,
} from './table.js';

const createTable = async (number = 0) => {
  clearTable();
  document.getElementById('spinner').style.visibility = '';
  const showMoreData = document.getElementById('showMoreData');
  showMoreData.style.visibility = '';
  const data = await getTableData(getApiUrl(number));
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

  for (const number of Array(NUMBER_OF_DATASETS).keys()) {
    document.getElementById(`changeDataset${number}`).onclick = async () => {
      await createTable(number);
    };
  }
})();
