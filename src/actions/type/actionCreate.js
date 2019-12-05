import {listType,HomeType,SearchType,FindType,productLIst,picList} from "./actionType"
import {createAction} from "redux-actions"
import {typeApi,listApi,picApi,loginApi,registerApi,HomeApi,SearchApi,FindApi,xiugaiImgApi} from "../../api/index"



export const listTypeAction=(id,depth)=>{
    let createListAction=createAction(listType,(data)=>({data:data}))
    return async(dispatch)=>{
        let data=await typeApi(id,depth)
        //console.log(data) //第一次dispatch获取到数据

        dispatch(createListAction(data))
    }
}

export const HomeListAction=()=>{
    let createHomeListAction=createAction(HomeType,(data)=>({data:data}))
    return async(dispatch)=>{
        let data=await HomeApi()
        //console.log(data)
        dispatch(createHomeListAction(data))
    }
}

export const SearchListAction=(q)=>{
    let createSearchListAction=createAction(SearchType,(data)=>({data:data}))
    return async(dispatch)=>{
        let data=await SearchApi(q)
        dispatch(createSearchListAction(data))
    }
}

export const FindListAction=()=>{
    let createFindListAction=createAction(FindType,(data)=>({data:data}))
    return async(dispatch)=>{
        let data=await FindApi()
        //console.log(data)
        dispatch(createFindListAction(data))
    }
}
export const listProductAction=()=>{
    let createProductAction=createAction(productLIst,(data)=>({data:data}))
    return async(dispatch)=>{
        let data=await listApi()
        console.log(data)
        dispatch(createProductAction(data))
    }
}

export const picAction=(id)=>{
    let CreatePicAction=createAction(picList,(data)=>({data:data}))
    return async(dispatch)=>{
        let data=await picApi(id)
         console.log(data,"000")
        dispatch(CreatePicAction(data))
    }
}

export const loginAction=(username,password)=>{
    return async(dispatch)=>{
        let data=await loginApi(username,password)
        console.log(data)
        localStorage.setItem("user",JSON.stringify(data.data.data))
    }
}



export const registerAction=(username,password)=>{
    return async(dispatch)=>{
        let data=await registerApi(username,password)
        console.log(data)
    }
}

export const xiugaiImg=(filesImg,id)=>{
    return async(dispatch)=>{
        let data=await xiugaiImgApi(filesImg,id)
        console.log(data)
    }
}