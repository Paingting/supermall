import { request } from "./request"
// 只有default的导出才能在引入的时候不添加大括号
export function getHomeMulitidata() {
    return request({
        url: '/home/mutidata'
    })
}

export function getHomeGoods(type, page) {
    return request({
        url: '/data',
        params: {
            type,
            page
        }
    })
}