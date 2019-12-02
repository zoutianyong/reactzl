import styled from "styled-components"

export const DetailContener=styled.div`
height: 100%;display: flex;flex-direction: column;background: #fff;position: absolute;

.head{height: 0.9rem !important;display: flex;background: #fff;color: #444;box-shadow: 0 0 0.1rem #ccc;z-index: 1;align-items: center;position:relative
    .goback{position:absolute;left:.2rem
    i{font-size:40px}
    }
    span{margin: auto;font-size:35px;line-height: 1rem;}
}
img{width: 100%;height: 100%;}
.info{width: 100%;height: 3rem;padding: 0.2rem;
    .price{height:1rem;display: flex;align-items: center;font-size:20px;padding: .2rem;color: #c33;border-bottom: 2px solid #999;}
  strong{font-size: 40px;color: #c33;margin-right: .3rem;} 
  s{color: #999;font-size: 25px;}
  .manjian{display: inline-block;background: #ff9b9f;padding: 0.1rem;color: #fff
    ;font-size: 27px;border-radius: 20px; margin-left: .2rem;}
   h2{color: #333;font-size: 30px;margin-top: .25rem;font-weight: 500;}
   p{color: #666;font-size: 25px;margin-top: .15rem;}
  ul{margin-top: .1rem;font-size: 25px;}

}
.foot{height: 1rem;display: flex;margin-top: 1rem;position: fixed;bottom: 0;width:100%

    span{width: 15%;height: 100%;}
  div{width: 35%;height: 100%;font-size: 30px; color: #fff;line-height: 1rem;text-align: center;flex:1}
  .add{background: #333;}
  .buy{background: #c33;}

  span{display: flex;justify-content: center;align-items: center;flex-direction: column;}
  i{font-size: 30px;}

}
.mark{font-size:30px;margin-top:.2rem}





`