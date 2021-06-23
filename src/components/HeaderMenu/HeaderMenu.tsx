import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { characters, locations } from "../../services/rickAndMorty";
import styles from "./HeaderMenu.module.scss";

const useQuery = () => new URLSearchParams(useLocation().search);

const HeaderMenu: React.FC<{
  activePage?: string;
}> = ({ activePage }) => {
  const [lastCharactersPage, setLastCharactersPage] = useState<number>(1);
  const [lastLocationsPage, setLastLocationsPage] = useState<number>(1);

  const query = useQuery();

  useEffect(() => {
    setLastCharactersPage(characters.getLocal()?.pageNumber || 1);
    setLastLocationsPage(locations.getLocal()?.pageNumber || 1);
  }, [activePage])

  const disabledClass = (page: string) => {
    return activePage === page ? "disabled" : "";
  }
  return (
    <header className={styles.menu} data-testid="menu">
      <Link to="/" className={disabledClass("home")}>
        Home
      </Link>
      <Link
        to={
          lastCharactersPage && lastCharactersPage > 1
            ? `/characters?page=${lastCharactersPage}`
            : "/characters"
        }
        className={disabledClass("characters")}
      >
        Characters
      </Link>
      <Link
        to={
          lastLocationsPage && lastLocationsPage > 1
            ? `/locations?page=${lastLocationsPage}`
            : "/locations"
        }
        className={disabledClass("locations")}
      >
        Locations
      </Link>
    </header>
  );
};

export default HeaderMenu;
