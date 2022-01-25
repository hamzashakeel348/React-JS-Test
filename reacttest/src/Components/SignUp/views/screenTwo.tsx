// declare module "*.png"

import React from "react";
import "../styles/screenTwo.scss";
import Header from "../Header";
import { useState } from "react";
import Button from "../Button";
function ScreenTwo({ increasePageCount }: any) {
  const [currentInput, setCurrentInput] = useState(1);

  const handleInputChange = (num: number) => {
    if (num < 6) {
      document.getElementById(`input_${num + 1}`)?.focus();
      setCurrentInput(num + 1);
    }
    if (currentInput === 6) increasePageCount(3);
  };

  const move_focus_to_first = () => {
    document.getElementById(`input_1`)?.focus();
  };

  return (
    <>
      <Header data="Verification" logo={false} button={true} />
      <div className="screenTwo">
        <div>
          <p>We've sent a 6-digit verification code to the email address</p>
          <p style={{ color: "rgb(19,147,230)" }}>johndoe@gmail.com</p>
          <p>Enter verification code</p>
          <div className="all_inputs">
            <input
              type="text"
              id="input_1"
              maxLength={1}
              onClick={() => move_focus_to_first()}
              onChange={() => handleInputChange(1)}
            />
            <input
              type="text"
              id="input_2"
              maxLength={1}
              onClick={() => move_focus_to_first()}
              onChange={() => handleInputChange(2)}
            />
            <input
              type="text"
              id="input_3"
              maxLength={1}
              onClick={() => move_focus_to_first()}
              onChange={() => handleInputChange(3)}
            />
            <input
              type="text"
              id="input_4"
              maxLength={1}
              onClick={() => move_focus_to_first()}
              onChange={() => handleInputChange(4)}
            />
            <input
              type="text"
              id="input_5"
              maxLength={1}
              onClick={() => move_focus_to_first()}
              onChange={() => handleInputChange(5)}
            />
            <input
              type="text"
              id="input_6"
              maxLength={1}
              onClick={() => move_focus_to_first()}
              onChange={() => handleInputChange(6)}
            />
          </div>

          <Button
            color="#BEBEC2"
            data="Continue >"
            onClick={() => increasePageCount(3)}
          />
        </div>
        <hr style={{ width: "100%", border: " 0.1px solid #DFDFE0" }} />
        <div style={{ display: "grid" }}>
          <p style={{ fontSize: "12px", color: "#6F6E73" }}>
            Didn't recieve your code?
          </p>
          <p style={{ color: "rgb(19,147,230)" }}>
            {" "}
            Send to a different email address
          </p>
          <p style={{ color: "rgb(19,147,230)" }}>Resend your code</p>
        </div>
      </div>
    </>
  );
}

export default ScreenTwo;
