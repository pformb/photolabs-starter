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

  console.log(photo)
  console.log(urls)
  console.log(user)

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onCloseModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
        <img src={imageSource} alt={`Photo by ${username}`} className="photo-details-modal__image" />
        {/* Add other photo details here */}
      </div>
  );
};

export default PhotoDetailsModal;
