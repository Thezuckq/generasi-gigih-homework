import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import CreatePlaylist from "../pages/create-playlist";
import Home from "../pages/home";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLoggedin } = useSelector((state) => state.credential);
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedin ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

const MyRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute path="/home" component={Home} />
        <PrivateRoute path="/create-playlist" component={CreatePlaylist} />
      </Switch>
    </BrowserRouter>
  );
};

export default MyRouter;