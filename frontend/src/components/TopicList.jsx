import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from './TopicListItem';

const TopicList = (props) => {
 const { topics, photosByTopic } = props;

  return (
    <div className="top-nav-bar__topic-list">
      {Array.isArray(topics) && topics.map((topicData) => (
        <TopicListItem key={topicData.id} topic={topicData} photosByTopic={photosByTopic} />
      ))}
    </div>
  );
};

export default TopicList;
