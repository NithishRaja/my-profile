import React from "react";
import {Route, Switch} from "react-router-dom";
import Links from "./../containers/linksContainer";

const _routesJSX = <Switch>
                    <Route path="*" component={Links} />
                  </Switch>;

export default _routesJSX;
