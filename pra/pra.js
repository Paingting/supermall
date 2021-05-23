import { reject, resolve } from "core-js/fn/promise";

new Promise((resolve, reject) => {
    setTimeout((res) => {
        resolve()
    }, 1000);

}).then(() => {
    return new Promise((resolve, reject) => {
        setTimeout((res) => {
            resolve()
        }, 1000);
    })
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(res)
    }, 1000);
}).then((res) => {
    return Promise.resolve(res)
}).then((res) => {
    return Promise.resolve(res)
})

new Promise(() => {
    setTimeout(() => {
        resolve(res)
    }, 1000);
}).then((res) => {
    return res
})