import Axios from "axios";

export function getArticleList(param) {
  return Axios.get("http://localhost:9000/article", { params: param });
}

export function addArticle(data) {
  return Axios.post("http://localhost:9000/article", data);
}

export function getInfo(id) {
  return Axios.get(`http://localhost:9000/article/${id}`);
}
