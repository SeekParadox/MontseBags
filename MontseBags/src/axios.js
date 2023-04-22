// const axios = require("axios");
import axios from "axios";

export const getData =  (param) => {
  return  axios.get(param);
};
