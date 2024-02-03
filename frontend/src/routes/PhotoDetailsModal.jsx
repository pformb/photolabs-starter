// PhotoDetailsModal.jsx
import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ photo, onCloseModal }) => {
  if (!photo) {
    return null;
  }

  const { id, urls, user, location } = photo;
  const { full: imageSource } = urls;
  const { username } = user;

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick={onCloseModal} />
      </button>
        <img src={imageSource} alt={`Photo by ${username}`} />
        {/* Add other photo details here */}
      </div>
  );
};

export default PhotoDetailsModal;
