import {handleActions} from "redux-actions";
import {SearchType} from "../../actions/type/actionType"
const defaultState={
    searchList:[]
}

export default handleActions({
   [SearchType]:(state,action)=>{
       console.log(action)
       console.log(111);
    let searchState=JSON.parse(JSON.stringify(state))
    searchState.searchList = action.payload.data.associateList
       return searchState
   }
},defaultState)