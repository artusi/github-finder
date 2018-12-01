import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function Router({ routes, children }) {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map(({ path, type, ...routeProps }) => (
          <Route key={path} path={path} type={type} {...routeProps} />
        ))}
        {children}
      </Switch>
    </BrowserRouter>
  );
}

Router.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  children: PropTypes.any
};
Router.defaultProps = {
  children: null
};

export default Router;
