import React from "react";
import "./styles/Header.scss";

const Logo = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <img
          src="https://www.dropbox.com/s/yegv16w743ea5rq/two.png?raw=1"
          alt="LogoBackImage"
          style={{ position: "relative", top: "17px", left: "9px" }}
        />
        <img
          src="https://www.dropbox.com/s/8mhoxawwxvzy6m8/one.png?raw=1"
          alt="LogoFrontImage"
          style={{
            height: "2vh",
            position: "relative",
            top: "18px",
            right: "2px",
          }}
        />
      </div>
      <span style={{ marginTop: "2vh" }}>
        <span style={{ color: "#B072FF" }}>Home</span>Page
      </span>
    </div>
  );
};
const Button = () => {
  return (
    <>
      <p style={{ padding: "0" }}>hama</p>
    </>
  );
};
function Header(props: any) {
  return (
    <div className="Header">
      {/* {props.data != null ? props.data : " "} */}
      <div>
        {props.logo ? (
          <Logo />
        ) : props.data ? (
          <>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <span style={{ marginTop: "2vh" }}>{props.data}</span>
              <div style={{ position: "absolute", right: "0px" }}>
                {props.button ? <Button /> : ""}
              </div>
            </div>
          </>
        ) : (
          "err"
        )}
      </div>
    </div>
  );
}
export default Header;
