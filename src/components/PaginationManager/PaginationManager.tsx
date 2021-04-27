import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import style from "./PaginationManager.module.scss";

const PaginationManager: React.FC<{
  endpoint: string;
  pageNumber: number;
  prev: string;
  next: string;
  lastPage: number;
}> = ({ endpoint, pageNumber, prev, next, lastPage }) => {
  return (
    <div className={style.pagination}>
      <Link
        to={`${endpoint}`}
        className={prev ? "" : "disabled"}
        data-testid="first-page"
      >
        First
      </Link>
      <Link
        to={`${endpoint}?page=${pageNumber - 1}`}
        className={prev ? "" : "disabled"}
        data-testid="prev-page"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </Link>
      <span>Page {pageNumber}</span>
      <Link
        to={`${endpoint}?page=${pageNumber + 1}`}
        className={next ? "" : "disabled"}
        data-testid="next-page"
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </Link>
      <Link
        to={`${endpoint}?page=${lastPage}`}
        className={next ? "" : "disabled"}
        data-testid="last-page"
      >
        Last
      </Link>
    </div>
  );
};

export default PaginationManager;
