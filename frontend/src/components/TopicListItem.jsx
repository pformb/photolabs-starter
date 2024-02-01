import React from "react";

import "../styles/TopicListItem.scss";

const sampleDataForTopicListItem = {
  id: "1",
  slug: "topic-1",
  label: "Nature",
};

const TopicListItem = (props) => {
  const { topic } = props;

  // Check if 'topic' is defined
  if (!topic) {
    return null; // or handle the case when 'topic' is undefined
  }

  const { slug, label } = topic; // Destructure 'topic' to get individual properties

  return (
    <div className="topic-list__item">
      <span>{label}</span>
    </div>
  );
};

export default TopicListItem;
