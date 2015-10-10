'use strict'

import React from 'react';
import ReactDOM from 'react-dom';

import Sidebar from './components/sidebar';

require('font-awesome-webpack');

class App extends React.Component {
	render() {
		return (
			<div> This is just a starter kit
				<Sidebar />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('content'));
