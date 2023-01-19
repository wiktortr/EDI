import {
  YEARS,
  CHART_2_DATASETS,
  NUMBER_OF_DATASETS,
  uniqueNationalities,
  getChart1DataSet,
  getChart2DataSet,
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
    await uniqueNationalities(0),
    await getChart1DataSet(await getTableData(getApiUrl(0)))
  );

  chartBuilder(
    document.getElementById('chart2'),
    'pie',
    await uniqueNationalities(0),
    await getChart2DataSet(
      await getTableData(getApiUrl(0)),
      await uniqueNationalities(0)
    )
  );

  await createTable();

  for (const number of Array(NUMBER_OF_DATASETS).keys()) {
    document.getElementById(`changeDataset${number}`).onclick = async () => {
      await createTable(number);

      chartBuilder(
        document.getElementById('chart1'),
        'bar',
        await uniqueNationalities(number),
        await getChart1DataSet(await getTableData(getApiUrl(number)))
      );
      chartBuilder(
        document.getElementById('chart2'),
        'pie',
        await uniqueNationalities(number),
        await getChart2DataSet(
          await getTableData(getApiUrl(number)),
          await uniqueNationalities(number)
        )
      );
    };
  }
})();
