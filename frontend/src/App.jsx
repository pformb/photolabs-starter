import React, { useState } from 'react';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import photos from './mocks/photos.js';
import topics from './mocks/topics.js';
import PhotoDetailsModal from './routes/PhotoDetailsModal';

const App = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
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

  const handleImageClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="App">
      <HomeRoute 
      photos={photos} 
      topics={topics} 
      favourites={favourites} 
      toggleFavourite={toggleFavourite}
      photo={selectedPhoto}
      handleImageClick={handleImageClick} />
      {selectedPhoto && (
        <PhotoDetailsModal
          photo={selectedPhoto}
          onCloseModal={handleCloseModal}
          favourites={favourites} 
          toggleFavourite={toggleFavourite}
        />
      )}
    </div>
  );
};

export default App;
