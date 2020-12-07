import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ROUTES from "../src/constants/routes";
import "./App.css";
import Menu from "./views/Menu";
import "./firebase";
import Kitchen from "./views/kitche";
import Welcome from "./views/Welcome";
import Done from "./views/Done";
import Deliver from "./views/Deliver";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Redirect from="/" to={ROUTES.welcome} />
          <Switch>
            <Route exact path={ROUTES.welcome} component={Welcome} />
            <Route exact path={ROUTES.menu} component={Menu} />
            <Route exact path={ROUTES.kitchen} component={Kitchen} />
            <Route exact path={ROUTES.done} component={Done} />
            <Route exact path={ROUTES.deliver} component={Deliver} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
