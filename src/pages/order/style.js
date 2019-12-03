import styled from "styled-components"

export const CareConinter = styled.div`

height: 100%;display: flex;flex-direction: column;background: #f8f8f8;

.head{height: 1rem !important;display: flex;background: #fff;color: #444;box-shadow: 0 0 0.1rem #ccc;z-index: 1;align-items: center;position:relative
    .goback{position:absolute;left:.2rem
    i{font-size:40px}
    }
}
.head span{margin: auto;font-size:35px;line-height: 1rem;}

.main{overflow-y: auto;padding-bottom: 1rem;
    .product{height:2.8rem;display: flex;align-items: center;padding:0 .3rem ;border-bottom: 1px solid #aaa;background: #fff;
        img{height: 1.6rem;width: 1.6rem;margin: 0.2rem 0.4rem;}
        input{width: .35rem;height: .35rem;}
        .info{width: 5rem;font-size: 30px;
            p:nth-child(1){color: #333;font-size:25px;}
            p{margin-bottom: .05rem;font-size:25px}
            p:nth-child(2) span{color: #c33;font-weight: bolder;}
            s {color: #999;margin-bottom: .05rem;font-size:20px;}
            button{background:#f5f5f5;border:0;width: 50px;height: 35px;font-size: 35px;line-height:35px;}
            .btn{display: flex;align-items: center;width:90%;justify-content: space-between;margin-top:0.2rem;
                input{font-size: 30px;text-align: center;width: 50px;height: 35px;}
                }
            .btn2{display: flex; align-items: center;border:1px solid #000;}
        
        }
    
    }

}
.complate{height: 1rem;background: #fff;position: fixed;bottom:1rem;width: 100%;display: flex;justify-content: flex-start;box-shadow: 0 0 0.2rem #ccc;
    .sum {width: 2rem;height: 100%;background: #c33;color: #fff;line-height: 1rem;text-align: center;float: right;position: absolute;right: 0;}
    .money{min-width: 2rem;height: 100%;;line-height: 1rem;text-align: center;float: right;position: absolute;right: 2rem;padding: 0 .2rem;color: red;}
    .allcheck{width: 2rem;height: 100%;display: flex;align-items: center;font-size: 35px;
        span{margin: auto;}
        input{width: .3rem;height: .3rem;}
    
    }

}

`