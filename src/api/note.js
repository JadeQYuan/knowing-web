import Axios from "axios";

export function getNoteList(param) {
  return Axios.get("http://localhost:9000/note", { params: param });
}

export function addNote(data) {
  return Axios.post("http://localhost:9000/note", data);
}

export function getInfo(id) {
  return Axios.get(`http://localhost:9000/note/${id}`);
}
