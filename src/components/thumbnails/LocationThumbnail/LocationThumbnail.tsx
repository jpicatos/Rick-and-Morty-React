import React from "react";
import { Location } from "../../../models/location";
import ThumbnailWrapper from "../ThumbnailWrapper";

const LocationThumbnail: React.FC<{ item: Location }> = ({ item }) => {
  return (
    <ThumbnailWrapper base="locations" detailId={`${item.id}`}>
      <span>Id: {item.id}</span>
      <span>Name: {item.name}</span>
      <span>Dimension: {item.dimension}</span>
      <span>Residents: {item.residents.length}</span>
      <span>Type: {item.type}</span>
      <span>URL: {item.url}</span>
    </ThumbnailWrapper>
  );
};

export default LocationThumbnail;
