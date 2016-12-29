import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"

import Ratings from './components/Ratings'
import store from "./store/store"

import { Router, Route, BrowserHistory } from 'react-router'

const rootElement = document.getElementById('app');
ReactDOM.render(<Provider store={store}>
			    <Ratings />
		    </Provider>, rootElement);