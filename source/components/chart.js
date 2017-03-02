import React from 'react';
import ChartJS from 'Chart.js';

export default class Chart extends React.Component {
  componentDidMount() {
    const ctx = this.refs['chart'].getContext('2d');
		let {type, data, options} = this.props;

		this.chart = new ChartJS(ctx,{
			type: type,
			data: data,
			options: options
		});
  }

  render() {
    let canvasProps = {width: this.props.width, height: this.props.height}

    return <canvas ref="chart" {...canvasProps} ></canvas>;
  }
}
