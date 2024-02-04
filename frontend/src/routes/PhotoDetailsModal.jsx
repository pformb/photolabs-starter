// PhotoDetailsModal.jsx
import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';

const PhotoDetailsModal = ({ photo, onCloseModal, favourites, toggleFavourite }) => {

  if (!photo) {
    return null;
  }

  const { id, urls, user, location, similar_photos } = photo;
  const { full: imageSource } = urls;
  const { username, profile } = user;


  const simPhotos = Object.values(similar_photos);

  return (
    <div className="photo-details-modal">
      
      <div className='photo-details-modal__top-bar'>
          <button 
          className="photo-details-modal__close-button" 
          onClick={onCloseModal}>
          <img 
          src={closeSymbol} 
          alt="close symbol" />
          </button >
        </div>
      
      <div className="photo-details-modal__images">
      
      <PhotoFavButton
        photoId={id}
        toggleFavourite={toggleFavourite}
        favourites={favourites}
      />
        <img 
        className='photo-details-modal__image'
        src={imageSource} 
        alt={`Photo by ${username}`} 
         />

<div className='photo-details-modal__photographer-details'> 

       <img
      className="photo-details-modal__photographer-profile"
      src={profile}
      />
      <div className="photo-list__user-info">
        <span >{username}</span>
        <div className="photo-details-modal__photographer-location">
        {location && (
        <span> {location.city}, {location.country}</span>
        )}
        </div>
      </div>
    </div>
  </div>

  <br></br>
      
  <div className="photo-details-modal__images">
      <strong>Similar Photos</strong>
      <div>
      <PhotoList 
      photos={simPhotos}
      favourites={favourites}
      toggleFavourite={toggleFavourite}/>
      </div>
      </div>
      </div>
  );
};

export default PhotoDetailsModal;
