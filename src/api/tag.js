import request from "@/util/request";

export function addTagCategory(data) {
    return request({
        method: "POST",
        url: "/tags/category",
        data: data
    });
}

export function getTagCategory(id) {
    return request({
        method: "GET",
        url: `/tags/category/${id}`
    });
}

export function updateTagCategory(id, data) {
    return request({
        method: "PUT",
        url: `/tags/category/${id}`,
        data: data
    });
}

export function getPopularTagList() {
    return request({
        method: "GET",
        url: "/tags/popular"
    });
}

export function addTag(data) {
    return request({
        method: "POST",
        url: "/tags",
        data: data
    });
}

export function getTagInfo(id) {
    return request({
        method: "GET",
        url: `/tags/${id}`
    });
}

export function updateTag(id, data) {
    return request({
        method: "Put",
        url: `/tags/${id}`,
        data: data
    });
}

export function getTagTree() {
    return request({
        method: "GET",
        url: "/tags/tree"
    });
}

export function getAllTagTree() {
    return request({
        method: "GET",
        url: "/tags/all/tree"
    });
}

export function getTagCategoryList() {
    return request({
        method: "GET",
        url: "/tags/category"
    });
}
