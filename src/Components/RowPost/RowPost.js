import React, {useEffect, useState} from "react";
import YouTube from "react-youtube";
import "./RowPost.css";
import {API_KEY, imageUrl} from "../../constants/constants";
import axios from "../../axios";
function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState("");
  useEffect(() => {
    axios.get(props.url).then((response) => {
      console.log(response.data.results);
      setMovies(response.data.results);
    });
  }, []);
  const opts = {
    height: "390",
    width: "100%",
    playerVar: {},
    autoplay: 1,
  };

  const handleMovie = (id) => {
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.length != 0) {
          console.log("hi im tanu" + response.data.results);
          setUrlId(response.data.results[0]);
        } else {
          console.log("hi im niya");
        }
      });
  };

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <img
            onClick={() => {
              handleMovie(obj.id);
            }}
            className={props.isSmall ? "smallPoster" : "poster"}
            src={`${imageUrl + obj.poster_path}`}
            alt="poster"
          />
        ))}
      </div>
      {urlId && <YouTube videoId={urlId.key} opts={opts} />}
    </div>
  );
}

export default RowPost;
