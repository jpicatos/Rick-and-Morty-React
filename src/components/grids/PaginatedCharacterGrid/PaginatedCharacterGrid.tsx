import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  AllCharacters,
  Character,
  PaginationInfo
} from "../../../models/character";
import { characters as charactersService } from "../../../services/rickAndMorty";
import CharacterComponent from "../../thumbnails/Character";
import PaginationManager from "../../PaginationManager";
import style from "./PaginatedCharacterGrid.module.scss";

const useQuery = () => new URLSearchParams(useLocation().search);

const PaginatedCharacterGrid = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [charactersInfo, setPaginationInfo] = useState<PaginationInfo>(
    {} as PaginationInfo
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const query = useQuery();
  let pageNumber: number = parseInt(`${query.get("page")}`) || 1;

  useEffect(() => {
    setLoading(true);
    setError("");
    const fetchCharacters = async () => {
      try {
        const response: AllCharacters = await charactersService.getAll(
          pageNumber
        );
        setLoading(false);
        setCharacters(response.results);
        setPaginationInfo(response.info);
      } catch (err) {
        if (err) {
          setError(`${err}`);
        } else {
          setError("Something has gone wrong :(");
        }
      }
    };
    fetchCharacters();
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
            endpoint="/characters"
            pageNumber={pageNumber}
            prev={charactersInfo.prev}
            next={charactersInfo.next}
            lastPage={charactersInfo.pages}
          />
          <div className={style.characters}>
            {loading ? (
              <div className={style.message}>Loading...</div>
            ) : (
              characters.map((character) => (
                <CharacterComponent
                  character={character}
                  key={character.id}
                  data-testid={`character-${character.id}`}
                />
              ))
            )}
          </div>
          <PaginationManager
            endpoint="/characters"
            pageNumber={pageNumber}
            prev={charactersInfo.prev}
            next={charactersInfo.next}
            lastPage={charactersInfo.pages}
          />
        </div>
      )}
    </React.Fragment>
  );
};

export default PaginatedCharacterGrid;
