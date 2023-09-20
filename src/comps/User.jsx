import React from "react";

function User() {
  return (
    <div className="account">
      <div className="settings-container">
        <div className="settings-container-nav">
          <h3>Settings</h3>
        </div>
        <div className="settings">
          <div className="setting-card">
            <img src="" alt="" />
            <p>Leave Feedback on GitHub</p>
          </div>
          <div className="setting-card">
            <p className="name">Toggle Dark Mode</p>
            <input type="checkbox" name="" id="" />
          </div>
          <div className="setting-card">
            <p className="name">Toggle Music</p>
            <input type="checkbox" name="" id="" />
          </div>
        </div>
      </div>
      <div className="user-container">
        <div className="user-container-nav">
          <h3>Your Profile</h3>
        </div>
        <div className="profile">
          <div className="setting-card">
            <p>User Email</p>
          </div>
          <div className="setting-card">
            <p className="name">Change your Password</p>
            <img src="" alt="" />
          </div>
          <div className="setting-card">
            <p className="name">Sign Out</p>
          </div>
          <div className="setting-card">
            <p className="name">Delete Your Account</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
