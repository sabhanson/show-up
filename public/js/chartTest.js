const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Yearly Data",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [19, 10, 5, 2, 20, 30, 45, 30, 30, 20, 23, 12],
    },
  ],
};
const config = {
  type: "bar",
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};

const myChart = new Chart(document.getElementById("myChart"), config);
