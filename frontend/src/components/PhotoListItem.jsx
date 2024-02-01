import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {
  return (
    <div className="photo-list__item">
       <PhotoFavButton />
      <img src={props.photo.imageSource} alt={`Photo by ${props.photo.username}`} className="photo-list__image"/>
      <img src={props.photo.profile} alt={`${props.photo.username}'s profile`} className="photo-list__user-profile" />
      <div className="photo-list__user-details">
        <p className="photo-list__user-info" >{props.photo.username}</p>
        <div className="photo-list__user-location" >
        <p>{props.photo.location.city}, {props.photo.location.country}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
