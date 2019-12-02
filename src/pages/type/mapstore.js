import {listTypeAction} from "../../actions/type/actionCreate"
export const mapStateToProps=(state)=>({
    tyofLIst:state.type.tyofLIst
})

export const mapDispatchToProps=(dispatch)=>({
    handleType(){
        dispatch(listTypeAction(225510,2))
    },
    changeRender(id,depth){
        dispatch(listTypeAction(id,depth))
    }
})