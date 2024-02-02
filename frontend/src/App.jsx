import React from 'react';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import photos from './mocks/photos.js';
import topics from './mocks/topics.js';


const App = () => {
  
  return (
    <div className="App">
     <HomeRoute photos={photos} topics={topics}/>
    </div>
  );
};

export default App;
