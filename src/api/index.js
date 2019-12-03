import http from "../utils/request";
export const typeApi=(id,depth)=>http.get({
    url:"/ajax/api/overseas/catalogs",
    data:{
        id:id,
        depth:depth

    }
})

export const HomeApi=_=>http.get({
    url:"/ajax/api/overseas/index",  
})

export const SearchApi=(q)=>http.get({
    url:"/mianshui/search/goods/associate",
    data:{
        shopId:1000,
        platformId:1,
        keyword:q,
        available:1

    }
})

export const FindApi=_=>http.get({
    url:"/ajax/api/overseas/brands",
})
