import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import routes from "./js/routes";
import headRoutes from "./js/routes/head";
import store from "./js/store";
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<Router>{headRoutes}</Router>, document.getElementById("head"));
ReactDOM.render(<Provider store={store}><Router>{routes}</Router></Provider>, document.getElementById('root'));
registerServiceWorker();
