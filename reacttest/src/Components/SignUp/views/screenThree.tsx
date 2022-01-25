// declare module "*.png"

import React from "react";
import "../styles/screenThree.scss";
import Header from "../Header";
import Button from "../Button";
import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { bindActionCreators } from "redux";
// import { actioncreators, State } from "../../../State";

function ScreenThree({ increasePageCount }: any) {
  const [Name, Setname] = useState("");
  const [Email, Setemail] = useState("");
  const [Count, Setcount] = useState(0);
  // const dispatch = useDispatch();
  // const SignUp = bindActionCreators(actioncreators, dispatch);
  // const state = useSelector((state: State) => state.red);
  const handleInputChange = (e: any) => {
    Setemail(e.target.value);
    Setcount(2);
    if (e.target.value !== "" && Count === 2) {
      document
        .getElementsByClassName("button")?.[0]
        .classList.add("changedInputButton");
    } else {
      // remove class
    }
  };
  const HandleNameChange = (e: any) => {
    Setname(e.target.value);
    Setcount(1);
  };

  return (
    <>
      <Header data="Create NEAR account" logo={false} button={true} />
      <div className="screenThree">
        <p>
          Enter an Acooutn ID to iuse with youtr NEAR account. Your Account ID
          will be used for all NEAR operations, including sending and receiving
          assets
        </p>
        <form>
          <div className="Inner_part">
            <span className="Input_One">
              <label>Full Name</label>
              <input
                placeholder="Ex. John doe"
                className="Name_Data"
                value={Name}
                onChange={(e) => {
                  HandleNameChange(e);
                }}
              />
            </span>

            <span className="Input_Two">
              <label>
                Account ID{" "}
                <img
                  src="https://www.dropbox.com/s/gbkmp66utzlq3fp/Vector.png?raw=1"
                  alt="Exclamation Mark"
                />{" "}
              </label>
              <span>
                <input
                  placeholder="yourname"
                  className="Input_Data"
                  value={Email}
                  onChange={(e) => {
                    handleInputChange(e);
                  }}
                />
                <div>.near</div>
              </span>
            </span>
          </div>
          <Button
            color="rgb(191,190,194)"
            data="Continue >"
            type="submit"
            onClick={() => increasePageCount(4)}
            id="ConitnueButton"
          />
        </form>

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
