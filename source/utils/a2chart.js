export function a2c(a) {
  let obj = a.shift(),
  		formatedData = {labels: [obj.name], datasets: []},
  		map = new Map();

  delete obj.name;
  for(let item in obj){
  	let ds = {label: item,data: [obj.item]};
  	formatedData.datasets.push(ds);
  	map[item] = ds;
  }

  a.forEach((obj, i, a)=>{
  	formatedData.labels.push(obj.name);
  	delete obj.name;
  	for(let item in obj)
  		map[item].data.push(obj[item]);
  });

  return formatedData;
}
