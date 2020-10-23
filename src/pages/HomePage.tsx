import { Button, ButtonGroup } from "@material-ui/core";
import React from "react";
import PageTemplate from "./PageTemplate";

const HomePage: React.FC = () => {
  return (
    <>
      <PageTemplate pageTitle="Home" >
        <div>
          <h1>What would you like to do today?</h1>
          <p>
            Welcome to Airboxr! Let's start with the task you want to accomplish
            today.
          </p>
        </div>

        <ButtonGroup fullWidth color="secondary">
          <Button href="/select-source" >Import Data</Button>
          <Button href="/select-source" >Lookup Data</Button>
        </ButtonGroup>
      </PageTemplate>
    </>
  );
};

export default HomePage;
