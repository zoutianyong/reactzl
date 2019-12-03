import {picAction} from "../../actions/type/actionCreate"
export const mapStateToProps=(state)=>({
    detailList:state.detail.detailList
})

export const mapDispatchToProps=(dispatch)=>({
    getPic(mark){
        dispatch(picAction(mark))
    }
})

// /////////////////////////////detail                           