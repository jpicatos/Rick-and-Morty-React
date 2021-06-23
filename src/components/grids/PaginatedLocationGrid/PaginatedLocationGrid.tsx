import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { locations as locationsService } from "../../../services/rickAndMorty";
import CharacterComponent from "../../thumbnails/Character";
import PaginationManager from "../../PaginationManager";
import style from "./PaginatedLocationGrid.module.scss";
import { PaginationInfo } from "../../../models/commons";
import { AllLocations, Location } from "../../../models/location";

const useQuery = () => new URLSearchParams(useLocation().search);

const PaginatedLocationGrid = () => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [locationsInfo, setPaginationInfo] = useState<PaginationInfo>(
    {} as PaginationInfo
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const query = useQuery();
  let pageNumber: number = parseInt(`${query.get("page")}`) || 1;
  const fetchLocations = async () => {
    try {
      const response: AllLocations = await locationsService.getAll(
        pageNumber
      );
      setLoading(false);
      setLocations(response.results);
      setPaginationInfo(response.info);
      console.log(response);
    } catch (err) {
      if (err) {
        setError(`${err}`);
      } else {
        setError("Something has gone wrong :(");
      }
    }
  };

  useEffect(() => {
    setLoading(true);
    setError("");

    fetchLocations();
  }, [pageNumber]); // With pageNumber as param, component is re-fetched every time URL changes, this allow user to navigate with history back in browser.

  return (
    <React.Fragment>
      {error ? (
        <div className={`${style.message} ${style.error}`}>
          <FontAwesomeIcon icon={faExclamationTriangle} />
          <span>{error}</span>
        </div>
      ) : (
        <div className={style.paginator} data-testid="paginated-grid">
          <PaginationManager
            endpoint="/locations"
            pageNumber={pageNumber}
            prev={locationsInfo.prev}
            next={locationsInfo.next}
            lastPage={locationsInfo.pages}
          />
          <div className={style.locations}>
            {loading ? (
              <div className={style.message}>Loading...</div>
            ) : (
              locations.map((location) => (
                // <CharacterComponent
                //   location={location}
                //   key={location.id}
                //   data-testid={`location-${location.id}`}
                // />
                <div>{location.name}</div>
              ))
            )}
          </div>
          <PaginationManager
            endpoint="/locations"
            pageNumber={pageNumber}
            prev={locationsInfo.prev}
            next={locationsInfo.next}
            lastPage={locationsInfo.pages}
          />
        </div>
      )}
    </React.Fragment>
  );
};

export default PaginatedLocationGrid;
