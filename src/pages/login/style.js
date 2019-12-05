import styled from "styled-components"

export const LoginContent=styled.div`
height:100%;background:#f9f9f9;

.head{height: 1rem !important;display: flex;background: #fff;color: #444;box-shadow: 0 0 0.1rem #ccc;z-index: 1;align-items: center;position:relative
    .goback{position:absolute;left:.2rem
    i{font-size:40px}
    }
}
.head span{margin: auto;font-size:35px;line-height: 1rem;}

.login .change{height:0.9rem;display:flex;justify-content:center;align-items:center;padding-right:.7rem;

        span{padding-bottom:.1rem;border-bottom: 0.05rem solid #c33;font-size:32px;margin-left:.6rem}
        
}
.login .input{height:4.2rem;width:100%;
    input{width:80%;height:0.8rem;margin-left:10%;margin-top:.3rem;font-size:26px;padding-left:.3rem;border :1px solid #999; border-radius:10px;}

    p{display:flex;justify-content:space-between;align-items:center;padding:0 .9rem;margin-top:.5rem;font-size:24px}
    u{color:#c33}
    .btn{width:80%;height:.8rem;margin: 0 auto;margin-top:.3rem;background:#c33;border-radius:.1rem;line-height:.8rem;text-align:center;color:#fff;font-size:35px}

}
.active{display:none;border-bottom: 0.05rem solid #fff}
.actives{border-bottom: 0.05rem solid #eee !important}


`
