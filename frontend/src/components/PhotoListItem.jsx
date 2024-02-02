import React, { useEffect, useState } from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {
  const { photo, toggleFavourite, favourites } = props;

  if (!photo) {
    return null;
  }

  const { id, urls, user, location } = photo;
  const { full: imageSource } = urls;
  const { username, profile } = user;

  return (
    <div className="photo-list__item">
      <PhotoFavButton
        photoId={id}
        toggleFavourite={toggleFavourite}
        favourites={favourites}
      />
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
