import React from 'react';
import ChartJs from 'Chart.js';

export default class Chart extends React.Component {
  render() {
    return <div style={{width: 900, height: 300, backgroundColor: 'blue'}}>
      <canvas></canvas>
    </div>
  }
}
