import {handleChecks} from "../../actions/type/actionType"
import {handleActions} from "redux-actions"
const defaultState={
    checkAll:true,
    goodList:[],
}


export default handleActions({
    [handleChecks]:(state,action)=>{
        // let carState=JSON.parse(JSON.stringify(state))
        // carState.checkAll=action.payload.data
        // carState.goodsList.forEach((item)=>{
        //     item.flag=carState.selectAll
        // })
        // return carState
    }
 
 },defaultState)