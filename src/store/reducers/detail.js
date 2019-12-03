
import {picList} from "../../actions/type/actionType"
import {handleActions} from "redux-actions"
const defaultState={
    detailList:[]
}


export default handleActions({
    [picList]:(state,action)=>{
        let detailState=JSON.parse(JSON.stringify(state))
        detailState.detailList=action.payload.data
        return detailState
    }
 
 },defaultState)