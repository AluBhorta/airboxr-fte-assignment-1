import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";

import PageTemplate from "./PageTemplate";
import { AppContext } from "../AppState";
import { DataStore } from "../models";

const SelectSourcePage: React.FC = () => {
  const { dataStores, updateDataStores } = useContext(AppContext);

  useEffect(() => {
    if (dataStores.length < 1) {
      updateDataStores();
    }
  }, []);

  return (
    <>
      <PageTemplate pageTitle="Select Source" showBackBtn>
        <div>
          <p>
            Below is a list of sources you have connected. Please choose the
            data source that you'd like to import data from.
          </p>
        </div>
        {dataStores.length < 1 ? (
          <div className="text-center">
            <CircularProgress />
          </div>
        ) : (
          <ul>
            {dataStores.map((store: DataStore) => (
              <li key={store.id}>
                <Link to={`/select-table/${store.name}`}>{store.name}</Link>
              </li>
            ))}
          </ul>
        )}
      </PageTemplate>
    </>
  );
};

export default SelectSourcePage;
