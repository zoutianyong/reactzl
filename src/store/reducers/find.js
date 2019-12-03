import {handleActions} from "redux-actions";
import {FindType} from "../../actions/type/actionType";

//console.log(HomeType);
const defaultState={
    findList:[]
}

export default handleActions({
   [FindType]:(state,action)=>{
    //    console.log(action)
    let FindState=JSON.parse(JSON.stringify(state))
        FindState.findList = action.payload.data
       return FindState
   }
},defaultState)