import React, { Component } from "react";
import "./../assets/stylesheets/index.css";

import logoPath from "./../assets/index-logo.png";

class Index extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="index-container">
          {/* <div className="index-logo" />
           */}
          <img className="index-logo" src={logoPath} alt="logo" />
        </div>
        <form action="/home" method="GET">
          <button className="index-button" type="submit">
            <h1 className="index-h1">
              WELCOME TO <span>SITE</span>
            </h1>
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default Index;
