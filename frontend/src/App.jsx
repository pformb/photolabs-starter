import React, { useState } from 'react';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import photos from './mocks/photos.js';
import topics from './mocks/topics.js';
import PhotoDetailsModal from './routes/PhotoDetailsModal';

const App = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handleImageClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} onImageClick={handleImageClick} />
      {selectedPhoto && (
        <PhotoDetailsModal
          photo={selectedPhoto}
          onCloseModal={handleCloseModal}
        />
      )}
    </div>
  );
};

export default App;
