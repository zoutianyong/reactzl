import http from "../utils/request";
export const typeApi=(id,depth)=>http.get({
    url:"/ajax/api/overseas/catalogs",
    data:{
        id:id,
        depth:depth

    }
})

export const listApi=()=>http.get({
    url:"/ajax/api/overseas/index",
    data:{
       
    }
})


export const picApi=(id)=>http.get({
    url:"/ajax/api/overseas/products/"+id+"?warehouseId=1",
    data:{
        
    }
})

//loginApi

export const  loginApi=(username,password)=>http.post({
    url:"/users/login",
    data:{
        username,
        password
    }
})

//registerApi


export const  registerApi=(username,password)=>http.post({
    url:"/users/register",
    data:{
        username,
        password
    }
})
export const HomeApi=_=>http.get({
    url:"/ajax/api/overseas/index",  
})