import request from "@/util/request";

export function getTagList(param) {
    return request({
        method: "GET",
        url: "/tag",
        params: param,
    });
}

export function addTag(data) {
    return request({
        method: "POST",
        url: "/tag",
        data: data,
    });
}
