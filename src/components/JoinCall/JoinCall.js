import React from "react";
import Button from "../Atoms/Button";
import Notification from "../Shared Component/Notification";
import Tag from "../Shared Component/Tags/Info Tag";

function JoinCall() {

  const fontFamily = localStorage.getItem('fontFamily');
  const agentInfoContainer = {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    columnGap: "18px",
  };
  const avatarContainer = {
    verticalAlign: "middle",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: "#D9D9D9",
  };

  const agentName = {
    color: "#000",
    fontFamily: fontFamily,
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
    letterSpacing: "0.16px",
  };

  const agentProfession = {
    color: "#989898",
    fontFamily: fontFamily,
    fontSize: "13px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
    letterSpacing: "0.13px",
  };
  const agentJoinTimeParagraph = {
    color: "#000",
    fontFamily: fontFamily,
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
    letterSpacing: "0.12px",
  };

  const agentJoinTimeContainer = {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "14px 0 35px 0",
  };

  // const live = {
  //   color: "#F00",
  //   textAlign: "center",
  //   fontFamily: "Lato, sans-serif",
  //   fontSize: "7px",
  //   fontStyle: "normal",
  //   fontWeight: "600",
  //   lineHeight: "normal",
  //   letterSpacing: " 0.07px",
  // };

  return (
    <>
      <div className="joinCallContainer">
        {/* style={{ marginTop: "30px" }} */}
        <div style={agentInfoContainer}>
          <div style={avatarContainer}>
            <img
              src={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="46"
                  height="46"
                  viewBox="0 0 46 46"
                  fill="none"
                >
                  <circle cx="23" cy="23" r="23" fill="#D9D9D9" />
                </svg>
              }
              alt=""
              class="avatar"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                borderRadius: "50%",
              }}
            />
          </div>
          <div>
            <div style={agentName}>Mr. Awasthi</div>
            <div style={agentProfession}>Product Expert</div>
          </div>
        </div>

        {/* Agent Join Time Notification */}

        <div style={agentJoinTimeContainer}>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
            >
              <g clipPath="url(#clip0_316_986)">
                <path
                  d="M16.9167 18.666H15.1667V14.5302C15.1646 13.9257 15.0218 13.3299 14.7494 12.7902C14.477 12.2505 14.0826 11.7817 13.5975 11.421L12.8508 10.8377C12.6615 10.7065 12.4603 10.5932 12.25 10.4993C12.4553 10.3973 12.6506 10.2762 12.8333 10.1377L13.58 9.55435C14.0652 9.19783 14.461 8.73357 14.7364 8.1981C15.0117 7.66263 15.159 7.07057 15.1667 6.46852V2.33268H16.9167C17.0714 2.33268 17.2197 2.27122 17.3291 2.16183C17.4385 2.05243 17.5 1.90406 17.5 1.74935C17.5 1.59464 17.4385 1.44627 17.3291 1.33687C17.2197 1.22747 17.0714 1.16602 16.9167 1.16602H4.08333C3.92862 1.16602 3.78025 1.22747 3.67085 1.33687C3.56146 1.44627 3.5 1.59464 3.5 1.74935C3.5 1.90406 3.56146 2.05243 3.67085 2.16183C3.78025 2.27122 3.92862 2.33268 4.08333 2.33268H5.83333V6.46852C5.83537 7.07304 5.97824 7.66878 6.25062 8.20847C6.523 8.74816 6.91738 9.21696 7.4025 9.57768L8.14917 10.161C8.33851 10.2922 8.53965 10.4055 8.75 10.4993C8.54465 10.6014 8.34934 10.7224 8.16667 10.861L7.42 11.4444C6.9348 11.8009 6.53895 12.2651 6.26363 12.8006C5.9883 13.3361 5.84101 13.9281 5.83333 14.5302V18.666H4.08333C3.92862 18.666 3.78025 18.7275 3.67085 18.8369C3.56146 18.9463 3.5 19.0946 3.5 19.2493C3.5 19.4041 3.56146 19.5524 3.67085 19.6618C3.78025 19.7712 3.92862 19.8327 4.08333 19.8327H16.9167C17.0714 19.8327 17.2197 19.7712 17.3291 19.6618C17.4385 19.5524 17.5 19.4041 17.5 19.2493C17.5 19.0946 17.4385 18.9463 17.3291 18.8369C17.2197 18.7275 17.0714 18.666 16.9167 18.666ZM7 14.5302C7.00181 14.1082 7.10185 13.6924 7.2922 13.3157C7.48254 12.9391 7.75797 12.6119 8.09667 12.3602L8.84333 11.7768C9.05391 11.6219 9.28574 11.4981 9.53167 11.4093C9.64332 11.3676 9.73951 11.2927 9.8073 11.1947C9.87509 11.0967 9.91122 10.9802 9.91083 10.861V10.1085C9.91122 9.98933 9.87509 9.87288 9.8073 9.77485C9.73951 9.67681 9.64332 9.6019 9.53167 9.56018C9.28374 9.47186 9.04992 9.34807 8.8375 9.19268L8.09083 8.60935C7.75711 8.35996 7.48519 8.0372 7.29604 7.666C7.1069 7.2948 7.00561 6.88509 7 6.46852V2.33268H14V6.46852C13.9982 6.89052 13.8982 7.30632 13.7078 7.68296C13.5175 8.05961 13.242 8.38676 12.9033 8.63852L12.1567 9.22185C11.9461 9.37681 11.7143 9.50059 11.4683 9.58935C11.3567 9.63107 11.2605 9.70598 11.1927 9.80401C11.1249 9.90205 11.0888 10.0185 11.0892 10.1377V10.9193C11.0888 11.0385 11.1249 11.155 11.1927 11.253C11.2605 11.3511 11.3567 11.426 11.4683 11.4677C11.7163 11.556 11.9501 11.6798 12.1625 11.8352L12.9092 12.4185C13.239 12.6649 13.5086 12.983 13.6976 13.3488C13.8866 13.7146 13.99 14.1186 14 14.5302V18.666H7V14.5302Z"
                  fill="black"
                />
                <path
                  d="M10 9C8 8.2 7.5 6.66667 7.5 6H13.5C13.5 8 11.8333 8.83333 11 9H10Z"
                  fill="#472806"
                />
              </g>
              <defs>
                <clipPath id="clip0_316_986">
                  <rect width="21" height="21" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div style={agentJoinTimeParagraph}>
            Mr. Awasthi will join you in 10 mins
          </div>
        </div>

        <Notification />

        <Button>
          <svg
            style={{ marginRight: "10px" }}
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="13"
            viewBox="0 0 18 13"
            fill="none"
          >
            <path
              d="M0.5 0C0.223858 0 0 0.223858 0 0.5V11.7727C0 12.0489 0.223858 12.2727 0.5 12.2727H13.6429C13.919 12.2727 14.1429 12.0489 14.1429 11.7727V10.5642C14.1429 10.1761 14.5656 9.936 14.8989 10.1347L17.0762 11.4328L17.2434 11.5328C17.5767 11.732 18 11.4919 18 11.1036V1.16878C18 0.780562 17.5768 0.540444 17.2436 0.739551L17.0756 0.839915L14.8989 2.13738C14.5656 2.33604 14.1429 2.09589 14.1429 1.70789V0.5C14.1429 0.223857 13.919 0 13.6429 0H0.5ZM1.28571 2.03409C1.28571 1.75795 1.50957 1.53409 1.78571 1.53409H12.3571C12.6333 1.53409 12.8571 1.75795 12.8571 2.03409V10.2386C12.8571 10.5148 12.6333 10.7386 12.3571 10.7386H1.78571C1.50957 10.7386 1.28571 10.5148 1.28571 10.2386V2.03409ZM15.9581 3.23166C16.2914 3.03283 16.7143 3.27297 16.7143 3.66106V8.61167C16.7143 8.99976 16.2914 9.2399 15.9581 9.04106L14.3867 8.10356C14.2355 8.01335 14.1429 7.85025 14.1429 7.67417V4.59856C14.1429 4.42248 14.2355 4.25938 14.3867 4.16916L15.9581 3.23166Z"
              fill="#EB0000"
            />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="6"
              viewBox="0 0 6 6"
              fill="none"
              x="4"
              y="3"
            >
              <circle cx="3" cy="3" r="3" fill="#FF0000" />
            </svg>
          </svg>
          {/* <span style={live}>LIVE</span> */}
          Join Call
        </Button>
        <Tag />
      </div>
    </>
  );
}

export default JoinCall;
