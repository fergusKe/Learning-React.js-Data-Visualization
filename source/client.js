import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app';

import data from "./data.json";

ReactDom.render(<App {...data} />, document.getElementById('react'));
