import React from "react";

const NotFound = () => {

  return (
    <div className="error">
      <div className="container">
        <div className="error__inner d-flex flex-column align-center">
          <span className="title">404</span>
          <p className="subtitle">not_found.there_is_coffee</p>
          <p className="text">not_found.sorry</p>
          <a href="/" className="error__link">
            not_found.homepage
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
