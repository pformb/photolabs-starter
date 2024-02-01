import React from 'react';
import PhotoListItem from './components/PhotoListItem';
import './App.scss';

// Sample data for a photo item
const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

// Create an array of 3 photo items with unique IDs
const data = new Array(3).fill().map((_, index) => ({
  ...sampleDataForPhotoListItem,
  id: index + 1,
}));

// React functional component for the App
const App = () => {
  return (
    // Main container with a className of "App"
    <div className="App">
      {/* Map over the data array and render a PhotoListItem for each item */}
      {data.map((photo) => (
        // Each PhotoListItem is assigned a unique key and passed the photo data as a prop
        <PhotoListItem key={photo.id} photo={photo} />
      ))}
    </div>
  );
};

// Export the App component as the default export
export default App;
