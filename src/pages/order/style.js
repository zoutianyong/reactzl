import styled from "styled-components"

export const CareConinter = styled.div`

height: 100%;display: flex;flex-direction: column;background: #eee;

.head{height: 1rem !important;display: flex;background: #fff;color: #444;box-shadow: 0 0 0.1rem #ccc;z-index: 1;align-items: center;position:relative
    .goback{position:absolute;left:.2rem
    i{font-size:40px}
    }
}
.head span{margin: auto;font-size:35px;line-height: 1rem;}

.main{overflow-y: auto;padding-bottom: 1rem;
    .product{height:2.8rem;display: flex;align-items: center;padding:0 .3rem ;border-bottom: 1px solid #aaa;background: #fff;
        img{height: 1.7rem;width: 1.7rem;margin: 0.2rem;}
        input{width: .35rem;height: .35rem;}
        .info{width: 5rem;font-size: 30px;
            p:nth-child(1){color: #333;}
            p{margin-bottom: .1rem;}
            p:nth-child(2) span{color: #c33;font-weight: bolder;}
            s {color: #999;margin-bottom: .1rem}
            button{width: 35px;height: 35px;font-size: 35px;line-height:35px;}
            .btn{display: flex; align-items: center;justify-content: space-between;margin: .1rem 0;
                input{font-size: 30px;text-align: center;}
                }
            .btn2{display: flex; align-items: center;}
        
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