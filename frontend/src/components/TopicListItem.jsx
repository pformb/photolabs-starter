import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { topic, photosByTopic } = props;

  // Check if 'topic' is defined
  if (!topic) {
    return null; // or handle the case when 'topic' is undefined
  }

  const { slug, title } = topic; // Destructure 'topic' to get individual properties

  return (
    <div className="topic-list__item">
      <span onClick={() => photosByTopic(topic.id)}>{title}</span>
    </div>
  );
};

export default TopicListItem;
