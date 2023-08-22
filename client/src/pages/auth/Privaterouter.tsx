/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Route, Navigate, RouteProps } from "react-router-dom";
import { useAuth } from "./Protectedroute";

interface PrivateRouteProps extends RouteProps {
  component: React.ComponentType<any>;
  layout: string;
  isIndexRoute: boolean;
  path: string;
  // Add your custom props here
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  layout,
  isIndexRoute,
  ...rest
}) => {
  const { state } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        state.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Navigate to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
