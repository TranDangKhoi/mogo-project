import React from "react";
import "./_paragraph.scss";
const Paragraph = ({ caption, title, children, color }) => {
  return (
    <div className="paragraph">
      <h3
        className="paragraph-caption"
        style={{
          color: color,
        }}
      >
        {caption}
      </h3>
      <h2
        className="paragraph-title"
        style={{
          color: color,
        }}
      >
        {title}
      </h2>
      {children && <p className="paragraph-desc">{children}</p>}
    </div>
  );
};

export default Paragraph;
