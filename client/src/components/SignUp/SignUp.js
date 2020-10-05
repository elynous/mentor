import React from "react";
import "./SignUp.css";
import heroImage from "../../assets/signUpImage.png";
import googleLogo from "../../assets/google_logo.png";
import facebookLogo from "../../assets/facebook_logo.png";

export const SignUp = () => {
  return (
    <section className="signup">
      <div className="signup__image">
        <img src={heroImage} alt="" />
      </div>
      <div className="signup__form">
        <form>
          <input placeholder="Name" />
          <input placeholder="Email" />
          <input placeholder="Password" />
          <button>Sign Up</button>
        </form>
        <div className="signup__social">
          <span>
            Sign Up With <img src={googleLogo} alt="" />
          </span>
          <span>
            Login With <img src={facebookLogo} alt="" />
          </span>
        </div>
      </div>
    </section>
  );
};
