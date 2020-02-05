import request from "@/util/request";

export function getTagList(param) {
    return request({
        method: "GET",
        url: "/tags",
        params: param
    });
}

export function getTagPage(param) {
    return request({
        method: "GET",
        url: "/tags/paging",
        params: param
    });
}

export function addTag(data) {
    return request({
        method: "POST",
        url: "/tag",
        data: data
    });
}

export function getTagInfo(id) {
    return request({
        method: "GET",
        url: `/tag/${id}`
    });
}
