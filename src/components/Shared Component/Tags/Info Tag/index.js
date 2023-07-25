import React from "react";

function Tag() {
  const fontFamily = localStorage.getItem('fontfamily');
  const tag = {
    height: "35px",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: "8px",
    background: "#F6EED8",
  };

  const tagContent = {
    color: "#472806",
    textAlign: "center",
    fontFamily: fontFamily,
    fontSize: "10px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    letterSpacing: "0.1px",
  };
  return (
    <>
      <div style={tag}>
        <span style={tagContent}>More than 200+ People have used our services and loved it.</span>
      </div>
    </>
  );
}

export default Tag;
