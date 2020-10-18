import React from "react";
import Header from "./components/Header";
import { SiteHeading } from "./constants/messages";

function App() {
  return (
    <div data-test="appComponent" className="App">
      <Header heading={SiteHeading}></Header>
    </div>
  );
}

export default App;
