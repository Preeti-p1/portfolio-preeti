import React from 'react';
import { Link } from 'react-router-dom';
import '../Pages/style.css';

const Nav = () => {
  return (
    <>
      <ul className="Navbar" type="none">
        <li>
          <Link className="text" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="text" to="/About">
            About
          </Link>
        </li>
        <li>
          <Link className="text" to="/Contact">
            Contact
          </Link>
        </li>
        <li>
          <Link className="text" to="/Projects">
            Project
          </Link>
        </li>
        <li>
          <Link className="text" to="/Technologies">
            Technologies
          </Link>
        </li>

        <li className="git">
          <a href="https://github.com/Preeti-p1">
            <img
              src="https://www.pngkey.com/png/detail/178-1787508_github-icon-download-at-icons8-white-github-icon.png"
              alt=""
              height={'34px'}
            />
          </a>
        </li>
        <li className="Linkdin">
          <a href="https://www.linkedin.com/in/preeti-chauhan-148952233/">
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt=""
              height={'30px'}
            />
          </a>
        </li>

        <li className="insta">
          <a href="https://www.instagram.com/preeti___216/">
            <img
              src="https://www.pngitem.com/pimgs/m/1-14415_instagram-logo-black-borders-png-transparent-background-instagram.png"
              alt=""
              height={'30px'}
            />
          </a>
        </li>
      </ul>
    </>
  );
};

export default Nav;
