import React from 'react';
import {Route, Switch} from "react-router-dom";
import navbarRoutes from "./navbar";
import linkRoutes from "./links";
import pagecover from "./pagecover";
import NotFound from "./../components/notFound";
import Home from "./../containers/homeContainer";
import Gallery from "./../containers/galleryContainer";
import Blog from "./../containers/blogContainer";
import Contact from "./../containers/contactContainer";
import About from "./../containers/aboutContainer";
import Article from "./../containers/articleContainer";
import Album from "./../containers/albumContainer";

const _routesJSX = <div>
                    {navbarRoutes}
                    {pagecover}
                    {linkRoutes}
                    <Switch>
                      <Route path="/"  exact component={Home} />
                      <Route path="/gallery/:id" exact component={Album} />
                      <Route path="/gallery"  exact component={Gallery} />
                      <Route path="/blog/:id" exact component={Article} />
                      <Route path="/blog" component={Blog} />
                      <Route path="/contact" exact component={Contact} />
                      <Route path="/about" exact component={About} />
                      <Route path="*" component={NotFound} />
                    </Switch>
                  </div>;

export default _routesJSX;
