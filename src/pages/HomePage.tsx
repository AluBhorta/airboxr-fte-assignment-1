import { Button, ButtonGroup } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import PageTemplate from "./PageTemplate";

const HomePage: React.FC = () => {
  return (
    <>
      <PageTemplate pageTitle="Home">
        <div>
          <h1>What would you like to do today?</h1>
          <p>
            Welcome to Airboxr! Let's start with the task you want to accomplish
            today.
          </p>
        </div>

        <Link className="styleless-link" to="/select-source">
          <Button fullWidth variant="outlined" color="primary">
            Import Data
          </Button>
        </Link>

        <br />

        <Link className="styleless-link" to="/select-source">
          <Button fullWidth variant="outlined" color="secondary">
            Lookup Data
          </Button>
        </Link>
      </PageTemplate>
    </>
  );
};

export default HomePage;
