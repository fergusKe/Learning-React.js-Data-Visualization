import React from 'react';
import ReactDom from 'react-dom';
import Chart from './components/chart';
import rawData from '../data/data.csv';
import { a2c } from './utils/a2chart';

const data = {
	type: "bar", // bar, horizontalBar, line
	data: a2c(rawData),
	options: {
		responsive: false
	}
};

ReactDom.render(<Chart width="800" height="400" {...data} />, document.getElementById('react'));
