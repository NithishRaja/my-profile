import React from 'react';
import {Route, Switch} from "react-router-dom";
import NotFound from "./../components/notFound";

const _routesJSX = <Switch>

                    <Route path="*" component={NotFound} />
                  </Switch>;

export default _routesJSX;
