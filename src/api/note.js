import request from "@/util/request";

export function getNoteList(param) {
    return request({
        method: "GET",
        url: "/note",
        params: param
    });
}

export function addNote(data) {
    return request({
        method: "POST",
        url: "/note",
        data: data
    });
}

export function getInfo(id) {
    return request({
        method: "GET",
        url: `/note/${id}`
    });
}

export function updateNote(id, data) {
    return request({
        method: "PUT",
        url: `/note/${id}`,
        data: data
    });
}
