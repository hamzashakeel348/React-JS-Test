// declare module "*.png"

import React, { useEffect } from "react";
import { useState } from "react";
import "../styles/screenOne.scss";
import Header from "../Header";
import Button from "../Button";

function ScreenOne({ increasePageCount }: any) {
  const [Email, setEmail] = useState(true);
  const [nextPage, setNextPage] = useState(false);

  const handleOptionClick = () => {
    if (Email) {
      document.getElementById("phoneButton")?.classList.add("ButtonChecked");
      document.getElementById("emailButton")?.classList.remove("ButtonChecked");
    } else {
      document.getElementById("emailButton")?.classList.add("ButtonChecked");
      document.getElementById("phoneButton")?.classList.remove("ButtonChecked");
    }
  };

  const handleInputChange = (e: any) => {
    if (e.target.value !== "") {
      // add class
      document
        .getElementsByClassName("inputData")?.[0]
        .classList.add("changedInput");
      document
        .getElementsByClassName("button")?.[0]
        .classList.add("changedInputButton");
      setNextPage(true);
    } else {
      // remove class
      setNextPage(false);
    }
  };

  useEffect(() => handleOptionClick, [Email]);

  useEffect(
    () =>
      document.getElementById("emailButton")?.classList.add("ButtonChecked"),
    []
  );

  return (
    <>
      <Header data="" logo="true" />
      <div className="screenOne">
        <div>
          <div style={{ marginBottom: "1em" }}>
            <button
              onClick={() => {
                setEmail(true);
              }}
              style={{
                marginLeft: "5px",
                color: "#6F6E73",
                border: "none",
                background: "transparent",
              }}
              id="emailButton"
            >
              {" "}
              Email
            </button>
            <button
              onClick={() => {
                setEmail(false);
              }}
              style={{
                background: "transparent",
                marginLeft: "5px",
                color: "#6F6E73",
                border: "none",
              }}
              id="phoneButton"
            >
              {" "}
              Phone
            </button>
          </div>
          {Email ? (
            <input
              placeholder="johndoe@gmail.com"
              className="inputData"
              onChange={(e) => handleInputChange(e)}
            />
          ) : (
            <input
              placeholder="Ex (337) 338 8383"
              className="inputData"
              onChange={(e) => handleInputChange(e)}
            />
          )}
        </div>
        <br />
        <Button
          color="#BEBEC2"
          data="Continue >"
          onClick={() => nextPage && increasePageCount(2)}
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
        </div>
        <p style={{ fontSize: "14px", color: "#414047" }}>
          Already have NEAR Account?
        </p>
        <Button color="#414047" data="Log in with NEAR >" />
      </div>
    </>
  );
}

export default ScreenOne;
