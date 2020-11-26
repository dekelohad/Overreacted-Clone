import React from "react";
import moment from "moment";
const Article = ({ title, date, snippet, timeRead }) => {
  return (
    <article className="article">
      <h3 className="article__header">{title}</h3>
      <span className="article_date">
        {moment(date).format("MMMM D, YYYY ")} • ☕️ {timeRead}min read
      </span>
      <p className="article_paragraph">{snippet}</p>
    </article>
  );
};

export default Article;
