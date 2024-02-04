import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ photoId, toggleFavourite, favourites }) {
  
  return (
    <div className="photo-list__fav-icon" onClick={() => toggleFavourite(photoId)}>
      {Array.isArray(favourites) && favourites.includes(photoId)? (
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={true} />
      </div> ) :( <div className="photo-list__fav-icon-svg">
        <FavIcon /> 
      </div> )}
    </div>
  );
}

export default PhotoFavButton;
