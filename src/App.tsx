import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Router>
        <AppRoutes />
      </Router>
    </>
  );
};

export default App;
