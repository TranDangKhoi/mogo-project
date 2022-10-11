import React from "react";
import Container from "../container/Container";
import "./quote.scss";
const Quote = ({
  imgSrc,
  faIconClassName,
  borderRadius,
  greenBorder = false,
  quote,
  author,
}) => {
  return (
    <div className="quote">
      <Container>
        <div className="quote-container">
          <i className="fa-solid fa-angle-left quote-arrow-left"></i>
          <div className="quote-content">
            <div
              className="quote-img"
              style={{
                borderRadius: borderRadius,
                border: greenBorder && "3px solid #95e1d3",
              }}
            >
              {faIconClassName && <i className={`${faIconClassName}`}></i>}
              {imgSrc && (
                <img
                  src={imgSrc}
                  alt={imgSrc}
                  style={{
                    borderRadius: borderRadius,
                  }}
                />
              )}
            </div>
            <div className="quote-paragraph">
              <p className="quote-text">{`"${quote}"`}</p>
              <span className="quote-author">{author}</span>
            </div>
          </div>
          <i className="fa-solid fa-angle-right quote-arrow-right"></i>
        </div>
      </Container>
    </div>
  );
};

export default Quote;
