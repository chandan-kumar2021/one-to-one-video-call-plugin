import React from "react";

function SuccessTag({children}) {

  const fontFamily = localStorage.getItem('fontfamily');

  const tag = {
    height: "35px",
    display: "flex",
    justifyContent: "center",
    columnGap: '8px',
    alignItems: "center",
    borderRadius: "8px",
    background: "#D0F0D1",
  };

  const tagContent = {
    color: "#013F13",
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="15"
          viewBox="0 0 14 15"
          fill="none"
        >
          <path
            d="M13.2497 7.98735C12.7497 10.4874 10.8647 12.8414 8.21974 13.3674C6.92973 13.6243 5.59155 13.4676 4.39574 12.9197C3.19993 12.3719 2.20746 11.4607 1.55963 10.3159C0.911805 9.17119 0.641655 7.85124 0.787646 6.54402C0.933638 5.23681 1.48833 4.00898 2.37274 3.03535C4.18674 1.03735 7.24974 0.48735 9.74974 1.48735"
            stroke="#013F13"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.74976 6.98828L7.24976 9.48828L13.2498 2.98828"
            stroke="#013F13"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <div style={tagContent}>
          {children}
        </div>
      </div>
    </>
  );
}

export default SuccessTag;
