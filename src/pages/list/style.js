import styled from "styled-components"

export const ListContiner=styled.div`

height: 100%;display: flex;flex-direction: column;

.head{height: 1rem !important;display: flex;background: #fff;color: #444;box-shadow: 0 0 0.1rem #ccc;z-index: 1;align-items: center;position:relative
    .goback{position:absolute;left:.2rem
    i{font-size:40px}
    }
}
.head span{margin: auto;font-size:35px;line-height: 1rem;}

.main{flex:1;overflow-y:auto;display:flex;flex-wrap:wrap;justify-content:flex-start;

   .product{display:inline-block;width:50%;height:5.7rem;display:flex;flex-direction:column;padding:.2rem;box-sizing:border-box;position: relative;
    
    img{width:100%;height:3.4rem}
   
   }
   div{
       height:1rem;font-size:25px;padding-top:.25rem;
   }
   span{background:#c33;padding:.1rem;width:.8rem;color:#fff;}
   p{margin-bottom:.2rem;color:#c33}
   .bottom{width:80%;height:1px;background:#999;position:absolute;bottom:0;left:10%;padding:0}
   .right{width:1px;height:90%;background:#999;position:absolute;right:0;top:5%;padding:0}
}


`