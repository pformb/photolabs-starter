import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [isSelected, setIsSelected] = useState(false);

  const handleFavButtonClick = useCallback(() => {
    setIsSelected((prevSelected) => !prevSelected);
  }, []);

  return (
    <div className="photo-list__fav-icon" onClick={handleFavButtonClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isSelected} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
