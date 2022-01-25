import React from "react";
import "../styles/WalletTwo.scss";
import { useState, useEffect } from "react";

function WalletTwo(props: any) {
  const [Details, setDetails] = useState(true);
  const HandleInputChange = () => {
    var x = document.getElementById("DetailsButton");
    var y = document.getElementById("ActivityButton");
    if (!Details) {
      x?.classList.add("ActiveButton");
      y?.classList.remove("ActiveButton");
    } else {
      x?.classList.remove("ActiveButton");
      y?.classList.add("ActiveButton");
    }
  };
  useEffect(() => HandleInputChange, [Details]);

  return (
    <>
      <div className="Main" style={{ backgroundColor: props.color }}>
        <img
          src="https://www.dropbox.com/s/v5vv3yk44ugqzbe/logo.png?raw=1"
          alt="MainImage"
        />
      </div>
      <div className="WalletTwo">
        <div className="data">
          <h2 className="Heading">Docu sign</h2>
          <h5 className="SwapHeading">sing smart contract seamlessly</h5>
          <h5 className="ColouredInfo">Utilities</h5>
        </div>
        <div className="Section_Two">
          <button>
            Open{" "}
            <img
              src="https://www.dropbox.com/s/4znmir1tukdrrvz/send.png?raw=1"
              alt="Arrow"
            />
          </button>
          <span className="innersection">
            <img
              src="https://www.dropbox.com/s/f5noz8jlzhvv9yv/Frame.png?raw=1"
              alt="frame"
            />
            <p>24,000+ users</p>
          </span>
        </div>
        <div className="BottomSection">
          <div>
            <button
              className=" ActiveButton NonactiveButton "
              onClick={() => {
                setDetails(true);
              }}
              id="DetailsButton"
            >
              Details
            </button>{" "}
            <button
              className="NonactiveButton"
              onClick={() => {
                setDetails(false);
              }}
              id="ActivityButton"
            >
              Activites
            </button>
          </div>

          {Details ? (
            <div className="Details">
              {" "}
              <h1>Overview</h1>
              <p>
                it is easy to electronically sign, manage and distribute all
                your contracts and documents safely, securely, anywhere,
                anytime- paperlessly.{" "}
              </p>
              <span>
                <img
                  alt="OverviewFigure"
                  src="https://www.dropbox.com/s/847t71n3ph7mtu6/Frame%20%281%29.png?raw=1"
                />
                https://docusignn.io
              </span>
            </div>
          ) : (
            <div className="Details">
              <h1>Activities</h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default WalletTwo;
