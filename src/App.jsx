import React from "react";
import Header from "./Component/Header";
import Hero from "./Component/Hero";
import Video from "./Component/Video";
import Feature from "./Component/Feature";
import Workflow from "./Component/Workflow";
import Pricing from "./Component/Pricing";
import Community from "./Component/Community";
import Footer from "./Component/Footer";

const App = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="p-2">
        <Hero />
        <Video />
        <Feature />
        <Workflow />
        <Pricing />
        <Community />
        <Footer />
      </div>
    </>
  );
};

export default App;
