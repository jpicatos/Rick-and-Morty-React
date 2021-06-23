import { PaginationInfo } from "./commons";

export type Location = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: Array<string>;
  url: string;
  created: string;
};

export type AllLocations = {
  info: PaginationInfo;
  results: Array<Location>;
};
