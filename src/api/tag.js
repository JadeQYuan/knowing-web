import Axios from "axios";

export function getTagList(param) {
  return Axios.get("http://localhost:9000/tag", { params: param });
}

export function addTag(data) {
  return Axios.post("http://localhost:9000/tag", data);
}
