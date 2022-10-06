import React from "react";
import { useExpand } from "../../hooks/useExpand";
import "./accordion.scss";

const Accordion = ({
  faiconClassName,
  ionicIconName,
  icon,
  title,
  children,
}) => {
  const { expandNavigation, nodeRef, setExpandNavigation } = useExpand(
    "h3.accordion-header",
    false
  );
  return (
    <div className="accordion" ref={nodeRef}>
      <div
        className="accordion-header"
        onClick={() => setExpandNavigation(!expandNavigation)}
      >
        {faiconClassName && (
          <i className={`${faiconClassName} accordion-icon`}></i>
        )}
        {ionicIconName && <ion-icon name={ionicIconName}></ion-icon>}
        <h3 className="accordion-title">{title}</h3>
        <i
          className={`fa-solid ${
            expandNavigation ? "fa-caret-down" : "fa-caret-up"
          }`}
        ></i>
      </div>
      <div
        className={`${expandNavigation ? "is-expand" : null} accordion-content`}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
