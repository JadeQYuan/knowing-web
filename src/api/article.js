import request from "@/util/request";

export function getNewestArticlePage(params) {
    return request({
        method: "GET",
        url: "/articles/newest/paging",
        params: params
    });
}

export function getAllArticlePage(params) {
    return request({
        method: "GET",
        url: "/articles/all/paging",
        params: params
    });
}

export function getMyArticlePage(params) {
    return request({
        method: "GET",
        url: "/articles/my/paging",
        params: params
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

export function getUnderSpecialArticlesPage(params) {
    return request({
        method: "GET",
        url: "/articles/underSpecial",
        params: params
    });
}

export function getUnderTagArticlesPage(params) {
    return request({
        method: "GET",
        url: "/articles/underTag",
        params: params
    });
}
