import Axios from "axios";
import BASE_URL from "./baseApi";

export function getArticleList(param) {
  return Axios.get(`${BASE_URL}/article`, { params: param });
}

export function addArticle(data) {
  return Axios.post(`${BASE_URL}/article`, data);
}

export function getInfo(id) {
  return Axios.get(`${BASE_URL}/article/${id}`);
}
