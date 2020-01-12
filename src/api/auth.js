import request from "@/util/request";

export function getLoginUrl(authPlateForm) {
    return request({
        method: "GET",
        url: `/auth/${authPlateForm}`
    });
}

export function login(data) {
    return request({
        method: "POST",
        url: "/auth",
        data: data
    });
}
