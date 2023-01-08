import {
  COUNTRIES,
  CHART_1_DATASETS,
  YEARS,
  CHART_2_DATASETS,
  API_URL,
} from './consts.js';
import { chartBuilder } from './utils.js';
import { appendToTable, getTableData, tableBuilder } from './table.js';

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

  const showMoreData = document.getElementById('showMoreData');
  const data = await getTableData(API_URL);
  tableBuilder(data.slice(0, 10));
  document.getElementById('spinner').style.visibility = 'hidden';

  showMoreData.onclick = () => {
    appendToTable(data.slice(10, 100));
    showMoreData.style.visibility = 'hidden';
  };
})();
