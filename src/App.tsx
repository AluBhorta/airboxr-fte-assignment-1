import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";

const App: React.FC = ({ children }) => {
  return (
    <>
      <Router>
        {children}
        <AppRoutes />
      </Router>
    </>
  );
};

export default App;
