import React from "react";
import "./_paragraph.scss";
const Paragraph = ({ caption, title, children }) => {
  return (
    <div className="paragraph">
      <h3 className="paragraph-caption">{caption}</h3>
      <h2 className="paragraph-title">{title}</h2>
      {children && <p className="paragraph-desc">{children}</p>}
    </div>
  );
};

export default Paragraph;
