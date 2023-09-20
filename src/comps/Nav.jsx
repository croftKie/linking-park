import React from "react";
import link from "../assets/link.png";
import user from "../assets/user.png";

function Nav({ setMode }) {
  return (
    <div className="nav-container">
      <div className="nav-inner-container-right">
        <button
          onClick={() => {
            setMode(1);
          }}
        >
          <img src={link} alt="" />
        </button>
        <button
          onClick={() => {
            setMode(2);
          }}
        >
          <img src={user} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Nav;
