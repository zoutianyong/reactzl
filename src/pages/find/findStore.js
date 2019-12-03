import {FindListAction} from "../../actions/type/actionCreate";

export const mapStateToProps=(state)=>({
    
    findList:state.find.findList
})

export const mapDispatchToProps=(dispatch)=>({
    handleAsyncFind(){
        dispatch(FindListAction())
    }
})