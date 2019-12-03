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