import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import EpisodeThumbnail from "../../components/thumbnails/EpisodeThumbnail";
import HeaderMenu from "../../components/utils/HeaderMenu";
import PaginatedGrid from "../../components/utils/PaginatedGrid";
import { PaginationInfo } from "../../models/commons";
import { AllEpisodes, Episode } from "../../models/episode";
import { episodes as episodesService } from "../../services/episodes";


const useQuery = () => new URLSearchParams(useLocation().search);

const Episodes = () => {
  const [episodes, setEpisodes] = useState<Episode[]>([])
  const [episodesInfo, setPaginationInfo] = useState<PaginationInfo>(
    {} as PaginationInfo
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const query = useQuery();
  const pageNumber: number = parseInt(`${query.get("page")}`) || 1;
  const endpoint = 'episodes';

  const fetchEpisodes = async () => {
    try {
      const {results, info}: AllEpisodes = await episodesService.getAll(
        pageNumber
      );
      setLoading(false);
      setEpisodes(results);
      setPaginationInfo(info);
    } catch (err) {
      setError(`${err || "Something has gone wrong :("}`);
    }
  };

  useEffect(() => {
    setLoading(true);
    setError("");

    fetchEpisodes();
  }, [pageNumber]); // With pageNumber as param, component is re-fetched every time URL changes, this allow user to navigate with history back in browser.

  return (
    <>
      <HeaderMenu activePage={endpoint} />
      <PaginatedGrid
        ItemComponent={EpisodeThumbnail}
        itemsArray={episodes}
        itemsInfo={episodesInfo}
        endpoint={endpoint}
        pageNumber={pageNumber}
        loading={loading}
        error={error}>
      </PaginatedGrid>
    </>
  );
};

export default Episodes;
