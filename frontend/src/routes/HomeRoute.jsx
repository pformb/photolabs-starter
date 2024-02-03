import React, { useState } from 'react';
import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import TopNavigation from '../components/TopNavigationBar.jsx';
import PhotoDetailsModal from './PhotoDetailsModal';

const HomeRoute = (props) => {
  const { topics, photos, favourites, toggleFavourite, selectedPhoto, handleImageClick, handleCloseModal } = props;

  return (
    <div className="home-route">
      <TopNavigation topics={topics} favouritesCount={favourites.length} />
      <PhotoList photos={photos} toggleFavourite={toggleFavourite} favourites={favourites} handleImageClick={handleImageClick} />
      <PhotoDetailsModal photo={selectedPhoto} onCloseModal={handleCloseModal} favourites={favourites} toggleFavourite={toggleFavourite} />
    </div>
  );
};

export default HomeRoute;
