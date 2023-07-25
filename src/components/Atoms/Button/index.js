import React from "react";
import { THEME_CONFIG } from "../../configs";

function Button({ children, ...props }) {

  const color = localStorage.getItem('color')
  const fontFamily = localStorage.getItem('fontFamily');
  const buttonDiv = {
    width: "100%",
    height: "42px",
    flexShrink: "0",
    borderRadius: "11.56px",
    background: color,
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#472806",
    fontFamily: fontFamily,
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "normal",
    letterSpacing: "0.14px",
    marginTop: '1.5rem',
    marginBottom: '1rem'
  };
  return (
    <>
      <div style={buttonDiv} {...props}>
        {children}
      </div>
    </>
  );
}

export default Button;
