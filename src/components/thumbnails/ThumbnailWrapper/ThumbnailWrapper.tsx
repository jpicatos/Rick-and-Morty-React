import React from 'react'
import { useHistory } from 'react-router';
import style from "./ThumbnailWrapper.module.scss";

const ThumbnailWrapper: React.FC<{children: React.ReactNode, base: string, detailId: string}> = ({children, base, detailId}) => {
    let history = useHistory();
    const navigateToDetail = () => {
      history.push(`${base}/${detailId}`);
    }
    return (
        <div className={style.wrapper} onClick={navigateToDetail}>
            {children}
        </div>
    )
}

export default ThumbnailWrapper
