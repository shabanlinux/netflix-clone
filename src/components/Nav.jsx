import React, { useEffect, useState } from "react";
import "./Nav.css";

const Nav = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", window);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="netflix logo"
      />
      <img
        className="nav__avatar"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqSsd59s2YIKxKvLHU4QkpNUuir7i1h3t9aFpLAplYQNrO88xDeFHnJfxWkhDBzig9&usqp=CAU"
        alt="logo"
      />
    </div>
  );
};

export default Nav;
