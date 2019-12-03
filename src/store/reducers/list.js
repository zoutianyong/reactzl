
import {productLIst} from "../../actions/type/actionType"
import {handleActions} from "redux-actions"

const defaultState={
    shopList:[]
}

export default handleActions({
   [productLIst]:(state,action)=>{
       let shopState=JSON.parse(JSON.stringify(state))
       shopState.shopList=action.payload.data
       return shopState
   }

},defaultState)