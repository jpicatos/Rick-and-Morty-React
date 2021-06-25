import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import PaginationManager from "../PaginationManager";
import style from "./PaginatedGrid.module.scss";
import { GridItem, PaginationInfo } from "../../../models/commons";


const PaginatedGrid: React.FC<{
  ItemComponent: any, // @TODO find solution to prevent any
  itemsArray: Array<GridItem>,
  itemsInfo: PaginationInfo,
  endpoint: string,
  pageNumber: number,
  loading: boolean,
  error: string

}> = ({ItemComponent, itemsArray, itemsInfo, endpoint, pageNumber,loading,  error}) => {
  return (
    <>
      {error ? (
        <div className={`${style.message} ${style.error}`}>
          <FontAwesomeIcon icon={faExclamationTriangle} />
          <span>{error}</span>
        </div>
      ) : (
        <div className={style.paginator} data-testid="paginated-grid">
          <PaginationManager
            endpoint={`/${endpoint}`}
            pageNumber={pageNumber}
            prev={itemsInfo.prev}
            next={itemsInfo.next}
            lastPage={itemsInfo.pages}
          />
          <div className={style.characters}>
            {loading ? (
              <div className={style.message}>Loading...</div>
            ) : (
              itemsArray.map((item) => (
                <ItemComponent
                  item={item}
                  key={item.id}
                  data-testid={`${endpoint}-${item.id}`}
                />
              ))
            )}
          </div>
          <PaginationManager
            endpoint={`/${endpoint}`}
            pageNumber={pageNumber}
            prev={itemsInfo.prev}
            next={itemsInfo.next}
            lastPage={itemsInfo.pages}
          />
        </div>
      )}
    </>
  );
};

export default PaginatedGrid;
