import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import Header from "./components/Header";

import "./styles/styles.css";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Header />
        <AppRoutes />
      </Router>
    </>
  );
};

export default App;
