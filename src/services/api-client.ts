import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d2b4e753d88747dd823d6e18e97d0be4",
  },
});
