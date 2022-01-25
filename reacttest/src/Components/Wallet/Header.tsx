import React from "react";
import "./styles/Header.scss";

function Header() {
  return (
    <>
      <div className="header">
        <img
          src="https://www.dropbox.com/s/l3lpl16tt2hjwlo/logo%20%281%29.png?raw=1"
          alt="arrow"
        />

        <img
          className="Home"
          src="https://www.dropbox.com/s/kwl92e61lnoz3ot/Vector-5.png?raw=1"
          alt="Home"
        />
        {/* <select name="cars" id="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select> */}
        <img
          style={{ height: "27px" }}
          src="https://www.dropbox.com/s/v9efs39kvliax8z/Group%20450.png?raw=1"
          alt="Dropdown"
        />
        <img
          src="https://www.dropbox.com/s/k2koir403zh1ujz/notification.png?raw=1"
          alt="notifications"
          className="Notifications"
        />
        <img
          src="https://www.dropbox.com/s/xo93fs3qa1bqav2/settings.png?raw=1"
          alt="settings"
          className="Settings"
        />
      </div>
    </>
  );
}
export default Header;
