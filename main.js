const chartBuilder = (ctx, type, labels, datasetsLabels) =>
  new Chart(ctx, {
    type,
    data: {
      labels,
      datasets: datasetsLabels.map((label) => ({
        label,
        data: new Array(labels.length)
          .fill(0)
          .map((_) => Math.floor(Math.random() * 100)),
        borderWidth: 1,
      })),
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

chartBuilder(
  document.getElementById("chart1"),
  "bar",
  ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  ["dataset 1", "dataset 2"]
);

chartBuilder(
  document.getElementById("chart2"),
  "line",
  ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  ["dataset 1", "dataset 2"]
);
