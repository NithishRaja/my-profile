import React from 'react';
import {Route, Switch} from "react-router-dom";
import headRoutes from "./head";
import NotFound from "./../components/notFound";
import Home from "./../components/home";

const _routesJSX = <div>
                    {headRoutes}
                    <div className="container">
                    <Switch>
                      <Route path="/"  exact component={Home} />
                      <Route path="*" component={NotFound} />
                    </Switch>
                    </div>
                  </div>;

export default _routesJSX;
