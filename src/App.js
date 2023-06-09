import React from "react";
import "./app.css";
import {
  Blog,
  WhatGPT4,
  Footer,
  Header,
  Posibility,
  Features,
} from "./containers";
import { CTA, Navbar, Brand } from "./components/index";
import "./index.css";
import "./app.css";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT4 />
      <Features />
      <Posibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
