import React from "react";
import {Route, Switch} from "react-router-dom";
import Links from "./../components/links";

const _routesJSX = <Switch>
                    <Route path="*" component={Links} />
                  </Switch>;

export default _routesJSX;
