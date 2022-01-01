import React from "react";
import { Avatar } from "@mui/material";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <img
          src="data:image/jpeg;base64,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"
          alt=""
        />
        <Avatar
          className="sidebar-avatar"
          src="https://static.statusqueen.com/mobilewallpaper/thumbnail/mobile_wallpaper__1-471.jpg"
        />
        <h2>Subhashish Shah</h2>
        <h4>Subhashish@ismt.edu.np</h4>
      </div>
      <div className="sidebar-stats">
        <div className="sidebar-stat">
          <p>Who viewed you</p>
          <p className="sidebar-statNumber">2,543</p>
        </div>
        <div className="sidebar-stat">
          <p>Views on Post</p>
          <p className="sidebar-statNumber">2,440</p>
        </div>
      </div>
      <div className="sidebar-bottom">
        <p>Recent</p>
      </div>
    </div>
  );
};

export default Sidebar;
