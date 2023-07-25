import React from "react";

function Messages({ infoMsg, infoMsgColor, paragraph }) {
  const fontFamily = localStorage.getItem('fontfamily')
  const infoMessage = {
    color: infoMsgColor,
    fontFamily: fontFamily,
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "normal",
    letterSpacing: " 0.2px",
    paddingBottom: '12px'
  };
  const greetingContent = {
    width: "255px",
    height: "30px",
    flexShrink: "0",
    textAlign: "start",
    color: "#000",
    fontFamily: fontFamily,
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "normal",
    letterSpacing: "0.2px",
  };

  const paragraphContent = {
    width: "309px",
    height: "18px",
    flexShrink: "0",
    color: " #000",
    fontFamily: fontFamily,
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
    letterSpacing: "0.14px",
  };

  const user_name = localStorage.getItem("user_name");
  return (
    <>
      <div className="greetingContainer">
        <div style={infoMessage}>{infoMsg}</div>
        <div style={greetingContent}>Hello {user_name || "there"}!</div>
        <div style={paragraphContent}>{paragraph}</div>
      </div>
    </>
  );
}

export default Messages;
