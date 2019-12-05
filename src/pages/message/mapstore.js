import {xiugaiImg}from "../../actions/type/actionCreate"
export const mapStateToProps=(state)=>({
    
})

export const mapDispatchToProps=(dispatch)=>({
    xiugaiImgAction(filesImg,id){
        dispatch(xiugaiImg(filesImg,id))
        
    },
    
})

    