import React from "react";
import { useExpand } from "../../hooks/useExpand";
import "./accordion.scss";

const Accordion = ({
  faiconClassName,
  ionicIconName,
  openedByDefault,
  icon,
  title,
  children,
}) => {
  const { expandNavigation, nodeRef, setExpandNavigation } = useExpand(
    "h3.accordion-header",
    openedByDefault ? true : false
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
            expandNavigation ? "fa-angle-down" : "fa-angle-up"
          } accordion-caret`}
        ></i>
      </div>
      <div
        className={`${expandNavigation ? "is-expand" : null} accordion-content`}
      >
        <div className="accordion-text">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
