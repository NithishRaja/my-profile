import React from "react";
import {Route, Switch} from "react-router-dom";
import Navbar from "./../components/navbar";

const _routesJSX = <Switch>
                    <Route path="*" component={Navbar} />
                  </Switch>;

export default _routesJSX;
