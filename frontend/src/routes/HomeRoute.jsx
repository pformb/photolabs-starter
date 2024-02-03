import React, { useState } from 'react';
import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import TopNavigation from '../components/TopNavigationBar.jsx';
import PhotoDetailsModal from './PhotoDetailsModal';

const HomeRoute = (props) => {
  const { topics, photos } = props;

  // State to manage favorite photos globally
  const [favourites, setFavourites] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Function to toggle the favorite state of a photo
  const toggleFavourite = (photoId) => {
    setFavourites((prevFavourites) => {
      if (prevFavourites.includes(photoId)) {
        // If the photo is already in favorites, remove it
        return prevFavourites.filter((id) => id !== photoId);
      } else {
        // If the photo is not in favorites, add it
        return [...prevFavourites, photoId];
      }
    });
  };

  const handleImageClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="home-route">
      <TopNavigation topics={topics} favouritesCount={favourites.length} />
      <PhotoList photos={photos} toggleFavourite={toggleFavourite} favourites={favourites} onImageClick={handleImageClick} />
      <PhotoDetailsModal photo={selectedPhoto} onCloseModal={handleCloseModal} />
    </div>
  );
};

export default HomeRoute;
