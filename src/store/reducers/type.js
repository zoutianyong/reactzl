import {handleActions} from "redux-actions";
import {listType} from "../../actions/type/actionType"
const defaultState={
    tyofLIst:[]
}

export default handleActions({
   [listType]:(state,action)=>{
    let typeState=JSON.parse(JSON.stringify(state))
        typeState.tyofLIst = action.payload.data
       return typeState
   }
},defaultState)