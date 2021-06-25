import React, { SyntheticEvent, useState } from "react";
import style from "./CustomImage.module.scss";

const CustomImage: React.FC<{
  img: string;
  altText: string;
  className?: string;
}> = ({ img, altText, className = "" }) => {
  const [loadErrorClass, setLoadErrorClass] = useState<string>("");
  const errorHandler = (event: SyntheticEvent<HTMLDivElement>) => {
    setLoadErrorClass(style.loadError);
  };
  return (
    <div className={`${style.wrapper} ${className} ${loadErrorClass}`}>
      <img src={img} alt={altText} onError={errorHandler} />
    </div>
  );
};

export default CustomImage;
