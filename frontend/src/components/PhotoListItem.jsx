import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {
  const { photo, toggleFavourite, favourites, handleImageClick } = props;

  if (!photo) {
    return <div>Loading...</div>; // or render a placeholder
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
      <img
        src={imageSource}
        alt={`Photo by ${username}`}
        className="photo-list__image"
        onClick={() => handleImageClick(photo)}
      />
      <div className="photo-list__user-details">
      <img
        src={profile}
        className="photo-list__user-profile"
      />
      <div className="photo-list__user-info">
        <span>{username}</span>
        <br />
        <div className="photo-list__user-location">
          <span>{location.city}, {location.country}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
