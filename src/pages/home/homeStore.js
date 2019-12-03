import {HomeListAction} from "../../actions/type/actionCreate";

export const mapStateToProps=(state)=>({
    
    homeList:state.home.homeList
})

export const mapDispatchToProps=(dispatch)=>({
    handleAsyncHome(){
        dispatch(HomeListAction())
    }
})