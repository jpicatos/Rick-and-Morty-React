import React, { useEffect, useState } from "react";
import {
  AllCharacters,
  Character,
  CharactersInfo,
} from "../../models/character";
import { useLocation, Link } from "react-router-dom";
import { characters as charactersService } from "../../services/rickAndMorty";
import CharacterComponent from "../Character";
import PaginationManager from "../PaginationManager";
import style from "./PaginatedCharacterGrid.module.scss";

const useQuery = () => new URLSearchParams(useLocation().search);

const PaginatedCharacterGrid: React.FC<{ setLastPage: Function }> = ({
  setLastPage,
}) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [charactersInfo, setCharactersInfo] = useState<CharactersInfo>(
    {} as CharactersInfo
  );
  const query = useQuery();
  let pageNumber: number = parseInt(`${query.get("page")}`) || 1;

  useEffect(() => {
    const fetchCharacters = async () => {
      const response: AllCharacters = await charactersService.getAll(
        pageNumber
      );
      setCharacters(response.results);
      setCharactersInfo(response.info);
      setLastPage(pageNumber);
    };
    fetchCharacters();
  }, [pageNumber]); // With pageNumber as param, component is re-fetched every time URL changes, this allow user to navigate with history back in browser.

  return (
    <div className={style.paginator} data-testid="paginated-grid">
      <PaginationManager
        endpoint="/characters"
        pageNumber={pageNumber}
        prev={charactersInfo.prev}
        next={charactersInfo.next}
        lastPage={charactersInfo.pages}
      />
      <div className={style.characters}>
        {characters.map((character) => (
          <CharacterComponent
            character={character}
            key={character.id}
            data-testid={`character-${character.id}`}
          />
        ))}
      </div>
      <PaginationManager
        endpoint="/characters"
        pageNumber={pageNumber}
        prev={charactersInfo.prev}
        next={charactersInfo.next}
        lastPage={charactersInfo.pages}
      />
    </div>
  );
};

export default PaginatedCharacterGrid;
