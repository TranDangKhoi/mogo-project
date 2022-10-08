import React from "react";
import Container from "../container/Container";
import "./quote.scss";
const Quote = ({ imgSrc, faIconClassName, quote, author }) => {
  return (
    <div className="quote">
      <Container>
        <div className="quote-container">
          <i className="fa-solid fa-angle-left quote-arrow-left"></i>
          <div className="quote-content">
            <div className="quote-img">
              {faIconClassName && <i className="fa-solid fa-brush"></i>}
              {imgSrc && <img src={imgSrc} alt={imgSrc} />}
            </div>
            <div className="quote-paragraph">
              <p className="quote-text">{`"${quote}"`}</p>
              <span className="quote-author">Lewandowski</span>
            </div>
          </div>
          <i className="fa-solid fa-angle-right quote-arrow-right"></i>
        </div>
      </Container>
    </div>
  );
};

export default Quote;
