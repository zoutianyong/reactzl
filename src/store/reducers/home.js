import {handleActions} from "redux-actions";
import {HomeType} from "../../actions/type/actionType";

//console.log(HomeType);
const defaultState={
    homeList:[]
}

export default handleActions({
   [HomeType]:(state,action)=>{
    //    console.log(state);
    //    console.log(action)
    let HomeState=JSON.parse(JSON.stringify(state))
        HomeState.homeList = action.payload.data
       return HomeState
   }
},defaultState)