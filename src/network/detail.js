import { request } from "./request";

export function getDetail(iid) {
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}

export class Goods {
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title
        this.desc = itemInfo.desc
        this.newPrice = itemInfo.newPrice
        this.discount = itemInfo.discount
        this.columns = columns
        this.services = services
        this.lowNowPrice = itemInfo.lowNowPrice
    }
}


