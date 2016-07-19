export function requestLogin(id, pass) {
    return fetch("http://localhost:3000/Login", {
        method: 'POST',
        body: `id:${id}&pass${pass}`
    }).then(res => res.json()).then(payload => {
        return {payload};
    }).catch(error => {
        return {error};
    });
}
