import React from 'react';
import TopicList from './TopicList';
import '../styles/TopNavigationBar.scss';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  const { topics, favouritesCount, photosByTopic, returnHome } = props;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={() => {returnHome()}}>PhotoLabs</span>
      <TopicList topics={topics} photosByTopic={photosByTopic} />
      <FavBadge isFavPhotoExist={favouritesCount > 0}/>
      
    </div>
  );
};

export default TopNavigation;
