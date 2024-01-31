import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <div className="photo-list-item">
      <img src={props.photo.imageSource} alt={`Photo by ${props.photo.username}`} className="photo-list__item"/>
      <img src={props.photo.profile} alt={`${props.photo.username}'s profile`} className="profile-picture" />
      <div className="photo-details">
        <p>{props.photo.username}</p>
        <p>{props.photo.location.city}, {props.photo.location.country}</p>
      </div>
    </div>
  );
};

export default PhotoListItem;
