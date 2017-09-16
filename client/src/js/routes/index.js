import React from 'react';
import {Route, Switch} from "react-router-dom";
import headRoutes from "./head";
import linkRoutes from "./links";
import pagecover from "./pagecover";
import NotFound from "./../components/notFound";
import Home from "./../containers/homeContainer";
import Gallery from "./../components/gallery";
import Blog from "./../components/blog";

const _routesJSX = <div>
                    {headRoutes}
                    {pagecover}
                    {linkRoutes}
                    <Switch>
                      <Route path="/"  exact component={Home} />
                      <Route path="/gallery"  exact component={Gallery} />
                      <Route path="/blog" exact component={Blog} />
                      <Route path="*" component={NotFound} />
                    </Switch>
                  </div>;

export default _routesJSX;
