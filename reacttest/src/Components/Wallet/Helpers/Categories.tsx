import React from "react";
import "../styles/Category.scss";
function Category(props: any) {
  return (
    <div className="Category" style={{ backgroundColor: props.color }}>
      <div>
        <img src={props.source} alt="logo" />
      </div>
      <div className="SectionTwo">
        <h5>{props.data}</h5>
        <img
          src="https://www.dropbox.com/s/kvtkc0edl3ibx72/Vector%20%287%29.png?raw=1"
          alt="arrow"
        />
      </div>
    </div>
  );
}
export default Category;
