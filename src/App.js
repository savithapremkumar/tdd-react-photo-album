import React from "react";
import Header from "./components/Header";
import { SiteHeading } from "./constants/messages";
import "./styles/main.scss";

function App() {
  return (
    <div data-test="appComponent" className="App">
      <Header heading={SiteHeading}></Header>
    </div>
  );
}

export default App;
