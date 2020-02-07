import request from "@/util/request";

export function getUserInfo() {
    return request({
        method: "GET",
        url: `/users`
    });
}
