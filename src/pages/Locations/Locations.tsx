import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import CharacterThumbnail from "../../components/thumbnails/CharacterThumbnail";
import LocationThumbnail from "../../components/thumbnails/LocationThumbnail";
import HeaderMenu from "../../components/utils/HeaderMenu";
import PaginatedGrid from "../../components/utils/PaginatedGrid";
import { PaginationInfo } from "../../models/commons";
import { AllLocations, Location } from "../../models/location";
import { locations as locationsService } from "../../services/rickAndMorty";


const useQuery = () => new URLSearchParams(useLocation().search);

const Locations = () => {
  const [locations, setLocations] = useState<Location[]>([])
  const [locationsInfo, setPaginationInfo] = useState<PaginationInfo>(
    {} as PaginationInfo
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const query = useQuery();
  const pageNumber: number = parseInt(`${query.get("page")}`) || 1;
  const endpoint = 'locations';

  const fetchLocations = async () => {
    try {
      const {results, info}: AllLocations = await locationsService.getAll(
        pageNumber
      );
      setLoading(false);
      setLocations(results);
      setPaginationInfo(info);
    } catch (err) {
      setError(`${err || "Something has gone wrong :("}`);
    }
  };

  useEffect(() => {
    setLoading(true);
    setError("");

    fetchLocations();
  }, [pageNumber]); // With pageNumber as param, component is re-fetched every time URL changes, this allow user to navigate with history back in browser.

  return (
    <>
      <HeaderMenu activePage={endpoint} />
      <PaginatedGrid
        ItemComponent={LocationThumbnail}
        itemsArray={locations}
        itemsInfo={locationsInfo}
        endpoint={endpoint}
        pageNumber={pageNumber}
        loading={loading}
        error={error}>
      </PaginatedGrid>
    </>
  );
};

export default Locations;
