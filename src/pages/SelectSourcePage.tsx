import React from "react";
import { Link } from "react-router-dom";
import PageTemplate from "./PageTemplate";

const SelectSourcePage: React.FC = () => {
  return (
    <>
      <PageTemplate pageTitle="Select Source" showBackBtn>
        <div>
          <p>
            Below is a list of sources you have connected. Please choose the
            data source that you'd like to import data from.
          </p>
        </div>

        <ul>
          <li>
            <Link to="/select-table">Select Table</Link>
          </li>
          <li>2</li>
        </ul>
      </PageTemplate>
    </>
  );
};

export default SelectSourcePage;
