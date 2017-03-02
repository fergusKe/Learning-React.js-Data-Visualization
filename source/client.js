import React from 'react';
import ReactDom from 'react-dom';
import Chart from './components/chart';
import rawData from '../data/data.csv';
import { a2c } from './utils/a2chart';

const data = {
	type: "bar",
	data: a2c(rawData),
	options: {

	}
};

ReactDom.render(<Chart {...data} />, document.getElementById('react'));
