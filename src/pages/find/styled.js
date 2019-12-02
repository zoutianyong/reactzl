import styled from "styled-components";
export const  Pinpai=styled.div`
    margin-bottom:1.2rem;
`

export const AllPinPai=styled.div`
width:100%;
height:1.2rem;
background:#fff;
position: fixed;
top:0;
left:0;
.allCenter{
    width:3rem;
    height:100%;
    margin-left:30%;
    text-align: center;
    line-height:1.2rem;
    font-size:30px;
    float:left;
}
.allSearch{
    width:1.2rem;
    height:100%;
    float:right;
    text-align: center;
    line-height:1.2rem;
    span{
        font-size: 70px;
    }
}
`
export const PinpaiList=styled.div`
width:100%;
min-height:5rem;
margin:1.2rem 0;
background:yellow;
.imgList{
    width:100%;
    min-height:3rem;
    background:#fff;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    div{
        display: flex;
        justify-content: space-between;
        img{
            width:49%;
            height:2.5rem;
            margin-top:10px;
        }
    }
}
`
export const PinpaiTitle=styled.div`
width:100%;
height:1rem;
background:#fff;
.pinpaiLeft{
    width:30%;
    height:0;
    display:block;
    border:1px solid #e5e5e5;
    float:left;
    margin-top:0.5rem;
}
.pinpaiCenter{
    float:left;
    width:40%;
    height:1rem;
    text-align: center;
    line-height:1rem;
    font-size:30px;
}
.pinpaiRight{
    width:30%;
    height:0;
    display:block;
    border:1px solid #e5e5e5;
    float:right;
    margin-top:0.5rem;
}
`
export const NameList=styled.div`
    width:100%;
    min-height:4rem;
    background:#fff;
    .silderList{
        position: fixed;
        text-align: center;
        font-size: 26px;
        top:1.2rem;
        right:0;
        width:0.6rem;
        height:100%;
        background:#f5f5f5;
        color:blue;
        p{
            margin-top:6px;
        }
    }
    .one{
        width:90%;
        margin-left:5%;
        .nameTitle{
            width:92%;
            height:1rem;
            background:#f5f5f5;
            border-left:8px solid #c33;
            line-height:1rem;
            padding-left:10px;
            font-size:30px;
        }
        .titleList{
            width:92%;
            height:0.8rem;
            line-height:0.8rem;
            padding-left:10px;
            font-size:20px;
        }
    }
`
