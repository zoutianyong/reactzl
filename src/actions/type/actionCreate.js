import {listType,HomeType} from "./actionType"
import {createAction} from "redux-actions"
import {typeApi,HomeApi} from "../../api/index"

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