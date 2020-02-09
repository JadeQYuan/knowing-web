import request from "@/util/request";

export function getNewestArticlePage(param) {
    return request({
        method: "GET",
        url: "/articles/newest/paging",
        params: param
    });
}

export function getAllArticlePage(param) {
    return request({
        method: "GET",
        url: "/articles/all/paging",
        params: param
    });
}

export function getMyArticlePage(param) {
    return request({
        method: "GET",
        url: "/articles/my/paging",
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
