import {listType,productLIst,picList} from "./actionType"
import {createAction} from "redux-actions"
import {typeApi,listApi,picApi,loginApi,registerApi} from "../../api/index"

export const listTypeAction=(id,depth)=>{
    let createListAction=createAction(listType,(data)=>({data:data}))
    return async(dispatch)=>{
        let data=await typeApi(id,depth)
        //console.log(data) //第一次dispatch获取到数据

        dispatch(createListAction(data))
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
    }
}
////



export const registerAction=(username,password)=>{
    return async(dispatch)=>{
        let data=await registerApi(username,password)
        console.log(data)
    }
}