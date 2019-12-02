import styled from "styled-components"

export const TypeConinter = styled.div`
background:#fff;
height:100%;
/* padding-bottom: 1rem; */
    display:flex;
flex-direction:column
.head{height:1rem;
    background:#fff;
    padding:0.1rem;
    overflow:hidden;
    display:flex;
    align-items:center;
    img{width:.8rem;height:0.6rem}
    .head_input{width:6rem;height:.8rem;margin-left:.3rem}
    input{width:6rem;height:.7rem;margin-top:0.02rem}
    head_input input{font-size: 40px !important;}
    .head_input{display: flex;align-items: center;font-size: 40px;}

    }
.content{
    overflow:hidden;
    flex: 1;
    .left{
        width: 25%;color: #666;float: left;height: 100%;border-right:1px solid #ccc;
        ul{width: 100%;}
        ul li{width: 100%;height: 1rem;line-height: 1rem; margin-left:.15rem;}
        span{display: inline-block;width: 80%;height: .6rem;border-radius:.5rem;
                text-align: center;line-height: .6rem;}
        .color{background:#999}
            }
        
    .right{width: 75%;float: right;height: 100%;padding:.2rem;
        overflow-y:auto;overflow-y: auto;min-height:3rem;
        .title{display: flex;justify-content: space-between;color: #c33;padding:.3rem 0 ;
            span:nth-child(1){color: #666;}
        }

        ul{display: flex;justify-content: flex-start;flex-wrap: wrap;justify-content: flex-start;
            img{width:1.5rem;height: 1.5rem;}
            li{display: flex;flex-direction:column;align-items: center;
                flex-wrap: wrap;margin: .1rem;
                span {font-size: 0.2rem;color: #999;padding: 0.2rem;}
            }
        }
       
    
       


    }
    img{width:100%;height:2.5rem}
}


`
