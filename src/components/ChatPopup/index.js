import React, { useState, useEffect } from "react";
import DetailsForm from "../DetailsForm/DetailsForm";
import ScheduleCallDetails from "../ScheduleCallDetails/ScheduleCallDetails";
import JoinCall from "../JoinCall/JoinCall";
import Messages from "../Shared Component/Message";
import Room from "../Room";

function ChatPopup({ onCloseClicked }) {

  const backgroundImage = localStorage.getItem('backgroundImage');
  const brandLogo = localStorage.getItem('brandLogo');
  const wrapper = {
    position: "fixed",
    bottom: "10px",
    right: "20px",
    zIndex: "999999",
    minWidth: "320px",
    borderRadius: "4px",
    backgroundColor: "#fff",
    boxShadow: " 0 0 5px #00000026",
    minHeight: "460px",
    maxWidth: "330px",
    maxHeight: "800",
    display: "flex",
    flexDirection: "column",
  };
  const headerContainer = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 16px",
  };
  const bodyContainer = {
    padding: "0px 16px 15px",
    display: "flex",
    flexDirection: "column",
    flex: "1",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const posterContainer = {
    width: "100%",
    maxHeight: "196px",
    flexShrink: "0",
    overflow: 'hidden',
    textAlign: 'center',
    borderRadius: '8px'
  };

  const posterImage = {
    maxWidth: '100%',
    maxHeight: 'auto',
    display: 'block'
  }

  const [detailsFormComponent, setDetailsFormComponet] = useState(false);
  const [joinCallComponent, setJoinCallComponent] = useState(false);
  const [scheduleCallComponent, setScheduleCallComponent] = useState(false);
  const [infoMsg, setInfoMsg] = useState("");
  const [infoMsgColor, setInfoMsgColor] = useState("#B56E23");
  const [paragraph, setParagraph] = useState(
    "We're here to assist you! Please fill in your details."
  );
  
  const onKeyPresent = () => {
    setParagraph("The product expert will be with you shortly.");
    setInfoMsg("Expert Shortly Available");
    setDetailsFormComponet(false);
    setJoinCallComponent(true);
    setTimeout(() => {
      setParagraph(
        "Sorry! The product expert is unavailable at the moment, please schedule a call for later"
      );
      setInfoMsg("Expert Unavailable");
      setInfoMsgColor("#CD0000");
      setJoinCallComponent(false);
      setScheduleCallComponent(true);
    }, 60000);
  };

  const onSubmituserDetails = () => {
    setDetailsFormComponet(false);
    setJoinCallComponent(true);
    setTimeout(() => {
      setParagraph(
        "Sorry! The product expert is unavailable at the moment, please schedule a call for later"
      );
      setInfoMsg("Expert Unavailable");
      setInfoMsgColor("#CD0000");
      setJoinCallComponent(false);
      setScheduleCallComponent(true);
    }, 60000);
  };

  useEffect(() => {

  }, []);


  return (
    <>
      <div style={wrapper}>
        <div style={headerContainer}>
          <div>
            <img
              src={brandLogo}
              height={30}
              alt="Poster"
            />
          </div>
          <svg
            onClick={() => {
              onCloseClicked();
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <path
              d="M7.04004 17.4993L12.4567 12.0827L17.8734 17.4993M17.8734 6.66602L12.4557 12.0827L7.04004 6.66602"
              stroke="#4A4B4B"
              strokeOpacity="0.3"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div style={bodyContainer}>
          {/* Greeting Container */}

          <Messages
            infoMsg={infoMsg}
            infoMsgColor={infoMsgColor}
            paragraph={paragraph}
          />

          {/* Image Container */}

          <div style={{ marginTop: "35px" }} className="posterContainer">
            <div style={posterContainer}>
              <img style={posterImage} src={backgroundImage}/>

            </div>
            {/* <div style={poster}></div> */}
          </div>
          <div style={{ marginTop: "35px", width: "100%" }}>
            {!detailsFormComponent &&
            !joinCallComponent &&
            !scheduleCallComponent ? (
              <DetailsForm
                onSubmitDetails={onSubmituserDetails}
                onKeyPresent={onKeyPresent}
              />
            ) : !detailsFormComponent &&
              joinCallComponent &&
              !scheduleCallComponent ? (
              <JoinCall />
            ) : !detailsFormComponent &&
              !joinCallComponent &&
              scheduleCallComponent ? (
              <ScheduleCallDetails />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatPopup;
