import React, { useState } from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';
import FavBadge from './FavBadge';

const PhotoListItem = (props) => {
  const { photo } = props;

  if (!photo) {
    return null;
  }

  const { urls, user, location } = photo;
  const { full: imageSource } = urls;
  const { username, profile } = user;
  const { city, country } = location;

  // State to track if the photo is a favorite and show alert
  const [isFavPhotoExist, setFavPhotoExist] = useState(false);

  const handleFavButtonClick = () => {
    // Toggle the favorite state
    setFavPhotoExist((prev) => !prev);
  };

  return (
    <div className="photo-list__item">
      <PhotoFavButton 
        photo={photo}
        onFavButtonClick={handleFavButtonClick}
      />
      {isFavPhotoExist && <FavBadge isFavPhotoExist={isFavPhotoExist} />}
      <img src={imageSource} alt={`Photo by ${username}`} className="photo-list__image"/>
      <img src={profile} alt={`${username}'s profile`} className="photo-list__user-profile" />
      <div className="photo-list__user-details">
        <p className="photo-list__user-info">{username}</p>
        <div className="photo-list__user-location">
          <p>{location.city}, {location.country}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
