import React from 'react';
import {Route, Switch} from "react-router-dom";


const _routesJSX = <Switch>

                    <Route path="*" render={() => <h1>not found</h1>} />
                  </Switch>;

export default _routesJSX;
