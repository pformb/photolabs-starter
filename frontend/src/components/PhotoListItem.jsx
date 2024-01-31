import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <div className="photo-list-item">
      <img src={props.imageSource} alt={`Photo by ${props.username}`} />
      <img src={props.profile} alt={`${props.username}'s profile`} className="profile-picture" />
      <div className="photo-details">
        <p>{props.username}</p>
        <p>{props.location.city}, {props.location.country}</p>
      </div>
    </div>
  );
};

export default PhotoListItem;
