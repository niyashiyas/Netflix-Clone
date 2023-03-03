import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <div className="content">
        <h1 className="title">Movie name</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <h1 className="description">
          Lorem ipsum, dolor sit amet consectetur latta lor adipisicing elit.
          Quibusdam, inventore dignissimos nulla alias id corporis.
        </h1>
      </div>
      <div className="fade_buttom"></div>
    </div>
  );
}

export default Banner;
