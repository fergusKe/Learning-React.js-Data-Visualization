import React from 'react';

export default class Map extends React.Component {
  onClick(e) {
    let img = e.target,
        point = { x: e.offsetX, y: e.offsetY },
        latSize = img.height / 180,
        lonSize = img.width / 360,
        lat, lon,
        r = 1;

    if (!point.x) {
      point = { x: e.pageX - e.target.offsetLeft,
                y: e.pageY - e.target.offsetTop };
    }

    lat = (point.y - (img.height / 2)) / -latSize;
    lon = (point.x - (img.width / 2)) / lonSize;

    console.log(lat, lon);

    var ws = `http://api.geonames.org/citiesJSON?formatted=true&north=${lat+r}&south=${lat-r}&east=${lon+r}&west=${lon-r}&lang=en&username=geek&style=full`;

    console.log(ws);

    var xhr = new XMLHttpRequest();
        xhr.open('GET', ws);
        xhr.onload = () => {
          if (xhr.status === 200) {
            console.log(xhr.responseText);
          } else {
            // ERROR
          }
        };
        xhr.send();

  }

  render() {
    return (
      <img onClick={this.onClick} src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Earthmap1000x500compac.jpg" />
    )
  }
}
