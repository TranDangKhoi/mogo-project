import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useExpandNavigation } from "../../hooks/useExpandNavigation";
import "./_header.scss";
import "./HeaderData";
import { HeaderTopData, HeaderBottomData } from "./HeaderData";
const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <HeaderTop></HeaderTop>
          <HeaderContent></HeaderContent>
          <HeaderBottom></HeaderBottom>
        </div>
      </header>
    </>
  );
};

const HeaderTop = () => {
  const { expandNavigation, nodeRef, setExpandNavigation } =
    useExpandNavigation("i.header-toggle", false);
  return (
    <div className="header-top">
      <Link to={"/"} className="header-logo">
        MoGo
      </Link>
      <i
        className="fa-solid fa-bars header-toggle"
        onClick={() => setExpandNavigation(!expandNavigation)}
      ></i>
      <ul
        ref={nodeRef}
        className={`header-menu ${expandNavigation ? "is-expand" : null}`}
      >
        {HeaderTopData.length > 0 &&
          HeaderTopData.map((item) => (
            <li className="header-menu-item" key={item.id}>
              <NavLink className="header-menu-link" to={item.path}>
                {item.title}
              </NavLink>
            </li>
          ))}
      </ul>
    </div>
  );
};

const HeaderContent = () => {
  return (
    <div className="header-content">
      <h2 className="header-content-caption">Creative Template</h2>
      <h1 className="header-content-main">Welcome to Mogo</h1>
      <Link className="header-content-more" to={"/"}>
        Learn more
      </Link>
    </div>
  );
};

const HeaderBottom = () => {
  return (
    <div className="header-bottom">
      {HeaderBottomData.length > 0 &&
        HeaderBottomData.map((item) => (
          <div className="header-bottom-item" key={item.id}>
            <span className="header-bottom-number">{item.order}</span>
            <span className="header-bottom-text">{item.title}</span>
          </div>
        ))}
    </div>
  );
};

export default Header;
