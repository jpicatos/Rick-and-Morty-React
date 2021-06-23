import { AllCharacters, Character } from "../models/character";
import { AllLocations, Location } from "../models/location";
import { Service } from "../models/commons";


/**
 * -----------------------------------------
 *                CHARACTERS
 * -----------------------------------------
 */

const characterEndpoint: string = "https://rickandmortyapi.com/api/character";
const lastCharactersKey: string = "lastCharacters";

const getLocalCharacters = () =>
  JSON.parse(localStorage.getItem(lastCharactersKey) || "{}");

const setLocalCharacters = (response: AllCharacters, page: number) =>
  localStorage.setItem(
    lastCharactersKey,
    JSON.stringify({ response, ...{ pageNumber: page } })
  );

const getAllCharacters = (page: number): Promise<AllCharacters> => {
  const { response, pageNumber } = getLocalCharacters();
  if (response && pageNumber === page) {
    return new Promise<AllCharacters>((resolve, reject) => resolve(response));
  } else {
    return fetch(`${characterEndpoint}?page=${page}`)
      .then((res) => res.json())
      .then((res) => {
        setLocalCharacters(res, page);
        return res;
      });
  }
};

const getCharacters = (ids: Array<number>): Promise<Character> =>
  fetch(`${characterEndpoint}/${ids}`).then((res) => res.json());


/**
 * -----------------------------------------
 *                LOCATIONS
 * -----------------------------------------
 */

const locationsEndpoint: string = "https://rickandmortyapi.com/api/location";
const lastLocationsKey: string = "lastLocations";

const getLocalLocations = () =>
  JSON.parse(localStorage.getItem(lastLocationsKey) || "{}");

const setLocalLocations = (response: AllLocations, page: number) =>
  localStorage.setItem(
    lastLocationsKey,
    JSON.stringify({ response, ...{ pageNumber: page } })
  );

const getAllLocations = (page: number): Promise<AllLocations> => {
  const { response, pageNumber } = getLocalLocations();
  if (response && pageNumber === page) {
    return new Promise<AllLocations>((resolve, reject) => resolve(response));
  } else {
    return fetch(`${locationsEndpoint}?page=${page}`)
      .then((res) => res.json())
      .then((res) => {
        setLocalLocations(res, page);
        return res;
      });
  }
};

const getLocations = (ids: Array<number>): Promise<Location> =>
  fetch(`${locationsEndpoint}/${ids}`).then((res) => res.json());


/**
 * -----------------------------------------
 *                EXPORTS
 * -----------------------------------------
 */

export const characters: Service = { // Ready to add all other object types (Location, Episode...)
  endpoint: characterEndpoint,
  getAll: getAllCharacters,
  getSome: getCharacters,
  getLocal: getLocalCharacters,
  setLocal: setLocalCharacters,
};

export const locations: Service = {
  endpoint: locationsEndpoint,
  getAll: getAllLocations,
  getSome: getLocations,
  getLocal: getLocalLocations,
  setLocal: setLocalLocations,
};
