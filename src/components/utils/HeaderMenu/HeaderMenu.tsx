import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { characters } from "../../../services/characters";
import { episodes } from "../../../services/episodes";
import { locations } from "../../../services/locations";
import styles from "./HeaderMenu.module.scss";

const disabledClass = (activePage: string, page: string) => {
  return activePage === page ? "disabled" : "";
}

const LinkToGrid: React.FC<{ activePage: string, lastPage: number, gridType: string, children: React.ReactNode}> = ({ activePage, lastPage, gridType, children }) => {
  const createUrl = () => {
    if (lastPage && lastPage > 1) {
      return `/${gridType}?page=${lastPage}`;
    }
    return `/${gridType}`;
  }

  return (
    <Link to={createUrl()} className={disabledClass(activePage, gridType)}>
      {children}
    </Link>
  )
}


const HeaderMenu: React.FC<{ activePage?: string }> = ({ activePage = '' }) => {
  const [lastCharactersPage, setLastCharactersPage] = useState<number>(1);
  const [lastLocationsPage, setLastLocationsPage] = useState<number>(1);
  const [lastEpisodesPage, setLastEpisodesPage] = useState<number>(1);

  useEffect(() => {
    setLastCharactersPage(characters.getLocal()?.pageNumber || 1);
    setLastLocationsPage(locations.getLocal()?.pageNumber || 1);
    setLastEpisodesPage(episodes.getLocal()?.pageNumber || 1);
  }, [activePage])

  return (
    <header className={styles.menu} data-testid="menu">
      <Link to="/" className={disabledClass(activePage, "home")}>Home</Link>
      <LinkToGrid activePage={activePage} lastPage={lastCharactersPage} gridType='characters'>Characters</LinkToGrid>
      <LinkToGrid activePage={activePage} lastPage={lastLocationsPage} gridType='locations'>Locations</LinkToGrid>
      <LinkToGrid activePage={activePage} lastPage={lastEpisodesPage} gridType='episodes'>Episodes</LinkToGrid>
    </header>
  );
};

export default HeaderMenu;
