import { AllCharacters, Character } from "../models/character";

type Service = {
  endpoint: string;
  getAll: Function;
  getSome: Function;
  getLocal: Function;
  setLocal: Function;
};

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
            return res
        });
  }
};

const getCharacters = (ids: Array<number>): Promise<Character> =>
  fetch(`${characterEndpoint}/${ids}`).then((res) => res.json());

export const characters: Service = {
  endpoint: characterEndpoint,
  getAll: getAllCharacters,
  getSome: getCharacters,
  getLocal: getLocalCharacters,
  setLocal: setLocalCharacters,
};
