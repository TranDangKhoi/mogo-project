import React from "react";
import Container from "../container/Container";
import quoteAvatar from "../../assets/img-quote-avatar.png";
import "./quote.scss";
const Quote = ({ saidByPerson = false }) => {
  return (
    <div className="quote">
      <Container>
        <div className="quote-container">
          <i className="fa-solid fa-angle-left quote-arrow-left"></i>
          {saidByPerson ? (
            <QuoteContent
              imgSrc={quoteAvatar}
              quote={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.Veritatis neque accusantium repellat dolor, voluptates ametquasi iure excepturi natus recusandae facere sint expeditacorrupti, necessitatibus labore non sunt voluptate animi."
              }
            />
          ) : (
            <QuoteContent
              faIconClassName={"fa-solid fa-message"}
              quote={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.Veritatis neque accusantium repellat dolor, voluptates ametquasi iure excepturi natus recusandae facere sint expeditacorrupti, necessitatibus labore non sunt voluptate animi."
              }
              greenBorder={true}
            />
          )}
          <i className="fa-solid fa-angle-right quote-arrow-right"></i>
        </div>
      </Container>
    </div>
  );
};

function QuoteContent({
  greenBorder,
  borderRadius,
  faIconClassName,
  imgSrc,
  quote,
  author,
}) {
  return (
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
  );
}

export default Quote;
