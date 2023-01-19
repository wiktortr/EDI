import {
  NUMBER_OF_DATASETS,
  API_URL_BASE,
  DATA_FORMAT,
  minMarketValueByCountry,
  maxMarketValueByCountry,
  uniqueNationalities,
  sumGoalsByCountry,
} from './consts.js';

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

//dynamically get chart 1 data
export const getChart1Data = (label, type, arr) => ({
  label,
  data: (() => {
    switch (type) {
      case 'min':
        return minMarketValueByCountry(arr);
      case 'max':
        return maxMarketValueByCountry(arr);
    }
  })(),
  borderWidth: 1,
});

export const getChart2Data = (label, arr, countries) => ({
  label,
  data: (() => {
    let result = [];
    for (let i = 0; i < countries.length; i++)
      result.push(sumGoalsByCountry(arr, countries[i]));
    return result;
  })(),
  borderWidth: 1,
});

export const chartBuilder = (ctx, type, labels, datasets) => {
  //clear chart befor generating new one
  let chartStatus = Chart.getChart(ctx); // <canvas> id
  if (chartStatus != undefined) {
    chartStatus.destroy();
  }

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
};

// create dynamic API_URL
export const getApiUrl = (number) => `${API_URL_BASE}${number}.${DATA_FORMAT}`;
