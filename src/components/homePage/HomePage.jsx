import React from "react";

import './homePage.scss'

const HomePage = () => {

  var html = document.documentElement
  var deg = 0

  var tick = () => {
    html.style.background = `background linear-gradient(
      ${deg++}deg,
      rgba(2, 0, 36, 0.8) 0%,
      rgba(9, 121, 96, 0.8) 24%,
      rgba(68, 0, 108, 0.8) 59%,
      rgba(0, 49, 59, 0.8) 100%
    )`
    window.setTimeout(tick, 5000/60)

    
  } 
  requestAnimationFrame(tick);

  return (
    <div className="home">
      <div className="blur"></div>
      <div className="image">
      <img src="/assets/img/machines_logo.png" alt="" className="logo-grande img-fluid"/>
      </div>
    </div>
  );
};

export default HomePage;
