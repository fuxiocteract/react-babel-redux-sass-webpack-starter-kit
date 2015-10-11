'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { createStore } from 'redux';
import reducers from './reducers/reducers';

import App from './components/app';

require('font-awesome-webpack');

let store = createStore(reducers);

let content = document.getElementById('content');

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	content
);
