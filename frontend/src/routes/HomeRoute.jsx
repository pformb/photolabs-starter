import React, { useState } from 'react';
import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';

const HomeRoute = (props) => {
  const { topics, photos } = props;

  // State to manage favorite photos globally
  const [favourites, setFavourites] = useState([]);

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

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} />
      <PhotoList photos={photos} toggleFavourite={toggleFavourite} favourites={favourites} />
    </div>
  );
};

export default HomeRoute;
