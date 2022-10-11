import React from "react";
import "./blog-card.scss";
const BlogCard = ({ item }) => {
  return (
    <div className="blog-item">
      <div className="blog-main">
        <img src={item.thumbnail} alt="" className="blog-img" />
        <span className="blog-date">
          <span className="blog-day">{item.releaseDate.getDate()}</span>
          <span className="blog-month">
            {item.releaseDate
              .toLocaleString("default", { month: "long" })
              .slice(0, 3)}
          </span>
        </span>
      </div>
      <div className="blog-meta">
        <span className="blog-title">{item.title}</span>
        <p className="blog-desc">{item.description}</p>
        <div className="blog-statistics">
          <span className="blog-view">
            <i className="fa-solid fa-eye"></i>
            {item.view}
          </span>
          <i className="fa-solid fa-comment"></i>
          <span className="blog-comments">{item.comments}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
