import React from "react";

import {DetailContener} from "./style"
class Detail extends React.Component{
    render(){
        return (
            <DetailContener className="detail">
               <div className="head">
                    <span>商品详情</span><span className="goback"><i className="iconfont">&#xe610;</i></span>
               </div>
               <div className="pic">
                   <img src="https://pic.cdfgsanya.com/assets/upload/product/acba4103c85dadfc45496c97f875d067_900x900.jpg"/>
               </div>
               <div className="info">
                   <div className="price">
                       <span>￥<strong>525.00</strong></span><span><s>￥7800</s></span><span className="manjian">满减</span>
                   </div>
                   <h2>资生堂悦薇珀翡塑颜抗皱霜</h2>
                   <p>新资生堂眼纹“小针管”</p>
                   <ul>日本品牌</ul>
               </div>
               <p className="mark">说明：商品限购12件</p>
               <div className="foot">
                   <span>
                       <i className="iconfont">&#xe613;</i>
                       <p>收藏</p>
                   </span>
                   <span>
                   <i className="iconfont">&#xe6d7;</i>
                       <p>购物袋</p>
                   </span>
                   <div className="add">添加到购物车</div>
                   <div className="buy">立即购买</div>

               </div>
            </DetailContener>
        )
    }
}

export default Detail;