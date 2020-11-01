import React from "react";
import { useContext } from "react";
import { Redirect, useParams, useHistory } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio
} from "@material-ui/core";

import { AppContext } from "../AppState";
import PageTemplate from "./PageTemplate";
import { DataStore } from "../models";

const SelectTablePage: React.FC = () => {
  const { dataStores } = useContext(AppContext);
  const { source, table } = useParams<{
    source?: string;
    table?: string;
  }>();
  const history = useHistory();
  const [selectedTitle, setSelectedTitle] = React.useState("");

  const store: DataStore | undefined = dataStores.find(
    (_store) => _store.name === source
  );

  if (!source || dataStores.length < 1 || !store) {
    return <Redirect to="/select-source" />;
  }

  const primaryTables = store.tables.map((tbl) => ({
    ...tbl,
    title: tbl.title.split("||")[0]
  }));

  const indentedPrimaryTables = primaryTables.filter((tbl) => tbl.isIndented);

  const isIndented = indentedPrimaryTables.find(
    (tbl) => tbl.title === selectedTitle
  );

  let uniqueTitles = primaryTables
    .map((tbl) => tbl.title)
    .filter((t, i, titles) => titles.indexOf(t) === i);

  if (table) {
    uniqueTitles = store.tables
      .map((tbl) => ({ ...tbl, title: tbl.title.split("||") }))
      .filter((tbl) => tbl.title[0] === table)
      .map((tbl) => tbl.title[1]);
  }

  const handleChange = (event) => {
    setSelectedTitle(event.target.value);
  };

  const handleOnNext = (e) => {
    if (!table && selectedTitle && isIndented) {
      setSelectedTitle("");
      history.push(`/select-table/${source}/${selectedTitle}`);
    } else {
      console.log(`TODO - Go to SelectColumnsPage - of ${selectedTitle}`);
    }
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
            {source} {table} - has the following tables ready for import. Please
            select the table you would like to import.
          </p>
        </div>

        <div>
          <input type="text" name="filter" placeholder="Filter..." />
        </div>
        <br />

        <FormControl component="fieldset">
          <FormLabel component="legend">Tables</FormLabel>
          <RadioGroup
            aria-label="table"
            name="table1"
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
