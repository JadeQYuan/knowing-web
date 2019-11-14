import Axios from "axios";

export function getTagList(param) {
  return Axios.get("http://localhost:9000/tag", { params: param });
}

export function addTag(data) {
  Axios.post("http://localhost:9000/tag", data).then(res => {
      console.log(res);
  });
}
