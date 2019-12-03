import React, { Component } from 'react'
import {PageContainer} from "common/styled"
import {CareConinter} from "./style"
export default class Order extends Component {
    render() {
        return (
            <PageContainer>
               <CareConinter className="car">
                <div className="head">
                    <span>我的购物袋</span><span className="goback"><i className="iconfont">&#xe610;</i></span>
                </div>
                <div className="main">
                    <div className="product">
                        <input type="checkbox"/>
                        <img src="https://pic.cdfgsanya.com/assets/upload/product/a1126428065d44ad2e5fd39560c9a9d8_300x300.jpg"/>
                        <div className="info">
                            <p>魅惑润唇膏套装</p>
                            <p>促销价：<span>￥177</span></p>
                            <s>免税价：996</s>
                            <div className="btn"><span className="btn2"><button>-</button><input type="text" placeholder="1" /><button>+</button></span><span>删除</span></div>
                        </div>
                    </div>
                   
                   
                </div>
                    <div className="complate">
                        <div className="allcheck">
                            <span><input type="checkbox" />全选</span>
                        </div>
                        <div className="money">
                            应付金额：￥3799
                        </div>
                        <div className="sum">
                            去结算(1)
                        </div>
                    </div>
            </CareConinter>
    
            </PageContainer>
        )
    }
}
