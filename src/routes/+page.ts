export const prerender = true;

/** @type {import('./$types').PageLoad} */
export function load({ url }) {
    return {
        url
    }
}