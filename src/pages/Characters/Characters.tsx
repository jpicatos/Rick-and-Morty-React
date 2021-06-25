import React, { useEffect, useState } from "react";
import HeaderMenu from "../../components/utils/HeaderMenu";
import PaginatedGrid from "../../components/utils/PaginatedGrid";
import CharacterThumbnail from "../../components/thumbnails/CharacterThumbnail";
import { useLocation } from "react-router";
import { AllCharacters, Character } from "../../models/character";
import { PaginationInfo } from "../../models/commons";
import { characters as charactersService } from "../../services/rickAndMorty";

const useQuery = () => new URLSearchParams(useLocation().search);

const Characters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [charactersInfo, setPaginationInfo] = useState<PaginationInfo>(
    {} as PaginationInfo
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const query = useQuery();
  const pageNumber: number = parseInt(`${query.get("page")}`) || 1;
  const endpoint = 'characters';

  const fetchCharacters = async () => {
    try {
      const response: AllCharacters = await charactersService.getAll(
        pageNumber
      );
      setLoading(false);
      setCharacters(response.results);
      setPaginationInfo(response.info);
    } catch (err) {
      setError(`${err || "Something has gone wrong :("}`);
    }
  };

  useEffect(() => {
    setLoading(true);
    setError("");
    fetchCharacters();
  }, [pageNumber]); // With pageNumber as param, component is re-fetched every time URL changes, this allow user to navigate with history back in browser.

  return (
    <>
      <HeaderMenu activePage={endpoint} />
      <PaginatedGrid 
        ItemComponent={CharacterThumbnail}
        itemsArray={characters}
        itemsInfo={charactersInfo}
        endpoint={endpoint}
        pageNumber={pageNumber}
        loading={loading}
        error={error}>
      </PaginatedGrid>
    </>
  );
};

export default Characters;
