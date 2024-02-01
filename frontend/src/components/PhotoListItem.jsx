import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {
  // Destructure props to get the 'photo' property
  const { photo } = props;

  // Check if 'photo' is defined
  if (!photo) {
    return null; // or handle the case when 'photo' is undefined
  }

  // Destructure 'photo' to get individual properties
  const { imageSource, username, location, profile } = photo;

  // Destructure 'location' to get individual properties
  const { city, country } = location || {};

  return (
    <div className="photo-list__item">
      <PhotoFavButton 
        photo={photo}
        onFavButtonClick={props.onFavButtonClick}
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
