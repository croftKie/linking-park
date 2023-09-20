import React from "react";
import delImg from "../assets/delete.png";
import left from "../assets/left.png";
import link_open from "../assets/link_open.png";
function User() {
  return (
    <div className="account">
      <div className="settings-container">
        <div className="settings-container-nav">
          <h3>Settings</h3>
        </div>
        <div className="settings">
          <div className="setting-card">
            <img src={link_open} alt="" />
            <p>Leave Feedback on GitHub</p>
          </div>
          <div className="setting-card">
            <p className="name">Toggle Dark Mode</p>
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
          </div>
          <div className="setting-card">
            <p className="name">Toggle Music</p>
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>{" "}
          </div>
        </div>
      </div>
      <div className="user-container">
        <div className="user-container-nav">
          <h3>Your Profile</h3>
        </div>
        <div className="profile">
          <div className="setting-card">
            <img src={left} alt="" />
            <p>Change your Email</p>
          </div>
          <div className="setting-card">
            <img src={left} alt="" />
            <p className="name">Change your Password</p>
          </div>
          <div className="setting-card">
            <img src={left} alt="" />
            <p className="name">Sign Out</p>
          </div>
          <div className="setting-card">
            <img src={delImg} alt="" />
            <p className="name">Delete Your Account</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
