import React from "react";
import PageTemplate from "./PageTemplate";

const SelectTablePage: React.FC = () => {
  return (
    <>
      <PageTemplate pageTitle="Select Table" showBackBtn>
        <div>
          <p>
            __SRC__ has the following tables ready for import. Please select the
            table you would like to import.
          </p>
        </div>

        <div>
          <input type="text" name="filter" placeholder="Filter..." />
          <ul>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
            <li>item 4</li>
          </ul>
        </div>
      </PageTemplate>
    </>
  );
};

export default SelectTablePage;
