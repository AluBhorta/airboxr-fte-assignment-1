import React, { createContext, useState } from "react";

import { DataStore } from "./models";
import { ApiClient } from "./api/ApiClient";

export const AppContext = createContext<{
  dataStores: DataStore[];
  updateDataStores: () => Promise<void>;
}>({
  dataStores: [],
  updateDataStores: () => Promise.reject()
});

const AppState: React.FC = ({ children }) => {
  const [dataStores, setDataStores] = useState<DataStore[]>([]);
  const apiClient = new ApiClient();

  const updateDataStores = async () => {
    const stores = await apiClient.getDataStores();
    setDataStores(stores);
  };

  return (
    <>
      <AppContext.Provider value={{ dataStores, updateDataStores }}>
        {children}
      </AppContext.Provider>
    </>
  );
};

export default AppState;
