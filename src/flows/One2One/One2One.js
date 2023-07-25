import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import ChatPopup from "../../components/ChatPopup";
import style from './style.module.css'
import { getCompanyInfo } from "../../api";
import { THEME_CONFIG } from "../../components/configs";


function One2One() {
 
useEffect(() =>{

}, [])


  const shopButtonDiv = {
    display: "flex",
    justifyContent: "center",
    width: "399px",
    height: "53px",
    flexShrink: "0",
    borderRadius: "5.56px",
    border: "2px solid #FBE505",
    background: "#FFF",
    boxShadow: "1px 2px 10px 0px rgba(0, 0, 0, 0.15)",
    transition: "background-color 0.3s ease",
    cursor: "pointer",

  };
  const contentContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const live = {
    color: "#F00",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "normal",
  };
  const demo = {
    color: "#000",
    textAlign: "center",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "normal",
    marginLeft: '8px'
  };

  const [showPopup, setShowPopup] = useState(false);

  const onOpenModal = () => {
    setShowPopup(true);
  };


  return (
    <>
      <div className={style.shopButton} style={shopButtonDiv} onClick={onOpenModal}>
        <div style={contentContainer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="15"
            viewBox="0 0 26 15"
            fill="none"
          >
            <path
              d="M0.499999 0C0.223857 0 0 0.223858 0 0.5V14.5C0 14.7761 0.223858 15 0.5 15H19.54C19.8162 15 20.04 14.7761 20.04 14.5V12.6553C20.04 12.2811 20.4359 12.0395 20.7687 12.2107L24.1965 13.9734L24.7763 14.2724C25.1091 14.444 25.5055 14.2025 25.5055 13.828V1.1717C25.5055 0.797345 25.1092 0.555762 24.7765 0.727242L24.1956 1.02656L20.7687 2.78851C20.4359 2.95959 20.04 2.71799 20.04 2.34384V0.5C20.04 0.223858 19.8162 0 19.54 0H0.499999ZM1.82182 2.375C1.82182 2.09886 2.04568 1.875 2.32182 1.875H17.7182C17.9944 1.875 18.2182 2.09886 18.2182 2.375V12.625C18.2182 12.9011 17.9944 13.125 17.7182 13.125H2.32182C2.04568 13.125 1.82182 12.9011 1.82182 12.625V2.375ZM22.9549 3.77347C23.2876 3.60223 23.6837 3.84382 23.6837 4.21805V10.7819C23.6837 11.1562 23.2876 11.3978 22.9549 11.2265L20.3112 9.86613C20.1447 9.78043 20.04 9.60884 20.04 9.42154V5.57846C20.04 5.39116 20.1447 5.21957 20.3112 5.13387L22.9549 3.77347Z"
              fill="#FF0000"
            />
              <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="6"
              viewBox="0 0 6 6"
              fill="none"
              x="7"
              y="4"
            >
              <circle cx="3" cy="3" r="3" fill="#FF0000" />
            </svg>
          </svg>
          <div style={{ marginLeft: "8px" }}>
            <span style={live}>LIVE</span>
            <span style={demo}>DEMO</span>
          </div>
        </div>
      </div>
      {showPopup &&
        createPortal(
          <ChatPopup onCloseClicked={() => setShowPopup(false)} />,
          document.body
        )}
    </>
  );
}

export default One2One;
