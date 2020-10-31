import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SelectSourcePage from "./pages/SelectSourcePage";
import SelectTablePage from "./pages/SelectTablePage";

const AppRoutes: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/select-source" exact>
          <SelectSourcePage />
        </Route>
        <Route path="/select-table" exact>
          <Redirect to="/select-source" />
        </Route>
        <Route path="/select-table/:source" exact>
          <SelectTablePage />
        </Route>
        <Route path="/select-table/:source/:table" exact>
          <SelectTablePage />
        </Route>

        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </>
  );
};

export default AppRoutes;
