import React from "react";

function ErrorTag({ children }) {
  const fontFamily = localStorage.getItem('fontfamily');

  const tag = {
    height: "35px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "8px",
    background: "#FFBABA",
    marginBottom: "10px",
  };

  const tagContent = {
    color: "#CD0000",
    textAlign: "center",
    fontFamily: fontFamily,
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",
    letterSpacing: "0.14px",
  };
  return (
    <>
      <div style={tag}>
        <span style={tagContent}>
          <div>{children}</div>
        </span>
      </div>
    </>
  );
}

export default ErrorTag;
