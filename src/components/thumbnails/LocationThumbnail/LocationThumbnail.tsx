import React from 'react'
import { Location } from '../../../models/location';

const LocationThumbnail:React.FC<{ item: Location }> = ({
    item
  }) => {
    return (
        <>
           <span>Id: {item.id}</span>
           <span>Name: {item.name}</span>
           <span>Dimension: {item.dimension}</span>
           <span>Residents: {item.residents.length}</span>
           <span>Type: {item.type}</span>
           <span>URL: {item.url}</span>
        </>
    )
}

export default LocationThumbnail;
