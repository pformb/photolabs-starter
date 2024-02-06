import React from 'react';
import { useApplicationData } from '../src/hooks/useApplicationData.js';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import './App.scss';

const App = () => {
  const { 
    state, 
    toggleFavourite, 
    handleImageClick, 
    handleCloseModal,
    photosByTopic,
    returnHome
  } = useApplicationData();


  return (
    <div className="App">
      <HomeRoute
        photos={state.hasFavorites ? state.favorites : state.photoData}
        topics={state.topicData}
        favourites={state.favorites}
        toggleFavourite={toggleFavourite}
        photo={state.selectedPhoto}
        photosByTopic={photosByTopic}
        handleImageClick={handleImageClick}
        returnHome={returnHome} 
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
