import React from "react";
import {Route, Switch} from "react-router-dom";
import PageCover from "./../components/home/pagecover";

const _routesJSX = <Switch>
                    <Route path="/" exact component={PageCover} />
                  </Switch>;

export default _routesJSX;
