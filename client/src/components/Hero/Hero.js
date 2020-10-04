import React from "react";
import "./Hero.css";
import heroImage from "../../assets/heroImage.png";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__left">
        <h3>Level Up Your Learning With HypeLearn</h3>
        <img src={heroImage} alt="Hero" />
      </div>
      <div className="hero__right">
        <p className="hero__right--top">
          if Knowledge is Power
          <br />
          Then Learning is superpower
        </p>
        <p className="hero__right--bottom">
          with One to One interaction
          <br />
          Learn Anything | Teach Anything
        </p>
        <button className="hero__right--button">Get Started</button>
      </div>
    </div>
  );
};
