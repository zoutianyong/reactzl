 import {loginAction,registerAction}from "../../actions/type/actionCreate"
export const mapStateToProps=(state)=>({
    
})

export const mapDispatchToProps=(dispatch)=>({
    sendLogin(username,password){
        dispatch(loginAction(username,password))
        
    },
    sendeRegister(username,password){
        dispatch(registerAction(username,password))
    }

     
})
                      