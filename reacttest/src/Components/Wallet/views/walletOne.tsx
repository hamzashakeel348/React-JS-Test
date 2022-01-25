import React from "react";
import "../styles/walletOne.scss";
import Domain from "../Helpers/Domain";
import Category from "../Helpers/Categories";
import { useState } from "react";

function WalletOne() {
  return (
    <div className="WalletOne">
      <div id="Section1">
        <div id="button-holder">
          <img src="https://www.dropbox.com/s/qnmnwywqi4y7tac/Vector%20%285%29.png?raw=1" />
        </div>
        <input
          type="text"
          placeholder="Search experiences"
          id="search-text-input"
        />
        <div className="FunnelImage">
          <img
            src="https://www.dropbox.com/s/8asfupzhnze3tje/Vector%20%286%29.png?raw=1"
            alt="FunnelImage"
          />
          <img
            src="https://www.dropbox.com/s/gsq1ly6jphjn7ph/Vector%20%284%29.png?raw=1"
            alt="FunnelImage"
          />
        </div>
      </div>
      <div className="Section2">
        <h1>Recent Experiences</h1>
        <Domain
          source="https://www.dropbox.com/s/v5vv3yk44ugqzbe/logo.png?raw=1"
          heading="DeFi Swap"
          SwapHeading="Swap your digital assets"
          ColouredInfo="+200 users"
          color="#ffffff"
        />
        <br />
        <Domain
          source="https://www.dropbox.com/s/gz7cx0n1ugfianw/Group%2056.png?raw=1"
          heading="Docu sign"
          SwapHeading="sign smart contracts seamlessly"
          ColouredInfo="+1K users"
          color="#E5D0FF"
        />
      </div>
      <div className="Section2">
        <span className="Headings">
          <h1>Popular Categories</h1>
          <span className="SubHeading">
            <h2>See All</h2>
            <img
              src="https://www.dropbox.com/s/kvtkc0edl3ibx72/Vector%20%287%29.png?raw=1"
              alt="arrow"
            />
          </span>
        </span>
        <div className="First">
          <Category
            color="#eaefff"
            data="Exchanges"
            source="https://www.dropbox.com/s/ikp8j29w7q0akcj/Group%20480.png?raw=1"
          />
          <span className="Outer">
            <Category
              source="https://www.dropbox.com/s/pip2sbg7n1xq22i/Group%20480-4.png?raw=1"
              data="Games"
              color="#F5F5F5"
            />
          </span>
        </div>
        <div className="First">
          <Category
            color="#E2F9F3"
            data="MarketPlaces"
            source="https://www.dropbox.com/s/wigq9ee3vqsykjv/Group%20480-2.png?raw=1"
          />
          <span className="Outer">
            <Category
              source="https://www.dropbox.com/s/32jfc7g16gkf2mx/Group%20480-3.png?raw=1"
              data="Defi"
              color="#FFF3EC"
            />
          </span>
        </div>
      </div>
    </div>
  );
}
export default WalletOne;
