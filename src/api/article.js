import request from "@/util/request";

export function getArticleList(param) {
    return request({
        method: "GET",
        url: "/article",
        params: param
    });
}

export function getArticlePage(param) {
    return request({
        method: "GET",
        url: "/article/paging",
        params: param
    });
}

export function addArticle(data) {
    return request({
        method: "POST",
        url: "/article",
        data: data
    });
}

export function getInfo(id) {
    return request({
        method: "GET",
        url: `/article/${id}`
    });
}

export function updateArticle(id, data) {
    return request({
        method: "PUT",
        url: `/article/${id}`,
        data: data
    });
}
