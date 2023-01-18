import { NUMBER_OF_DATASETS, API_URL_BASE, DATA_FORMAT } from './consts.js';

export const zeroPad = (num, places) => String(num).padStart(places, '0');

export const randomValue = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const datasetGenerator = (label, num, minVal, maxVal) => ({
  label,
  data: new Array(num).fill(0).map((_) => randomValue(minVal, maxVal)),
  borderWidth: 1,
});

export const chartBuilder = (ctx, type, labels, datasets) =>
  new Chart(ctx, {
    type,
    data: {
      labels,
      datasets,
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

function* datasetNumberGenerator() {
  let dataset = 0;
  while (true) {
    yield dataset;
    dataset = (dataset + 1) % NUMBER_OF_DATASETS;
  }
}

const nextJsonNumberGen = datasetNumberGenerator();

export const getNextApiUrl = () =>
  `${API_URL_BASE}${nextJsonNumberGen.next().value}.${DATA_FORMAT}`;
