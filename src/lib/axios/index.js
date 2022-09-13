import axios from "axios";
import UNIVERSAL from "config";
const cryptoJS = require("crypto-js");

const Axios = axios.create({
  baseURL: UNIVERSAL.BASEURL,
  // withCredentials: true,
});

Axios.interceptors.request.use((config) => {
  // Encrypt data if method is POST
  if (config.method === "post") {
    const { data } = config;

    const encryptedData = cryptoJS.AES.encrypt(
      JSON.stringify(data),
      UNIVERSAL.JWT_SECRET
    ).toString();

    // eslint-disable-next-line no-param-reassign
    config.data = {
      data: encryptedData,
    };
  }

  return config;
});

export default Axios;
