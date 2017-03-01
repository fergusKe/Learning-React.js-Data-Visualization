import React from 'react';
import ReactDom from 'react-dom';
import Chart from './components/chart';
import data2 from '../data/data.csv';

console.log(data2)

let obj = data2.shift(),
		formatedData = {labels: [obj.name], datasets: []},
		map = new Map();

delete obj.name;
for(let item in obj){
	let ds = {label: item,data: [obj.item]};
	formatedData.datasets.push(ds);
	map[item] = ds;
}

data2.forEach((obj, i, a)=>{
	formatedData.labels.push(obj.name);
	delete obj.name;
	for(let item in obj)
		map[item].data.push(obj[item]);
});

const data = {
	type: "bar",
	data: formatedData,
	options: {

	}
};

ReactDom.render(<Chart {...data} />, document.getElementById('react'));
