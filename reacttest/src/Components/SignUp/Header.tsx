import React from "react";
import "./styles/Header.scss";
function Header(props: any) {
  return (
    <div className="Header">
      {props.data != null ? props.data : " "}
      {props.img != null ? props.img : " "}
    </div>
  );
}
export default Header;
