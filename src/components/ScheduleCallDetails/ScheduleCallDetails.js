import React, { useState, useEffect, useRef } from "react";
import Button from "../Atoms/Button";
import Select from "../Atoms/Select";
import { getScheduleSlotTime, scheduleCallDetails } from "../../api";
import scheduleIcon from "../../assets/image/schedule-icon.png";
import Tag from "../Shared Component/Tags/Info Tag";
import SuccessTag from "../Shared Component/Tags/Success Tag";
import ErrorTag from "../Shared Component/Tags/Error Tag";

function ScheduleCallDetails() {
  const fontfamily = localStorage.getItem('fontFamily');
  const mainHeader = {
    width: "100%",
    height: "20px",
    color: "#000",
    fontFamily: fontfamily,
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
    letterSpacing: "0.16px",
  };
  const timeContainer = {
    width: "100%",
    flexShrink: "0",
    borderRadius: "6px",
    background: "rgba(187, 184, 168, 0.14)",
    marginTop: "15px",
  };
  const imageParaGraphContainer = {
    display: "flex",
    alignItems: "center",
    columnGap: "15px",
    // padding: "18px 18px 10px 18px",
    padding: '12px 18px 0px'
  };

  const subParagraph = {
    color: "#472806",
    fontFamily: fontfamily,
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",
    letterSpacing: "0.12px",
  };

  const timeStampContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    columnGap: "10px",
    fontSize: "10px",
    fontFamily: fontfamily,
    fontWeight: "500",
    lineHeight: "normal",
    letterSpacing: "0.12px",
    color: "#472806",
    // paddingBottom: '8px'
  };

  const scheduleCallIcon = {
    width: "20px",
    height: "20px",
    background: `url(${scheduleIcon})`,
    marginRight: '10px',
  };

  const scheduleBtnAndImgContainer = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }

  const [scheduleTime, setScheduleTime] = useState("");
  const [scheduleCallSlots, setScheduleCallSlots] = useState([]);
  const sTime = localStorage.getItem("start_time");
  const eTime = localStorage.getItem("end_time");
  const gaP = localStorage.getItem("gap");
  const datE = localStorage.getItem("date");
  const user_name = localStorage.getItem('user_name');
  const mobile_no = localStorage.getItem('mobile_number');
  const uuid = localStorage.getItem('uuid');
  const [successMessageFlag, setSuccessMessageFlag] = useState(false);
  const [errorMessageFlag, seterrorMessageFlag] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const scheduleDate  = useRef();
  const scheduleTimes = useRef();


  const getScheduleCallTimeAndDateSlot = async () => {
    try {
      let response = await getScheduleSlotTime();
      console.log(response);
      const start_Time = response?.data?.data?.start_time;
      const end_Time = response?.data?.data?.end_time;
      const gap = response?.data?.data?.gap;
      const date = response?.data?.data?.date;
      localStorage.setItem("start_time", start_Time);
      localStorage.setItem("end_time", end_Time);
      localStorage.setItem("gap", gap);
      localStorage.setItem("date", date);
      setScheduleCallSlots(response?.data);
      console.log("Start Time", start_Time);
      console.log("End Time", end_Time);
      console.log("gap", gap);
    } catch (error) {
      console.log("Schedule Call Time and Date Slot", error);
    }
  };


  const scheduleCall = async () => {
    const [month, day, year] = scheduleDate.current.value.split('/');
    const [time, period] = scheduleTimes.current.value.split(' ');

    const [hours, minutes] = time.split(':');
    let hours24 = parseInt(hours);

    if (period.toLowerCase() === 'pm' && hours24 < 12) {
        hours24 += 12;
    }

    // Create a new Date object with the parsed values
    const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day), hours24, parseInt(minutes));

    // Convert to ISO string format
    const isoString = date.toISOString();
    console.log(isoString);
    const data = {
      userName: user_name,
      mobileNumber: mobile_no,
      company_id: 'c56946f900',
      schedule_time: isoString,
      uuid: uuid,
      product_url: window.location.href
    }
    try{
      let response = await scheduleCallDetails(data);
      console.log(response);
      setResponseMessage(response?.data?.message);
      setSuccessMessageFlag(true);
      seterrorMessageFlag(false);
    }catch(error){
      console.log('schedule call', error);
      setResponseMessage(error?.response?.data?.message);
      seterrorMessageFlag(true);
      setSuccessMessageFlag(false);
    }
  }

  //   Generate Time Stamp

  function TimeSelectBox({ s_time, e_time, gap }) {
    const parseTime = (timeString) => {
      console.log(timeString);
      if (timeString === null) {
        timeString = "";
      }
      const [time, meridiem] = timeString.toLowerCase().split(" ");
      const [hours, minutes] = time.split(":");

      let hour = parseInt(hours);

      if (meridiem === "pm" && hour < 12) {
        hour += 12;
      } else if (meridiem === "am" && hour === 12) {
        hour = 0;
      }

      return { hour, minutes: parseInt(minutes) };
    };

    const startTime = parseTime(s_time);
    const endTime = parseTime(e_time);
    const gapInMinutes = parseInt(gap);

    const timeOptions = [];
    let currentTime = new Date();
    currentTime.setHours(startTime.hour, startTime.minutes, 0);

    const endTimeValue = new Date();
    endTimeValue.setHours(endTime.hour, endTime.minutes, 0);

    while (currentTime <= endTimeValue) {
      const timeString = currentTime?.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      timeOptions.push(timeString);

      currentTime.setMinutes(currentTime.getMinutes() + gapInMinutes);
    }

    return (
      <Select
        ref={scheduleTimes}
      >
        {timeOptions.map((time, index) => (
          <option key={index} value={time}>
            {time}
          </option>
        ))}
      </Select>
    );
  }

  // Geneate Date Picker
  const DateSelectBox = ({ date }) => {
    return (
      <>
        <Select
        ref={scheduleDate}
        >
          <option value={date}>{date}</option>
        </Select>
      </>
    );
  };

  useEffect(() => {
    getScheduleCallTimeAndDateSlot();
    console.log("schedule call slots", scheduleCallSlots);
  }, []);
  return (
    <>
      <div>
        {successMessageFlag && !errorMessageFlag? (<SuccessTag/>): errorMessageFlag && !successMessageFlag? (<ErrorTag>{responseMessage}</ErrorTag>): null}
        <div style={mainHeader}>Select Date and Time</div>
        {/* Time Select Container */}
        <div style={timeContainer}>
          <div style={imageParaGraphContainer}>
            <div className="timeIcon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
              >
                <path
                  d="M7.15 14.2004C10.8228 14.2004 13.8 11.2232 13.8 7.55039C13.8 3.8776 10.8228 0.900391 7.15 0.900391C3.47721 0.900391 0.5 3.8776 0.5 7.55039C0.5 11.2232 3.47721 14.2004 7.15 14.2004Z"
                  stroke="#472806"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.7998 3V7.10298L9.5998 10"
                  stroke="#472806"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="subParagraph" style={subParagraph}>
              Please select a suitable Time
            </div>
          </div>
          {/* Time Stamps */}
          <div style={timeStampContainer}>
            <TimeSelectBox s_time={sTime} e_time={eTime} gap={gaP} />
          </div>
        </div>

        {/* Date Picker Container */}
        <div style={timeContainer}>
          <div style={imageParaGraphContainer}>
            <div className="timeIcon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
              >
                <path
                  d="M9.77333 2.46222V1M9.77333 2.46222V3.92444M9.77333 2.46222H6.48333M1 6.84889V13.4289C1 13.8167 1.15406 14.1886 1.42827 14.4628C1.70249 14.7371 2.07442 14.8911 2.46222 14.8911H12.6978C13.0856 14.8911 13.4575 14.7371 13.7317 14.4628C14.0059 14.1886 14.16 13.8167 14.16 13.4289V6.84889M1 6.84889H14.16M1 6.84889V3.92444C1 3.53664 1.15406 3.16472 1.42827 2.8905C1.70249 2.61628 2.07442 2.46222 2.46222 2.46222H3.92444M14.16 6.84889V3.92444C14.16 3.53664 14.0059 3.16472 13.7317 2.8905C13.4575 2.61628 13.0856 2.46222 12.6978 2.46222H12.3322M3.92444 1V3.92444"
                  stroke="#472806"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="subParagraph" style={subParagraph}>
              Please select a suitable Date
            </div>
          </div>
          {/* Time Stamps */}
          <div style={timeStampContainer}>
            <DateSelectBox date={datE} />
            {/* </div> */}
          </div>
        </div>

        <Button
        onClick={() =>{scheduleCall()}}
        >
          <div style={scheduleBtnAndImgContainer}>
            <div style={scheduleCallIcon}></div>
            <div>Schedule a Call</div>
          </div>
        </Button>
        <Tag/>
      </div>
    </>
  );
}

export default ScheduleCallDetails;
