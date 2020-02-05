import request from "@/util/request";

export function getArticleList(param) {
    return request({
        method: "GET",
        url: "/articles",
        params: param
    });
}

export function getArticlePage(param) {
    return request({
        method: "GET",
        url: "/articles/paging",
        params: param
    });
}

export function addArticle(data) {
    return request({
        method: "POST",
        url: "/articles",
        data: data
    });
}

export function getInfo(id) {
    return request({
        method: "GET",
        url: `/articles/${id}`
    });
}

export function updateArticle(id, data) {
    return request({
        method: "PUT",
        url: `/articles/${id}`,
        data: data
    });
}
