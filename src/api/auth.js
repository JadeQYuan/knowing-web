import request from "@/util/request";

export function getQQLoginUrl() {
    return request({
        method: "GET",
        url: "/auth/qq"
    });
}
