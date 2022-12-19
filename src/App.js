import React from "react";
import Navigation from "./component/Navigation/Navigation";
import Logo from "./component/Logo/Logo";
import "./App.css";
import ImageLinkForm from "./component/ImageLinkForm/ImageLinkForm";
import Rank from "./component/Rank/Rank";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
    </div>
  );
}

export default App;
