import React from "react";
import Header from "./components/Header";
import Home from "./views/Home";
import { SiteHeading } from "./constants/messages";
import "./styles/main.scss";

function App() {
  return (
    <div data-test="appComponent" className="App">
      <Header heading={SiteHeading}></Header>
      <Home></Home>
    </div>
  );
}

export default App;
