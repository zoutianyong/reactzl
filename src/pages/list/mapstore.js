import {listProductAction} from "../../actions/type/actionCreate"
export const mapStateToProps=(state)=>({
    shopList:state.list.shopList
})

export const mapDispatchToProps=(dispatch)=>({


    
    handleList(){
       dispatch(listProductAction())
    }
})