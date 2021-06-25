import { AllLocations, Location } from "../models/location";
import { Service } from "../models/commons";

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


export const locations: Service = {
  endpoint: locationsEndpoint,
  getAll: getAllLocations,
  getSome: getLocations,
  getLocal: getLocalLocations,
  setLocal: setLocalLocations,
};
