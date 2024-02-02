// Inside PhotoList.jsx
import React from "react";
import PhotoListItem from './PhotoListItem';
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const { photos, toggleFavourite, favourites } = props;

  return (
    <ul className="photo-list">
      {Array.isArray(photos) && photos.map((photoData) => (
        <PhotoListItem
          key={photoData.id}
          photo={photoData}  // Pass the 'photo' prop
          toggleFavourite={toggleFavourite}
          favourites={favourites}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
