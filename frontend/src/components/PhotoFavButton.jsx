import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ photoId, toggleFavourite, favourites }) {
  const isSelected = favourites.includes(photoId);

  const handleFavButtonClick = () => {
    toggleFavourite(photoId);
  };

  return (
    <div className="photo-list__fav-icon" onClick={handleFavButtonClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isSelected} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
