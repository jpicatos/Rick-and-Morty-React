import { PaginationInfo } from "./commons";

export type Episode = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: Array<string>;
  url: string;
  created: string;
};

export type AllEpisodes = {
  info: PaginationInfo;
  results: Array<Episode>;
};
