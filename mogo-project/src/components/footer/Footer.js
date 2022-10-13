import React from "react";
import Container from "../container/Container";
import { BlogData, InstagramData } from "./FooterData";
import "./footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-top">
          <div className="footer-column">
            <h3 className="footer-heading footer-heading--logo">MoGo</h3>
            <p className="footer-desc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
              eveniet neque nesciunt ut repellat tempore error unde deleniti
              laudantium quam, provident est fuga dicta ipsum optio consequuntur
              expedita atque laboriosam.
            </p>
            <p className="footer-follower">
              <strong>15k</strong> followers
            </p>
            <div className="footer-social">
              <span className="footer-text">Follow us:</span>
              <div className="footer-social-list">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-youtube"></i>
                <i className="fa-brands fa-tiktok"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-pinterest"></i>
              </div>
            </div>
            <form className="footer-form">
              <input
                type="email"
                placeholder="Your email"
                className="footer-form-input"
              />
              <button className="footer-form-button">Subscribe</button>
            </form>
          </div>
          <div className="footer-column">
            <h3 className="footer-heading">Blogs</h3>
            <div className="footer-blog">
              {BlogData.length > 0 &&
                BlogData.map((item) => (
                  <div className="footer-blog-item" key={item.id}>
                    <img
                      src={item.thumbnail}
                      alt=""
                      className="footer-blog-image"
                    />
                    <div className="footer-blog-info">
                      <h4 className="footer-blog-title">{item.title}</h4>
                      <span className="footer-blog-date">
                        {item.releaseDate.getDate()}{" "}
                        {item.releaseDate
                          .toLocaleString("default", { month: "long" })
                          .slice(0, 3)}
                        {", "}
                        {item.releaseDate.getFullYear()}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="footer-column">
            <h3 className="footer-heading">Instagram</h3>
            <div className="footer-gallery">
              {InstagramData.length > 0 &&
                InstagramData.map((item) => (
                  <img
                    src={item.imgSrc}
                    key={item.id}
                    alt=""
                    className="footer-gallery-image"
                  />
                ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; 2016 MoGo free PSD template by <span>Laaqiq</span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
