import React from 'react';
import Header from './Pages/HomePage/Header';
import Hero from './Pages/HomePage/Hero';
import Video from './Pages/HomePage/Video';
import Feature from './Pages/HomePage/Feature';
import Accelerate from './Pages/HomePage/Accelerate';
import Pricing from './Pages/HomePage/Pricing';
import Community from './Pages/HomePage/Community';
import Footer from './Pages/HomePage/Footer';


const App = () => {
  return (
    <div>
      <>
      <Header/>
      <Hero/>
      <Video/>
      <Feature/>
      <Accelerate/>
      <Pricing/>
      <Community/>
      <Footer/>
      </>
    </div>
  );
};

export default App;
