import styled from "styled-components"

export const SearchStyle = styled.div`
width:100%;
    height:100%;
    position: relative;
    .searchList{
    position: absolute;
    width:100%;
    height:70%;
    background:#fff;
    top:1rem;
    left:0;
    display: none;
    ul{
    width:100%;
    height:100%;
    background:#fff;
    li{
    width:100%;
    height:10%;
    padding:0 30px;
    border-bottom:1px solid #e5e5e5;
    display: flex;
    align-items: center;
    p{
        width:100%; 
        white-space:nowrap; 
        text-overflow:ellipsis; 
        overflow:hidden;}
}
}
}
.searchTop{
    width:100%;
    height:1rem;
    background:#fff;
    position: relative;
    .searchLeft{
    width:1rem;
    height:1rem;
    float:left;
    /* background:green; */
    text-align:center;
    line-height:1rem;
    span{
    font-size:40px;
}
}
.searchCenter{
    float:left;
    width:72%;
    height:0.8rem;
    margin-top:0.1rem;
    background:#f7f7f7;
    .searchCenterLeft{
    width:0.8rem;
    height:0.8rem;
    float:left;
    text-align: center;
    line-height:0.8rem;
    span{
    font-size:60px;
}
}
.searchInput{
    width:3.5rem;
    height:0.5rem;
    margin-top:0.15rem;
    font-size:24px;
    border:0;
    background:#f7f7f7;
    outline: none;
}
}
.searchRight{
    width:1rem;
    height:1rem;
    float:right;
    text-align:center;
    line-height: 1rem;
    font-size:25px;
}
}
.hotSearch{
    width:100%;
    height:1rem;
    margin-top:10px;
    line-height: 1rem;
    padding:0 30px;
    font-size:30px;
    color:#d5d5d5;
}
.hotList{
    width:100%;
    min-height:2rem;
    padding:0 30px;
    span{
    display: block;
    width:31.5%;
    height:0.7rem;
    background:#f5f5f5;
    float:left;
    margin:15px 5px;
    text-align: center;
    line-height: 0.7rem;
}
}
`