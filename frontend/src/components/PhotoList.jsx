import React from "react";
import PhotoListItem from './PhotoListItem';
import "../styles/PhotoList.scss";
import photos from '../mocks/photos.js';

const PhotoList = (props) => {
  const { photos } = props
  return (
    <ul className="photo-list">
      {Array.isArray(photos) && photos.map((photoData) => (
        <PhotoListItem key={photoData.id} photo={photoData} />
      ))}
    </ul>
  );
};

export default PhotoList;
