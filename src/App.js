import React from "react";
import NavBar from "./Components/NavBar/NavBar.js";
import "./App.css";
import {action, originals, comedy} from "./urls";
import Banner from "./Components/Banner/Banner.js";
import RowPost from "./Components/RowPost/RowPost.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={originals} title="Netflix Originals" />
      <RowPost url={action} title="Action" isSmall />
      <RowPost url={comedy} title="Comedy" isSmall />
    </div>
  );
}

export default App;
