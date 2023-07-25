import React, { useState, useEffect, useRef } from "react";
import Button from "../Atoms/Button";
import Input from "../Atoms/Input";
import Select from "../Atoms/Select";
import Checkbox from "../Atoms/Checkbox";
import Tag from "../Shared Component/Tags/Info Tag";
import whatsappImg from "../../assets/image/whatsapp-icon.png";
import Notification from "../Shared Component/Notification";
import ErrorTag from "../Shared Component/Tags/Error Tag";
import { postUserInfo, getCountryCode } from "../../api";

function DetailsForm({ onSubmitDetails, onKeyPresent }) {
  const fontFamily = localStorage.getItem("fontFamily");
  const labelStyle = {
    color: "#000",
    fontFamily: fontFamily,
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
    letterSpacing: "0.14px",
    textAlign: "start",
  };

  const requiredSymbol = {
    color: "#EB5E5E",
    fontFamily: fontFamily,
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
    letterSpacing: "0.14px",
  };
  const checkBoxContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "5px",
    paddingBottom: "35px",
  };

  const whatsAppIcon = {
    width: "17px",
    height: "17px",
    flexShrink: 0,
    background: `url(${whatsappImg})`,
  };

  const whatsAppNotificationText = {
    color: "#000",
    fontFamily: fontFamily,
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
    letterSpacing: "0.12px",
  };

  const userName = useRef();
  const userMobileNo = useRef();
  const countryCode = useRef();
  const isWhatsAppSubScribed = useRef();

  const [errorMsg, setErrorMsg] = useState("");
  const [showInputFields, setShowInputFields] = useState(false);
  const [countryCodes, setCountryCodes] = useState([]);

  const getCountryCodeInfo = async () => {
    try {
      let response = await getCountryCode();
      console.log(response?.data?.data);
        setCountryCodes(response?.data?.data);
    } catch (error) {
      console.log("country code", error);
    }
  };

  const onSubmituserDetails = () => {
    if (!userName?.current.value) {
      setErrorMsg("Please enter your name.");
      return;
    } else if (!/^\d{10}$/.test(userMobileNo?.current?.value)) {
      setErrorMsg("Please enter valid mobile number");
      return;
    }
    setErrorMsg("");
    postUserDetails();
    onSubmitDetails();
    localStorage.setItem("screen", "1");
  };

  const postUserDetails = async () => {
    const data = {
      name: userName?.current?.value || "",
      mobile_no: userMobileNo?.current?.value || "",
      country_code: countryCode?.current?.value,
      is_whatsapp_subscribed: isWhatsAppSubScribed?.current?.checked || false,
      company_id: "c56946f900",
    };
    localStorage.setItem("lv_user_info", data);
    localStorage.setItem("user_name", data?.name);
    localStorage.setItem('mobile_number',data.mobile_no)
    let response = await postUserInfo(data);
    localStorage.setItem('uuid',response?.data?.user.uuid);
    console.log(response);
    console.log("User Info", data);
  };

  const handleFunctionCall = () => {
    if (window.localStorage?.user_name) {
      onKeyPresent();
      localStorage.setItem("joinCall", true);
    } else {
      onSubmituserDetails();
    }
  };

  useEffect(() => {
    getCountryCodeInfo();
    if (window.localStorage?.user_name) {
      setShowInputFields(true);
    } else {
      setShowInputFields(false);
    }
    console.log("Hello User");
  }, []);
  return (
    <>
      <div>
        {!showInputFields ? (
          <>
            {errorMsg !== "" ? <ErrorTag>{errorMsg}</ErrorTag> : null}
            <div style={labelStyle}>
              Full Name <span style={requiredSymbol}>*</span>
            </div>
            <Input ref={userName} placeholder="Enter your name" />
            <div style={labelStyle}>
              Contact <span style={requiredSymbol}>*</span>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ flex: "1", width: "20%" }}>
                <Select ref={countryCode}>
                  { countryCodes.map((codes) =>(
                     <option key={codes?._id} value={codes?.country_code}>{codes?.country_code}</option>
                  ))}
                </Select>
              </div>
              <div style={{ flex: "4", width: "80%" }}>
                <Input
                  ref={userMobileNo}
                  placeholder="Enter your contact number"
                />
              </div>
            </div>

            {/* Checkbox container */}
            <div
              style={{
                display: "flex",
                justifyContent: "start",
                marginTop: "0.5rem",
              }}
            >
              <div style={checkBoxContainer}>
                <Checkbox ref={isWhatsAppSubScribed} />
                <span style={whatsAppIcon}></span>
                <span style={whatsAppNotificationText}>
                  Receive Whatsapp Notification
                </span>
              </div>
            </div>
            <Notification />
          </>
        ) : null}

        <Button
          onClick={() => {
            handleFunctionCall();
          }}
        >
          <svg
            style={{ marginRight: "8px" }}
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
          Instant Call
        </Button>
        <Tag />
        {/* <ErrorTag>{errorMsg}</ErrorTag> */}
      </div>
    </>
  );
}

export default DetailsForm;
