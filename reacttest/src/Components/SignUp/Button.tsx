import React from "react";

function Button(props: any) {
  return (
    <button
      className="button"
      onClick={props.onClick}
      style={{
        backgroundColor: props.color,
        padding: "10px 10px 10px 20px",
        borderRadius: "10px",
        color: "white",
        border: "none",
        fontSize: "16px",
      }}
    >
      {props.data}
    </button>
  );
}
export default Button;
