import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import store from './store/store';
import App from './components/App';

import 'jquery';
import 'bootstrap';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-dragula/dist/dragula.css';
import './styles/main.scss';

render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root'),
);

registerServiceWorker();
