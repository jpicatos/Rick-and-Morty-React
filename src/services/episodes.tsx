import { AllEpisodes, Episode } from "../models/episode";
import { Service } from "../models/commons";

const episodesEndpoint: string = "https://rickandmortyapi.com/api/episode";
const lastEpisodesKey: string = "lastEpisodes";

const getLocalEpisodes = () =>
  JSON.parse(localStorage.getItem(lastEpisodesKey) || "{}");

const setLocalEpisodes = (response: AllEpisodes, page: number) =>
  localStorage.setItem(
    lastEpisodesKey,
    JSON.stringify({ response, ...{ pageNumber: page } })
  );

const getAllEpisodes = (page: number): Promise<AllEpisodes> => {
  const { response, pageNumber } = getLocalEpisodes();
  if (response && pageNumber === page) {
    return new Promise<AllEpisodes>((resolve, reject) => resolve(response));
  } else {
    return fetch(`${episodesEndpoint}?page=${page}`)
      .then((res) => res.json())
      .then((res) => {
        setLocalEpisodes(res, page);
        return res;
      });
  }
};

const getEpisodes = (ids: Array<number>): Promise<Episode> =>
  fetch(`${episodesEndpoint}/${ids}`).then((res) => res.json());


export const episodes: Service = {
  endpoint: episodesEndpoint,
  getAll: getAllEpisodes,
  getSome: getEpisodes,
  getLocal: getLocalEpisodes,
  setLocal: setLocalEpisodes,
};
