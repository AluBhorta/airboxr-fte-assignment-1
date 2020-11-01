import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import Header from "./components/Header";
import AppState from "./AppState";

import "./styles/styles.css";

const App: React.FC = () => {
  return (
    <>
      <AppState>
        <Router>
          <Header />
          <AppRoutes />
        </Router>
      </AppState>
    </>
  );
};

export default App;
