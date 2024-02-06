import React from 'react';
import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import TopNavigation from '../components/TopNavigationBar.jsx';

const HomeRoute = (props) => {
  const { topics, favourites, toggleFavourite, handleImageClick, photos } = props;

  return (
    <div className="home-route">
      <TopNavigation topics={topics} favouritesCount={favourites.length} />
      <PhotoList photos={photos} toggleFavourite={toggleFavourite} favourites={favourites} handleImageClick={handleImageClick} />
    </div>
  );
};

export default HomeRoute;
