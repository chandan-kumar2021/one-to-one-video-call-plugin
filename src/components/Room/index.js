// import React, {useEffect} from "react";
// import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
// import { generateToken } from "../../api";

// function Room() {
//   const applyCSSToZegocloudCalss = () => {
//     setTimeout((el) => {
//       let s1 = document.getElementsByClassName("QeMJj1LEulq1ApqLHxuM")[0];
//       if (s1) {
//         s1.style.display = "block";
//       }
//     }, 100);
//     setTimeout((el) => {
//       let s2 = document.getElementsByClassName("QYvze2FiFrLlotTk5Iz7")[0];
//       if (s2) {
//         s2.style.display = "block";
//       }
//     }, 100);
//     setTimeout((el) => {
//       let s3 = document.getElementsByClassName("Wlqv8YhEAE9OzBkKuKjg")[0];
//       if (s3) {
//         s3.style.display = "block";
//       }
//     }, 100);
//     setTimeout((el) => {
//       let s4 = document.getElementsByClassName("UbpDhvufmId2nxL2l5gC")[0];
//       if (s4) {
//         s4.style.display = "block";
//       }
//     }, 100);
//     setTimeout((el) => {
//       let s5 = document.getElementsByClassName("QbarJSxzhe6iPp6VdlAs")[0];
//       if (s5) {
//         s5.style.display = "block";
//       }
//     }, 100);
//     setTimeout((el) => {
//       let s6 = document.getElementsByClassName("aUBcrib1jsrHTK9vhlVZ")[0];
//       if (s6) {
//         s6.style.display = "block";
//       }
//     }, 100);
//     setTimeout((el) => {
//       let c1 = document.getElementsByClassName(
//         "sCsSbKP9yxvw4LQAeaTz zego_model_parent"
//       )[0];
//       if (c1) {
//         c1.style.display = "contents";
//       }
//     }, 100);
//     setTimeout((el) => {
//       let c2 = document.getElementsByClassName("ji5jASszKFf2CGCmbxEh")[0];
//       if (c2) {
//         c2.style.display = "contents";
//       }
//     }, 100);
//     setTimeout((el) => {
//       let c3 = document.getElementsByClassName("QAHxuJxRZWb3P_cbR8QA")[0];
//       if (c3) {
//         c3.style.height = "60vh";
//       }
//     }, 100);
//     setTimeout((el) => {
//       let c4 = document.getElementById("lv_room");
//       if (c4) {
//         c4.style.height = "";
//       }
//     }, 100);
//     setTimeout((el) => {
//       let c5 = document.getElementsByClassName(
//         "Xfk1RtGH65gHx0iQ5uPA C7PnSkxqD6bOXhZlRlcc"
//       )[0];
//       if (c5) {
//         c5.style.position = "absolute";
//       }
//     }, 100);

//     setTimeout((el) => {
//       let c5 = document.getElementsByClassName(
//         "Xfk1RtGH65gHx0iQ5uPA C7PnSkxqD6bOXhZlRlcc"
//       )[0];
//       if (c5) {
//         c5.style.top = "382px";
//       }
//     }, 100);
//     setTimeout((el) => {
//       let c5 = document.getElementsByClassName(
//         "Xfk1RtGH65gHx0iQ5uPA C7PnSkxqD6bOXhZlRlcc"
//       )[0];
//       if (c5) {
//         c5.style.right = "3px";
//       }
//     }, 100);
//     setTimeout((el) => {
//       let c5 = document.getElementsByClassName(
//         "Xfk1RtGH65gHx0iQ5uPA C7PnSkxqD6bOXhZlRlcc"
//       )[0];
//       if (c5) {
//         c5.style.width = "254px";
//       }
//     }, 100);
//     setTimeout((el) => {
//       let c5 = document.getElementsByClassName(
//         "Xfk1RtGH65gHx0iQ5uPA C7PnSkxqD6bOXhZlRlcc"
//       )[0];
//       if (c5) {
//         c5.style.height = "157px";
//       }
//     }, 100);
//   };

//   const onAgentJoin = () => {
//     setTimeout((el) => {
//       let d1 = document.getElementsByClassName(
//         "z1WvYJgksHY23EwdFNB5   pVo6XoSfywa4eLk9ef2S"
//       )[0];
//       if (d1) {
//         d1.style.scale = "2";
//       }
//     }, 100);

//     setTimeout((el) => {
//       let d1 = document.getElementsByClassName(
//         "z1WvYJgksHY23EwdFNB5   pVo6XoSfywa4eLk9ef2S"
//       )[0];
//       if (d1) {
//         d1.style.marginTop = "-51px";
//       }
//     }, 100);

//     setTimeout((el) => {
//       let c5 = document.getElementsByClassName(
//         "Xfk1RtGH65gHx0iQ5uPA C7PnSkxqD6bOXhZlRlcc"
//       )[0];
//       if (c5) {
//         c5.style.position = "absolute";
//       }
//     }, 100);

//     setTimeout((el) => {
//       let c5 = document.getElementsByClassName(
//         "Xfk1RtGH65gHx0iQ5uPA C7PnSkxqD6bOXhZlRlcc"
//       )[0];
//       if (c5) {
//         c5.style.top = "382px";
//       }
//     }, 100);
//     setTimeout((el) => {
//       let c5 = document.getElementsByClassName(
//         "Xfk1RtGH65gHx0iQ5uPA C7PnSkxqD6bOXhZlRlcc"
//       )[0];
//       if (c5) {
//         c5.style.right = "3px";
//       }
//     }, 100);
//     setTimeout((el) => {
//       let c5 = document.getElementsByClassName(
//         "Xfk1RtGH65gHx0iQ5uPA C7PnSkxqD6bOXhZlRlcc"
//       )[0];
//       if (c5) {
//         c5.style.width = "144px";
//       }
//     }, 100);
//     setTimeout((el) => {
//       let c5 = document.getElementsByClassName(
//         "Xfk1RtGH65gHx0iQ5uPA C7PnSkxqD6bOXhZlRlcc"
//       )[0];
//       if (c5) {
//         c5.style.height = "85px";
//       }
//     }, 100);
//     setTimeout((el) => {
//       let c5 = document.getElementsByClassName(
//         "Xfk1RtGH65gHx0iQ5uPA C7PnSkxqD6bOXhZlRlcc"
//       )[0];
//       if (c5) {
//         c5.style.display = "none";
//       }
//     }, 100);

//     setTimeout((el) => {
//       let c5 = document.getElementsByClassName("R5UUhzsZdRHH4U5V6kon")[0];
//       if (c5) {
//         c5.style.height = "20px";
//       }
//     }, 100);

//     setTimeout((el) => {
//       let c5 = document.getElementsByClassName("M4HRY2n7rpNAd1UjDNZe")[0];
//       if (c5) {
//         c5.style.width = "100%";
//       }
//     }, 100);

//     setTimeout((el) => {
//       let c6 = document.getElementsByClassName("JtRS8dNV0vDLnpBoA6kZ")[0];
//       if (c6) {
//         c6.style.marginLeft = "40px";
//       }
//     }, 100);

//     setTimeout((el) => {
//       let c7 = document.getElementsByClassName("JtRS8dNV0vDLnpBoA6kZ")[0];
//       if (c7) {
//         c7.style.justifyContent = "start";
//       }
//     }, 100);
//   };

//   const myMeeting = async (element) => {
//     const tokenParam = {
//       userID: window.localStorage.getItem("uuid"),
//       userName: window.localStorage.getItem("userName"),
//       room_id: window.localStorage.getItem("room_id"),
//     };
//     console.log(tokenParam);

//     let roomToken = await generateToken(tokenParam);

//     console.log("first", roomToken);
//     roomToken = roomToken.data.token;
//     console.log("second", roomToken);

//     console.log("roon token", roomToken);
//     const kitToken = roomToken;
//     const zp = ZegoUIKitPrebuilt.create(kitToken);

//     zp.joinRoom({
//       container: element,
//       scenario: {
//         mode: ZegoUIKitPrebuilt.OneONoneCall,
//       },
//       onLeaveRoom: () => onVideoCallLeave(),
//       // onLeaveRoom: () => turnoffAll(),
//       onUserLeave: () => onVideoCallLeave(),
//       // onUserLeave: () => turnoffAll(),
//       onJoinRoom: () => applyCSSToZegocloudCalss(),
//       onUserJoin: () => onAgentJoin(),
//       // showTextChat: false,
//       showUserList: false,
//       showScreenSharingButton: false,
//       showAudioVideoSettingsButton: false,
//       showRoomDetailsButton: false,
//       turnOnCameraWhenJoining: false,
//       turnOnMicrophoneWhenJoining: false,
//       showLeavingView: false,
//       videoResolutionDefault: 720,
//     });

//     setTimeout((el) => {
//       let c1 = document.getElementsByClassName(
//         "zzHlKp_IVmgXBPV3Jv58 QajuHzlZleFtiTUp_E8u"
//       )[0];
//       if (c1) {
//         c1.style.minWidth = "288px";
//       }
//     }, 100);
//     setTimeout((el) => {
//       let c2 = document.getElementsByClassName("D9WLyEQaARfWqCTyVrpU")[0];
//       if (c2) {
//         c2.style.display = "contents";
//       }
//     }, 100);

//     setTimeout((el) => {
//       let c3 = document.getElementsByClassName("BYpXSnOHfrC2td4QRijO")[0];
//       if (c3) {
//         c3.style.height = "90%";
//       }
//     }, 100);
//     setTimeout((el) => {
//       let c4 = document.getElementsByClassName("b1CJxMvQdas9l4lGoyfA")[0];
//       if (c4) {
//         c4.style.marginTop = "6px";
//       }
//     }, 100);
//     setTimeout((el) => {
//       let c5 = document.getElementsByClassName("TYiiRFB3EhYJGVPE4k4q")[0];
//       if (c5) {
//         c5.style.marginTop = "-14px";
//       }
//     }, 100);
//   };
//   return <div id="lv_room" ref={myMeeting} style={{ height: "70vh" }}></div>;
// }

// export default Room;
