export const proxy = "/cors-anywhere/?url="; //"https://cors-anywhere.danbulant.cloud/";
export const imageproxy = proxy; // "https://cors-anywhere.danbulant.workers.dev/?";
export const base = proxy + encodeURIComponent("https://api.mangadex.org/");
export const baseServer = "https://api.mangadex.org/";

export function getURL(endpoint, query) {
    if(typeof window === "undefined") return baseServer + endpoint + ((query ? "?" + query.toString() : ""));
    return base + encodeURIComponent(endpoint + ((query ? "?" + query.toString() : "")));
}

function request(endpoint, query, type = "GET", body) {
    return fetch(getURL(endpoint, query), {
        method: type,
        body: body ? JSON.stringify(body) : undefined
    }).then(resp => resp.json());
}

export default request;