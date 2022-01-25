// declare module "*.png"

import React from "react";
import "../styles/screenThree.scss";
import Header from "../Header";
import { useState } from "react";
import Button from "../Button";
function ScreenThree({ increasePageCount }: any) {
  return (
    <>
      <Header data="Create NEAR account" logo={false} button={true} />
      <div className="screenThree">
        <p>
          Enter an Acooutn ID to iuse with youtr NEAR account. Your Account ID
          will be used for all NEAR operations, including sending and receiving
          assets
        </p>
        <div className="Inner_part">
          <span className="Input_One">
            <label>Full Name</label>
            <input placeholder="Ex. John doe" className="Name_Data" />
          </span>

          <span className="Input_Two">
            <label>
              Account ID{" "}
              <img src="https://www.dropbox.com/s/gbkmp66utzlq3fp/Vector.png?raw=1" />{" "}
            </label>
            <span>
              <input placeholder="yourname" className="Input_Data" />
              <div>.near</div>
            </span>
          </span>
        </div>
        <Button
          color="rgb(191,190,194)"
          data="Continue >"
          onClick={() => increasePageCount(3)}
        />
        <div style={{ display: "grid" }}>
          <p style={{ fontSize: "12px", color: "#6F6E73" }}>
            by clicking continue you must agree to near labs
            <br />{" "}
            <span style={{ color: "rgb(19,147,230)" }}>
              Terms & Conditions{" "}
            </span>
            and <span style={{ color: "rgb(19,147,230)" }}>Privacy Policy</span>
          </p>
          <hr style={{ width: "100%", border: " 0.1px solid #DFDFE0" }} />
          <p style={{ fontSize: "14px", color: "#414047" }}>
            Already have NEAR Account?
          </p>
          <Button color="#414047" data="Log in with NEAR >" />
        </div>
      </div>
    </>
  );
}

export default ScreenThree;
