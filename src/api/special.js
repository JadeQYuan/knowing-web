import request from "@/util/request";

export function getMySpecialList(param) {
    return request({
        method: "GET",
        url: "/specials/my",
        params: param
    });
}

export function getSpecialPage(param) {
    return request({
        method: "GET",
        url: "/specials/paging",
        params: param
    });
}

export function getMySpecialPage(param) {
    return request({
        method: "GET",
        url: "/specials/my/paging",
        params: param
    });
}

export function addSpecial(data) {
    return request({
        method: "POST",
        url: "/specials",
        data: data
    });
}

export function getInfo(id) {
    return request({
        method: "GET",
        url: `/specials/${id}`
    });
}

export function updateSpecial(id, data) {
    return request({
        method: "PUT",
        url: `/specials/${id}`,
        data: data
    });
}
