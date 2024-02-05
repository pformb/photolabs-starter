import React from 'react';
import { useApplicationData } from '../src/hooks/useApplicationData.js';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import photos from './mocks/photos.js';
import topics from './mocks/topics.js';

const App = () => {
  const { state, toggleFavourite, toggleModal, handleImageClick, handleCloseModal } = useApplicationData();


  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        favourites={state.favorites}
        toggleFavourite={toggleFavourite}
        photo={state.selectedPhoto}
        handleImageClick={handleImageClick}
      />
      {state.displayModal && (
        <PhotoDetailsModal
          photo={state.selectedPhoto}
          onCloseModal={handleCloseModal}
          favourites={state.favorites}
          toggleFavourite={toggleFavourite}
        />
      )}
    </div>
  );
};

export default App;
