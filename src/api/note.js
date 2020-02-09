import request from "@/util/request";

export function getNotePage(param) {
    return request({
        method: "GET",
        url: "/notes/my/paging",
        params: param
    });
}

export function addNote(data) {
    return request({
        method: "POST",
        url: "/notes",
        data: data
    });
}

export function getInfo(id) {
    return request({
        method: "GET",
        url: `/notes/${id}`
    });
}

export function updateNote(id, data) {
    return request({
        method: "PUT",
        url: `/notes/${id}`,
        data: data
    });
}
