// Draw bar chart using chart.js
const drawChart = (jsonData) => {
  const options = {
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        yAlign: 'bottom',
        xAlign: 'center',
        callbacks: {
          title: (context) => {
            return `$${context[0].raw}`;
          },
          label: () => {
            return;
          }
        }
      }
    },
    scales:
    {
      y: {
        display: false,
      },
      x: {
        grid: {
          display: false
        }
      }
    },
    onHover: (event, chartElement) => {
      if (chartElement.length == 1) {
        event.native.target.style.cursor = 'pointer';
      }
    },
    borderRadius: 5,
  };

  const data = {
    labels: jsonData.day,
    datasets: [{
      data: jsonData.amount,
      backgroundColor: jsonData.backgroundColor,
    }],
  };

  const ctx = document.getElementById("chart").getContext('2d');

  new Chart(ctx, {
    type: 'bar',
    data,
    options
  });
}

// Collect data from data.json
const ulr = "./data.json";
const jsonData = {
  day: [],
  amount: [],
  backgroundColor: [],
};

fetch(ulr)
  .then(res => res.json())
  .then(data => {
    data.forEach((d) => {
      jsonData.day.push(d.day);
      jsonData.amount.push(d.amount);
      jsonData.backgroundColor.push('hsl(10, 79%, 65%)');
    });
    const maxAmountIndex = jsonData.amount.indexOf(Math.max(...jsonData.amount));
    jsonData.backgroundColor.splice(maxAmountIndex, 1, 'hsl(186, 34%, 60%)');
  })
  .then(() => {
    drawChart(jsonData);
  })
  .catch(err => {
    throw new Error(err)
  });
