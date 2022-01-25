import React from "react";
import "../styles/Domain.scss";
import { useState } from "react";
import WalletTwo from "../views/walletTwo";
function Domain(props: any) {
  const [defiClicked, setDefiClicked] = useState(false);

  return (
    <>
      <div className="Domain" onClick={props.onClick}>
        <>
          <img src={props.source} alt="logo" />
          <div className="data">
            <h5 className="Heading">{props.heading}</h5>
            <h5 className="SwapHeading">{props.SwapHeading}</h5>
            <h5 className="ColouredInfo">{props.ColouredInfo}</h5>
          </div>
          <div className="arrow">
            <img
              src="https://www.dropbox.com/s/kvtkc0edl3ibx72/Vector%20%287%29.png?raw=1"
              alt="arrow"
            />
          </div>
        </>
      </div>
    </>
  );
}
export default Domain;
