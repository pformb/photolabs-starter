import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from './TopicListItem';
import topics from '../mocks/topics.js';

const TopicList = () => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topicData) => (
        <TopicListItem key={topicData.id} topic={topicData} />
      ))}
    </div>
  );
};

export default TopicList;
