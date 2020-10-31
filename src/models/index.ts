export type AuthTokenResponse = {
  accessToken: string;
};

export type DataStore = {
  id: number;
  name: string;
  tables: DataSourceTable[];
};

export type DataSourceTable = {
  id: number;
  title: string;
  isIndented: boolean;
};
