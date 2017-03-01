import React from 'react';
import ReactDom from 'react-dom';
import Chart from './components/chart';

const data = {
  type: "bar",
  data: {
    label: ["Ben", "James", "Mary"],
    dataset: [{
      label: 'Fun',
      data: [12, 54, 66],
      backgroundColor: "rgba(255, 0, 0, .2)",
      borderWidth: 1
    }, {
      label: 'Smart',
      data: [62, 34, 76],
      backgroundColor: "rgba(255, 0, 0, .4)",
      borderWidth: 1
    }]
  },
  option: {
    
  }
}

ReactDom.render(<Chart data={...data} />, document.getElementById('react'));
