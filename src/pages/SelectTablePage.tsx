import React from "react";
import { useContext } from "react";
import { Redirect, useParams } from "react-router-dom";

import { AppContext } from "../AppState";
import PageTemplate from "./PageTemplate";
import { DataStore, DataSourceTable } from "../models";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio
} from "@material-ui/core";

const SelectTablePage: React.FC = () => {
  const { dataStores } = useContext(AppContext);
  const { source, table } = useParams<{
    source?: string;
    table?: string;
  }>();

  const [selectedTitle, setSelectedTitle] = React.useState("");

  // if (table) {
  // } else {
  // }

  const store: DataStore | undefined = dataStores.find(
    (_store) => _store.name === source
  );

  if (!source || dataStores.length < 1 || !store) {
    return <Redirect to="/select-source" />;
  }

  const uniqueTitles = store.tables
    .map((tbl) => tbl.title.split("||")[0])
    .filter((t, i, titles) => titles.indexOf(t) === i);

  const handleChange = (event) => {
    setSelectedTitle(event.target.value);
  };

  const handleOnNext = (e) => {
    console.log(`TODO - Go to SelectColumnsPage - of ${selectedTitle}`);
  };

  return (
    <>
      <PageTemplate
        pageTitle="Select Table"
        showBackBtn
        showProminentBtn
        disableProminentBtn={selectedTitle === ""}
        onProminentBtnClick={handleOnNext}
      >
        <div>
          <p>
            {source} {table} has the following tables ready for import. Please
            select the table you would like to import.
          </p>
        </div>

        <div>
          <input type="text" name="filter" placeholder="Filter..." />
        </div>
        <br />

        <FormControl component="fieldset">
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={selectedTitle}
            onChange={handleChange}
          >
            {uniqueTitles.map((title, i) => (
              <FormControlLabel
                key={i}
                value={title}
                control={<Radio />}
                label={title}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </PageTemplate>
    </>
  );
};

export default SelectTablePage;
