import Axios from "axios";
import BASE_URL from "./baseApi";

export function getTagList(param) {
  return Axios.get(`${BASE_URL}/tag`, { params: param });
}

export function addTag(data) {
  return Axios.post(`${BASE_URL}/tag`, data);
}
