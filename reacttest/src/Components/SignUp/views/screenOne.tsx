import React from "react";
import "../styles/screenOne.scss";
import Header from "../Header";
function ScreenOne() {
  return (
    <>
      <Header
        data={
          <p>
            <span>Home</span>
            Page
          </p>
        }
        img="Hamza"
      />
      <h1>ScreenOne</h1>
    </>
  );
}

export default ScreenOne;
