import React, {useEffect, useState} from "react";
import axios from "../../axios";
import {API_KEY} from "../../constants/constants";
import "./Banner.css";
function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    console.log("hi");
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log(response.data.results[0]);
        setMovie(response.data.results[0]);
      });
  }, []);
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
