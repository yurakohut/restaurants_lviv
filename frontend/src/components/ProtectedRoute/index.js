import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...restOfProps }) => {
  const { userInfo } = useSelector(state => state.userLogin);

  return (
    <Route
      {...restOfProps}
      render={props =>
        userInfo ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default ProtectedRoute;
