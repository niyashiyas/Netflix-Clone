import React from "react";
import NavBar from "./Components/NavBar/NavBar.js";
import "./App.css";
import {
  action,
  originals,
  comedy,
  horror,
  romance,
  documentaries,
  trending,
} from "./urls";
import Banner from "./Components/Banner/Banner.js";
import RowPost from "./Components/RowPost/RowPost.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={originals} title="NETFLIX ORIGINALS" />
      <RowPost url={trending} title="Trending Now" isSmall />
      <RowPost url={action} title="Action" isSmall />
      <RowPost url={comedy} title="Comedy" isSmall />
      <RowPost url={horror} title="Horror" isSmall />
      <RowPost url={romance} title="Romance" isSmall />
      <RowPost url={documentaries} title="Documentaries" isSmall />
    </div>
  );
}

export default App;
