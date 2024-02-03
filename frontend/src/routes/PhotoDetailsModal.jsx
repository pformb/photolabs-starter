// PhotoDetailsModal.jsx
import React from 'react';
import '../styles/PhotoDetailsModal.scss';

const PhotoDetailsModal = ({ photo, onCloseModal }) => {
  if (!photo) {
    return null;
  }

  const { id, urls, user, location } = photo;
  const { full: imageSource } = urls;
  const { username } = user;

  return (
    <div className="photo-details-modal">
      <div className="modal-content">
        <span className="close-button" onClick={onCloseModal}>&times;</span>
        <img src={imageSource} alt={`Photo by ${username}`} className="modal-image" />
        {/* Add other photo details here */}
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
