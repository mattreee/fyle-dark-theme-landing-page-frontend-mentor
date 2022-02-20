/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Illustration from '../images/illustration-intro.png';

const Hero = () => {
  return (
    <section className="hero">
      <img className="hero__illustration" src={Illustration} alt='' />
      <h1 className="hero__title">All your files in one secure location, accessible anywhere.</h1>

      <p className="hero__desc">
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends family, and
        co-workers.
      </p>

      <a className="hero__cta" href="#">Get Started</a>
    </section>
  );
};

export default Hero;
