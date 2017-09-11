import React from 'react';
import {Route, Switch} from "react-router-dom";
import NotFound from "./../components/notFound";
import Home from "./../components/home";

const _routesJSX = <Switch>
                    <Route path="/"  exact component={Home} />
                    <Route path="*" component={NotFound} />
                  </Switch>;

export default _routesJSX;
