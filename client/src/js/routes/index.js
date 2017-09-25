import React from 'react';
import navbarRoutes from "./navbar";
import linkRoutes from "./links";
import pagecoverRoutes from "./pagecover";
import mainRoutes from "./main";

const _routesJSX = <div>
                    {navbarRoutes}
                    {pagecoverRoutes}
                    {linkRoutes}
                    {mainRoutes}
                  </div>;

export default _routesJSX;
