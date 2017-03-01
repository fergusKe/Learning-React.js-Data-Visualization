import React from 'react';
import ChartJs from 'Chart.js';

export default class Chart extends React.Component {
  componentDidMount() {
    const ctx = this.refs['chart'].getContext('2d');
    let {type, data, options} = this.props;

    this.chart = new ChartJs(ctx, {
      type: type,
      data, data,
      options: options
    })
  }

  render() {
    return <div style={{width: 900, height: 300}}>
      <canvas ref="chart"></canvas>
    </div>
  }
}
