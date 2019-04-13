import './App.scss';

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';

import Main from './component/main.container';
import NotFound from './component/not-found/not-found';
import { reducer } from './reducers/reducer';

class AppRouter extends Component {
	state = {
		property: [],
	};

	render() {
		return (
			<Provider
				store={createStore(
					reducer,
					window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
				)}
			>
				<Router>
					<Switch>
						<Route path="/" exact component={Main} />
						<Route component={NotFound} />
					</Switch>
				</Router>
			</Provider>
		);
	}
}

export default AppRouter;
