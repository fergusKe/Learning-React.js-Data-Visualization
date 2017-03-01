import React from 'react';
import ReactDom from 'react-dom';
import Chart from './components/chart';

const data = {
  type: "bar",
  data: {
    labels: ["Ben", "James", "Mary"],
    datasets: [{
      label: 'Fun',
      data: [12, 54, 66],
      backgroundColor: "rgba(255, 0, 0, .2)",
      borderWidth: 1
    }, {
      label: 'Smart',
      data: [62, 34, 76],
      backgroundColor: "rgba(0, 0, 255, .4)",
      borderWidth: 1
    }]
  },
  options: {

  }
}

ReactDom.render(<Chart {...data} />, document.getElementById('react'));
