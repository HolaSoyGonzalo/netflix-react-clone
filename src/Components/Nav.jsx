import React, { useState, useEffect } from "react";
import styled from "styled-components";

import "../Styling/Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <Navbar className={`${show && "nav-scrolled"}`}>
      <Logo
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      ></Logo>
      <Avatar
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
        alt="Netflix Logo"
      ></Avatar>
    </Navbar>
  );
}

export default Nav;

const Navbar = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 20px;
  height: 30px;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  /* Animations */
  transition-timing-function: ease-in;
  transition: all 0.5s;
`;

const Logo = styled.img`
  position: fixed;
  left: 20px;
  width: 100px;
  object-fit: contain;
`;

const Avatar = styled.img`
  position: fixed;
  right: 20px;
  top: 15px;
  width: 40px;
  object-fit: contain;
`;
