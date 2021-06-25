import { Character } from "./character";
import { Episode } from "./episode";
import { Location } from "./location";

export type PaginationInfo = {
  count: number;
  pages: number;
  next: string;
  prev: string;
};

export type Service = {
  endpoint: string;
  getAll: Function;
  getSome: Function;
  getLocal: Function;
  setLocal: Function;
};

export type GridItem = Character | Location | Episode;