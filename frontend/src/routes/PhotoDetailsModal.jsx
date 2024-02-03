// PhotoDetailsModal.jsx
import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';

const PhotoDetailsModal = ({ photo, onCloseModal, favourites, toggleFavourite }) => {

  console.log(`favourites:`, favourites);

  if (!photo) {
    return null;
  }

  const { id, urls, user, location, similar_photos } = photo;
  const { full: imageSource } = urls;
  const { username, profile } = user;


  const simPhotos = Object.values(similar_photos);

  console.log(`simPhotos:`, simPhotos);


  return (
    <div className="photo-details-modal">
      
      <button className="photo-details-modal__close-button" onClick={onCloseModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className="photo-list__item">
      <PhotoFavButton
        photoId={id}
        toggleFavourite={toggleFavourite}
        favourites={favourites}
      />
      </div>
        <img 
        src={imageSource} 
        alt={`Photo by ${username}`} 
        className="photo-details-modal__image" />
       <div className="photo-details-modal__header">
       <img
        src={profile}
        alt={`${username}'s profile`}
        className="photo-details-modal__photographer-profile"
      />
        <p className="photo-list__user-info">{username}</p>
        {location && (
          <p className="photo-details-modal__photographer-location">
            {location.city}, {location.country}
          </p>
        )}
      </div>
      <p>Similar Photos</p>
      <div className="photo-details-modal__images">
      <PhotoList photos={simPhotos} />
      </div>
      </div>
  );
};

export default PhotoDetailsModal;
