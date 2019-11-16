import Axios from "axios";
import BASE_URL from "./baseApi";

export function getNoteList(param) {
  return Axios.get(`${BASE_URL}/note`, { params: param });
}

export function addNote(data) {
  return Axios.post(`${BASE_URL}/note`, data);
}

export function getInfo(id) {
  return Axios.get(`${BASE_URL}/note/${id}`);
}
