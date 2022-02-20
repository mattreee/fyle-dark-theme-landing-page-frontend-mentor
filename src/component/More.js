/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Productive from '../images/illustration-stay-productive.png';
import Arrow from '../images/icon-arrow.svg';

const More = () => {
  return (
    <section className="more">
      <img className="more__image" src={Productive} alt="" />
      <div className="more__float">
        <h2 className="more__title">Stay productive, wherever you are</h2>

        <p className="more__desc">
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>

        <p className="more__desc">
          Securely share files and folders with friends, family and colleagues for
          live collaboration. No email attachments required.
        </p>

        <a className="more__link" href="#">See how Fylo works <img src={Arrow} alt='' /></a>
      </div>
    </section>
  );
};

export default More;
