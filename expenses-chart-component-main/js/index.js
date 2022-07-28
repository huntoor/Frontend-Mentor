// Draw bar chart using chart.js
const drawChart = (jsonData) => {
  const options = {
    plugins:{
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
  
  const data =  {
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
const jsonData = {
  day: [],
  amount: [],
  backgroundColor: [],
  total: 0
};

fetch("/data.json")
  .then(res => res.json())
  .then(data => {
    data.forEach((d, index) => {
      jsonData.day.push(d.day);
      jsonData.amount.push(d.amount);
      jsonData.backgroundColor.push('hsl(10, 79%, 65%)');
    });
    const maxAmountIndex = jsonData.amount.indexOf(Math.max(...jsonData.amount));
    jsonData.backgroundColor.splice(maxAmountIndex, 1, 'hsl(186, 34%, 60%)');
    jsonData.total = jsonData.amount.reduce((prev, curr) => {
      return prev + curr;
    }, 0);
  })
  .then(() => {
    drawChart(jsonData);
    document.getElementById("total-spent").innerHTML = `$${jsonData.total}`;
  })
  .catch(err => {
    throw new Error(err)
  });