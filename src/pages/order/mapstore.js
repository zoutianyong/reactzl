import {checkAction,numAction}from "../../actions/type/actionCreate"
export const mapStateToProps=(state)=>({
    
})

export const mapDispatchToProps=(dispatch)=>({
    checkall(){
         dispatch(checkAction())
        //  dispatch(numAction())
    },
    
    checkOnly(index){
        console.log("bbb",index)
    }
})

// //////////////mycar                      