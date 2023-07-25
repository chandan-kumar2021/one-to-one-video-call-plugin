import axios from "axios";

const ENDPOINT = "https://api.lively.li";

export const getCompanyInfo = async (companyId) => {
  return await axios.get(`${ENDPOINT}/conferenceUsers/getCompanyInfo`, {
    params: {
      company_id: companyId,
    },
  });
};
export const getCountryCode = async () => {
  return await axios.get(`${ENDPOINT}/conferenceUsers/get-country-code`);
};
export const postUserInfo = async (data) => {
  return await axios.post(`${ENDPOINT}/conferenceUsers/user-info`, data);
};
export const getScheduleSlotTime = async () => {
  return await axios.get(`${ENDPOINT}/schedulecall/VideoCallslotTime`);
};
export const scheduleCallDetails = async (data) => {
  return await axios.post(`${ENDPOINT}/schedulecall`, data);
};
export const generateToken = async (data) => {
  return await axios.post(`${ENDPOINT}/call/video/generate/call-token`, data);
};
