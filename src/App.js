import React from "react";
import NavBar from "./Components/NavBar/NavBar.js";
import "./App.css";
import {originals, action} from "./urls.js";
import Banner from "./Components/Banner/Banner.js";
import RowPost from "./Components/RowPost/RowPost.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={originals} title="Netflix Originals" />
      <RowPost url={action} title="Action" isSmall />
    </div>
  );
}

export default App;
