import {SearchListAction} from "../../actions/type/actionCreate";

export const mapStateToProps=(state)=>({
    
    searchList:state.search.searchList
})

export const mapDispatchToProps=(dispatch)=>({
    changeSearchRender(q){
        dispatch(SearchListAction(q))
    }
})