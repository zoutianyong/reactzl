import styled from "styled-components"

export const MineContainer=styled.div`
background: #eee;height: 100%;overflow-y:auto ;
.head{height:3rem;width: 100%;background: url("https://pic.cdfgsanya.com/assets/upload/user/background.jpg") no-repeat ;background-size: 100%;padding:0.2rem ;
    img{width: 1.2rem;height: 1.2rem;border-radius: .6rem;}
}
.user{display: flex;font-size: 35px;align-items: center;color: #333;margin-top: 1.3rem;}
.allbill{height: 1rem;display: flex;align-items: center;justify-content: space-between;padding: 0 .2rem;
    font-size: 30px;color:#999;background: #fff;margin-top: .2rem;
    i{font-size: 45px;color: #999;}
    }
    .navbar{height: 1.6rem;display: flex;justify-content: space-around;align-items: center;font-size: 30px;margin-top: 2px;background: #fff;margin-bottom: .3rem;color: #999; 
        i{font-size: 33px;}}
.listsign{height: 0.9rem;display: flex;align-items: center;justify-content: space-between;padding: 0 .2rem;
    font-size: 30px;color:#999;background: #fff;margin-top: 2px;}

    .listsign i{font-size: 45px;color: #999;}
.center{line-height: 0.9rem;display: flex;align-items: center;span{margin-left: .1rem;}}

.listtwo{margin-top: 0.3rem;}
`