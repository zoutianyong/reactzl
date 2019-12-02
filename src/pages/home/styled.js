import styled from "styled-components";
export const  Shouye=styled.div`
width:100%;
height:100%;
overflow: auto;
padding-bottom:1.2rem;
`
export const Search=styled.div`
width:100%;
height:1.1rem;
background:#c33;
position:fixed;
top:0;
left:0;
.logo{
    width:0.95rem;
    height:0.75rem;
    float:left;
    margin-left:0.1rem;
    margin-top:0.12rem;
    img{
        width:100%;
        height:100%;
    }
}
.searchBox{
    width:80%;
    height:0.8rem;
    /* line-height:0.8rem; */
    color:#b5b5b5;
    margin-top:0.15rem;
    margin-left:0.3rem;
    border-radius: 6px;
    background:#fff;
    float:left;
    .searchIco{
        display: block;
        float:left;
        font-size:60px;
    }
    .searchFont{
        display: block;
        float:left;
       font-size: 23px;
       margin-top:0.20rem;
       
    }
}
`
export const Banner =styled.div`
width:100%;
    height:5.2rem;
    margin-top:0.8rem;
    img{
        width:100%;
        height:100%;
    }
`
export const Navs =styled.div`
width:100%;
    height:2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    justify-content: center;
    div{
        width:20%;
        height:2rem;
        background: #fff;
        text-align: center;
        display: flex;
        flex-direction:column;
        align-items: center;
        justify-content: center;
        .navsIco{
            font-size:50px;
            margin-bottom:10px;
        }
    }
`
export const Line=styled.div`
width:100%;
    height:4rem;
    .lineLeft{
        width:48%;
        float:left;
        height:100%;
        img{
            width:100%;
            height:100%;
        }
    }
    .lineRight{
        width:48%;
        height:100%;
        float:right;
        img{
            width:100%;
            height:100%;
        }
    }
`
export const BigImg=styled.div`
width:100%;
    height:3.4rem;
    margin-top:0.3rem;
    background:#e5e5e5;
    img{
        width:100%;
        height:93%;
    }
`
export const Year=styled.div`
width:100%;
    height:1rem;
    display: flex;
    align-items: center;
    .yearLeft{
        width:30%;
        height:0;
        display:block;
        border:1px solid #e5e5e5;
        float:left;
    }
    .yearCenter{
        display:block;
        width:40%;
        height:1rem;
        text-align: center;
        line-height:1rem;
        font-size:30px;
    }
    .yearRight{
        width:30%;
        height:0;
        display:block;
        border:1px solid #e5e5e5;
        float:right;
    }
`
export const YearList=styled.div`
width:100%;
    height:8rem;
    background:#e5e5e5;
    img{
        width:100%;
        height:auto;
    }
    .List_One{
        width:100%;
        height:4.4rem;
        background:#fff;
        overflow-x:auto;
        font-size:20px;
        ul {
            width:auto;
            height:100%;
            overflow-x:auto;
            overflow-y:hidden;
            white-space:nowrap;
            list-style-type:none;
            li{
                display: inline-block;
                width:3rem;
                height:100%;
                margin-right:10px;
                text-align: center;
                overflow: hidden;
                img{
                    display: block;
                    width:80%;
                    height:56%;
                    margin:10%;
                    margin-top:5%;
                }
                .over{
                    width:80%;
                    white-space:nowrap;
                    text-overflow:ellipsis; 
                    overflow:hidden;
                    margin-left:10%;
                }
                .ls{
                    display: block;
                    width:50%;
                    margin-left:25%;
                    background:#c33;
                    color:#fff;
                }
            }
        }
    }
   
`
export const StarList=styled.div`
width:100%;
height:4.6rem;
background:#e5e5e5;
.starListTop{
    width:100%;
    height:1rem;
    background:#fff;
    .startLeft{
        width:15%;
        height:0;
        border:1px solid #e5e5e5;
        float:left;
        margin-top:0.5rem;
    }
    .startCenter{
        float:left;
        width:70%;
        line-height:1rem;
        font-size:30px;
        text-align: center;
    }
    .startRight{
        width:15%;
        height:0;
        border:1px solid #e5e5e5;
        float:right;
        margin-top:0.5rem;
    }
}
img{
    width:100%;
    height:auto;
}
`
export const AllBuy=styled.div`
width:100%;
    height:1rem;
    background:#e5e5e5;
    .allBuyLeft{
        width:30%;
        height:0;
        border:1px solid #ccc;
        float:left;
        margin-top:0.5rem;
    }
    .allBuyCenter{
        float:left;
        width:40%;
        line-height:1rem;
        font-size:20px;
        text-align: center;
    }
    .allBuyRight{
        width:30%;
        height:0;
        border:1px solid #ccc;
        float:right;
        margin-top:0.5rem;
    }
`
export const AllBuyList=styled.div`
width:100%;
min-height:2rem;
background:#fff;
div{
    width:50%;
    height:5rem;
    border:1px solid #ccc;
    float:left;
    padding-left:5%;
    img{
        width:80%;
        height:auto;
        margin-left:5%;
        margin-top:5%;
    }
    .allBuyPrice{
        margin-top:0.4rem;
        color:#c33;
        del{
            color:#ccc;
        }
    }
    p{
        span{
            display: block;
            float:left;
            background:#c33;
            color:#fff;
            width:1.3rem;
            text-align:center;
            line-height:0.5rem;
            margin-top:10px;
            margin-left:5px;
        }
    }
}
`
export const Up=styled.div`
position: fixed;
right:0.3rem;
bottom:1.5rem;
width:1rem;
height:1rem;
border-radius: 50%;
background:#fff;
border:1px solid #ccc;
span{
    display: block;
    width:100%;
    height:100%;
    text-align: center;
    font-size:50px;
    line-height:1rem;
}
`