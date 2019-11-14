import Axios from "axios";

export function getArticleList(param) {
    return Axios.get("http://localhost:9000/article", { params: param });
}

export function addArticle(data) {
    Axios.post("http://localhost:9000/article", data).then(res => {
        console.log(res);
    });
}

export function getInfo(id) {
    return Axios.get(`http://localhost:9000/article/${id}`);
}