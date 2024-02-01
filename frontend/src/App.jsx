import React from 'react';
// import PhotoListItem from './components/PhotoListItem'; 
import PhotoList from './components/PhotoList';
import './App.scss';
import TopicList from './components/TopicList';



/* const data = new Array(3).fill().map((_, index) => ({
  ...sampleDataForPhotoListItem,
  id: index + 1,
})); */


const App = () => {
  return (
    <div className="App">
     {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>) } */}
     <PhotoList/>
     <TopicList/>
    </div>
  );
};

// Export the App component as the default export
export default App;
