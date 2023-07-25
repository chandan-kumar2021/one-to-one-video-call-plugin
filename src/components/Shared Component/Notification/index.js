import React from "react";
import notificationImg from "../../../assets/image/notification-icon.png";

function Notification() {
  const fontFamily = localStorage.getItem('fontfamily');
  
  const notificationMsgContainer = {
    display: "flex",
    gap: "5px",
  };
  const notification = {
    width: "16px",
    height: "16px",
    flexShrink: "0",
    background: `url(${notificationImg})`,
  };
  const notificationMsg = {
    color: "#472806",
    fontFamily: fontFamily,
    fontSize: "11px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
    letterSpacing: "0.11px",
  };
  return (
    <>
      <div style={notificationMsgContainer}>
        <div style={notification}></div>
        <span style={notificationMsg}>
          Your video will NOT be switched on during the call, without your
          approval.
        </span>
      </div>
    </>
  );
}

export default Notification;
