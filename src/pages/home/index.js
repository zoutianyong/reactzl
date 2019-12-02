import React, { Component } from 'react'
import {Shouye,Search,Banner,Navs,Line,BigImg,Year,YearList,StarList,AllBuy,AllBuyList,Up} from "./styled"
export default class Home extends Component {
    render() {
        return (
                 <Shouye>
                {/* <h2>ShouYe</h2> */}
                <Search>
                    
                    <div className="logo">
                        <img src="https://pic.cdfgsanya.com/assets/upload/img/692db2e3ff8fbf29f725bf328844abf3.png" />
                    </div>
                    <div className="searchBox">
                        <span className="iconfont searchIco">&#xe654;</span>
                        <span className="searchFont">搜索：分类 品牌 系列 商品</span>
                    </div>
                    
                </Search>
                <Banner>
                    <img src="https://pic.cdfgsanya.com/assets/upload/img/74d958a45aa646d08a1848c25a24eab1.jpg" />
                </Banner>
                <Navs>
                    <div>
                        <p className="iconfont navsIco">&#xe614;</p>
                        <p>排行榜</p>
                    </div>
                    <div>
                        <p className="iconfont navsIco">&#xe604;</p>
                        <p>我的订单</p>
                    </div>
                    <div>
                        <p className="iconfont navsIco">&#xe63f;</p>
                        <p>优惠卷</p>
                    </div>
                    <div>
                        <p className="iconfont navsIco">&#xe620;</p>
                        <p>购物流程</p>
                    </div>
                    <div>
                        <p className="iconfont navsIco">&#xe612;</p>
                        <p>常见问题</p>
                    </div>
                </Navs>
                <Line>
                    <div className="lineLeft">
                        <img src="https://pic.cdfgsanya.com/assets/upload/img/afb7e0dd0833eb3296826392a0486b9f.jpg"/>
                    </div>
                    <div className="lineRight">
                        <img src="https://pic.cdfgsanya.com/assets/upload/img/25d53864112226e14277c8c37ea73738.jpg"/>
                    </div>
                </Line>
                <BigImg>
                    <img src="https://pic.cdfgsanya.com/assets/upload/img/e4a0c67c4fb4cbf1bc2a836df7d8f800.jpg"/>
                </BigImg>
                <Year>
                    <span className="yearLeft"></span>
                    <span className="yearCenter">冬季特卖惠</span>
                    <span className="yearRight"></span>
                </Year>
                <YearList>
                    <img src="https://pic.cdfgsanya.com/assets/upload/img/4443d67ca43763f09aeba759950169f5.jpg"/>
                    <div className="List_One">
                        <ul>
                            <li>
                                <img src="https://pic.cdfgsanya.com/assets/upload/product/f6ddef892bcbb9737bb1da3559958808_400x400.jpg"/>
                                <p>迪奥</p>
                                <p className="over">烈艳蓝金唇膏 999（新）套装</p>
                                <p>促销价:￥576.00</p>
                                <span className="ls">立省￥64.00</span>
                            </li>
                            <li>
                                <img src="https://pic.cdfgsanya.com/assets/upload/product/f6ddef892bcbb9737bb1da3559958808_400x400.jpg"/>
                                <p>迪奥</p>
                                <p className="over">烈艳蓝金唇膏 999（新）套装</p>
                                <p>促销价:￥576.00</p>
                                <span className="ls">立省￥64.00</span>
                            </li>
                            <li>
                                <img src="https://pic.cdfgsanya.com/assets/upload/product/f6ddef892bcbb9737bb1da3559958808_400x400.jpg"/>
                                <p>迪奥</p>
                                <p className="over">烈艳蓝金唇膏 999（新）套装</p>
                                <p>促销价:￥576.00</p>
                                <span className="ls">立省￥64.00</span>
                            </li>
                            <li>
                                <img src="https://pic.cdfgsanya.com/assets/upload/product/f6ddef892bcbb9737bb1da3559958808_400x400.jpg"/>
                                <p>迪奥</p>
                                <p className="over">烈艳蓝金唇膏 999（新）套装</p>
                                <p>促销价:￥576.00</p>
                                <span className="ls">立省￥64.00</span>
                            </li>
                            <li>
                                <img src="https://pic.cdfgsanya.com/assets/upload/product/f6ddef892bcbb9737bb1da3559958808_400x400.jpg"/>
                                <p>迪奥</p>
                                <p className="over">烈艳蓝金唇膏 999（新）套装</p>
                                <p>促销价:￥576.00</p>
                                <span className="ls">立省￥64.00</span>
                            </li>
                            <li>
                                <img src="https://pic.cdfgsanya.com/assets/upload/product/f6ddef892bcbb9737bb1da3559958808_400x400.jpg"/>
                                <p>迪奥</p>
                                <p className="over">烈艳蓝金唇膏 999（新）套装</p>
                                <p>促销价:￥576.00</p>
                                <span className="ls">立省￥64.00</span>
                            </li>
                            <li>
                                <img src="https://pic.cdfgsanya.com/assets/upload/product/f6ddef892bcbb9737bb1da3559958808_400x400.jpg"/>
                                <p>迪奥</p>
                                <p className="over">烈艳蓝金唇膏 999（新）套装</p>
                                <p>促销价:￥576.00</p>
                                <span className="ls">立省￥64.00</span>
                            </li>
                        </ul>
                    </div>
                </YearList>
                <Year>
                    <span className="yearLeft"></span>
                    <span className="yearCenter">滋润持久 黄皮真爱</span>
                    <span className="yearRight"></span>
                </Year>
                <YearList>
                    <img src="https://pic.cdfgsanya.com/assets/upload/img/4443d67ca43763f09aeba759950169f5.jpg"/>
                    <div className="List_One">
                        <ul>
                            <li>
                                <img src="https://pic.cdfgsanya.com/assets/upload/product/f6ddef892bcbb9737bb1da3559958808_400x400.jpg"/>
                                <p>迪奥</p>
                                <p className="over">烈艳蓝金唇膏 999（新）套装</p>
                                <p>促销价:￥576.00</p>
                                <span className="ls">立省￥64.00</span>
                            </li>
                            <li>
                                <img src="https://pic.cdfgsanya.com/assets/upload/product/f6ddef892bcbb9737bb1da3559958808_400x400.jpg"/>
                                <p>迪奥</p>
                                <p className="over">烈艳蓝金唇膏 999（新）套装</p>
                                <p>促销价:￥576.00</p>
                                <span className="ls">立省￥64.00</span>
                            </li>
                            <li>
                                <img src="https://pic.cdfgsanya.com/assets/upload/product/f6ddef892bcbb9737bb1da3559958808_400x400.jpg"/>
                                <p>迪奥</p>
                                <p className="over">烈艳蓝金唇膏 999（新）套装</p>
                                <p>促销价:￥576.00</p>
                                <span className="ls">立省￥64.00</span>
                            </li>
                            <li>
                                <img src="https://pic.cdfgsanya.com/assets/upload/product/f6ddef892bcbb9737bb1da3559958808_400x400.jpg"/>
                                <p>迪奥</p>
                                <p className="over">烈艳蓝金唇膏 999（新）套装</p>
                                <p>促销价:￥576.00</p>
                                <span className="ls">立省￥64.00</span>
                            </li>
                            <li>
                                <img src="https://pic.cdfgsanya.com/assets/upload/product/f6ddef892bcbb9737bb1da3559958808_400x400.jpg"/>
                                <p>迪奥</p>
                                <p className="over">烈艳蓝金唇膏 999（新）套装</p>
                                <p>促销价:￥576.00</p>
                                <span className="ls">立省￥64.00</span>
                            </li>
                            <li>
                                <img src="https://pic.cdfgsanya.com/assets/upload/product/f6ddef892bcbb9737bb1da3559958808_400x400.jpg"/>
                                <p>迪奥</p>
                                <p className="over">烈艳蓝金唇膏 999（新）套装</p>
                                <p>促销价:￥576.00</p>
                                <span className="ls">立省￥64.00</span>
                            </li>
                            <li>
                                <img src="https://pic.cdfgsanya.com/assets/upload/product/f6ddef892bcbb9737bb1da3559958808_400x400.jpg"/>
                                <p>迪奥</p>
                                <p className="over">烈艳蓝金唇膏 999（新）套装</p>
                                <p>促销价:￥576.00</p>
                                <span className="ls">立省￥64.00</span>
                            </li>
                        </ul>
                    </div>
                </YearList>
                <StarList>
                    <div className="starListTop">
                        <div className="startLeft"></div>
                        <div className="startCenter">秘幂假日明星套装 惊喜上线</div>
                        <div className="startRight"></div>
                    </div>
                    <img src="https://pic.cdfgsanya.com/assets/upload/img/75641b676f6408cac73d5d0bb26fbcf8.jpg"/>
                </StarList>
                <StarList>
                    <div className="starListTop">
                        <div className="startLeft"></div>
                        <div className="startCenter">秘幂假日明星套装 惊喜上线</div>
                        <div className="startRight"></div>
                    </div>
                    <img src="https://pic.cdfgsanya.com/assets/upload/img/75641b676f6408cac73d5d0bb26fbcf8.jpg"/>
                </StarList>
                <Year>
                    <span className="yearLeft"></span>
                    <span className="yearCenter">滋润持久 黄皮真爱</span>
                    <span className="yearRight"></span>
                </Year>
                <YearList>
                    <img src="https://pic.cdfgsanya.com/assets/upload/img/4443d67ca43763f09aeba759950169f5.jpg"/>
                    <div className="List_One">
                        <ul>
                            <li>
                                <img src="https://pic.cdfgsanya.com/assets/upload/product/f6ddef892bcbb9737bb1da3559958808_400x400.jpg"/>
                                <p>迪奥</p>
                                <p className="over">烈艳蓝金唇膏 999（新）套装</p>
                                <p>促销价:￥576.00</p>
                                <span className="ls">立省￥64.00</span>
                            </li>
                            <li>
                                <img src="https://pic.cdfgsanya.com/assets/upload/product/f6ddef892bcbb9737bb1da3559958808_400x400.jpg"/>
                                <p>迪奥</p>
                                <p className="over">烈艳蓝金唇膏 999（新）套装</p>
                                <p>促销价:￥576.00</p>
                                <span className="ls">立省￥64.00</span>
                            </li>
                            <li>
                                <img src="https://pic.cdfgsanya.com/assets/upload/product/f6ddef892bcbb9737bb1da3559958808_400x400.jpg"/>
                                <p>迪奥</p>
                                <p className="over">烈艳蓝金唇膏 999（新）套装</p>
                                <p>促销价:￥576.00</p>
                                <span className="ls">立省￥64.00</span>
                            </li>
                            <li>
                                <img src="https://pic.cdfgsanya.com/assets/upload/product/f6ddef892bcbb9737bb1da3559958808_400x400.jpg"/>
                                <p>迪奥</p>
                                <p className="over">烈艳蓝金唇膏 999（新）套装</p>
                                <p>促销价:￥576.00</p>
                                <span className="ls">立省￥64.00</span>
                            </li>
                            <li>
                                <img src="https://pic.cdfgsanya.com/assets/upload/product/f6ddef892bcbb9737bb1da3559958808_400x400.jpg"/>
                                <p>迪奥</p>
                                <p className="over">烈艳蓝金唇膏 999（新）套装</p>
                                <p>促销价:￥576.00</p>
                                <span className="ls">立省￥64.00</span>
                            </li>
                            <li>
                                <img src="https://pic.cdfgsanya.com/assets/upload/product/f6ddef892bcbb9737bb1da3559958808_400x400.jpg"/>
                                <p>迪奥</p>
                                <p className="over">烈艳蓝金唇膏 999（新）套装</p>
                                <p>促销价:￥576.00</p>
                                <span className="ls">立省￥64.00</span>
                            </li>
                            <li>
                                <img src="https://pic.cdfgsanya.com/assets/upload/product/f6ddef892bcbb9737bb1da3559958808_400x400.jpg"/>
                                <p>迪奥</p>
                                <p className="over">烈艳蓝金唇膏 999（新）套装</p>
                                <p>促销价:￥576.00</p>
                                <span className="ls">立省￥64.00</span>
                            </li>
                        </ul>
                    </div>
                </YearList>
                <AllBuy>
                    <div className="allBuyLeft"></div>
                    <div className="allBuyCenter">大家都在买</div>
                    <div className="allBuyRight"></div>
                </AllBuy>
                <AllBuyList>
                    <div>
                        <img src="https://pic.cdfgsanya.com/assets/upload/product/ac4e21507bac15cbcf610a1382c39ef9_400x400.jpg"/>
                        <p>特润修护精华眼霜双支装</p>
                        <p className="allBuyPrice">￥680.00<del>￥1020.00</del></p>
                        <p><span>搭配专享</span><span>秘幂假日</span></p>
                    </div>
                    <div>
                        <img src="https://pic.cdfgsanya.com/assets/upload/product/ac4e21507bac15cbcf610a1382c39ef9_400x400.jpg"/>
                        <p>特润修护精华眼霜双支装</p>
                        <p className="allBuyPrice">￥680.00<del>￥1020.00</del></p>
                        <p><span>搭配专享</span><span>秘幂假日</span></p>
                    </div>
                    <div>
                        <img src="https://pic.cdfgsanya.com/assets/upload/product/ac4e21507bac15cbcf610a1382c39ef9_400x400.jpg"/>
                        <p>特润修护精华眼霜双支装</p>
                        <p className="allBuyPrice">￥680.00<del>￥1020.00</del></p>
                        <p><span>搭配专享</span><span>秘幂假日</span></p>
                    </div>
                    <div>
                        <img src="https://pic.cdfgsanya.com/assets/upload/product/ac4e21507bac15cbcf610a1382c39ef9_400x400.jpg"/>
                        <p>特润修护精华眼霜双支装</p>
                        <p className="allBuyPrice">￥680.00<del>￥1020.00</del></p>
                        <p><span>搭配专享</span><span>秘幂假日</span></p>
                    </div>
                    <div>
                        <img src="https://pic.cdfgsanya.com/assets/upload/product/ac4e21507bac15cbcf610a1382c39ef9_400x400.jpg"/>
                        <p>特润修护精华眼霜双支装</p>
                        <p className="allBuyPrice">￥680.00<del>￥1020.00</del></p>
                        <p><span>搭配专享</span><span>秘幂假日</span></p>
                    </div>
                    <div>
                        <img src="https://pic.cdfgsanya.com/assets/upload/product/ac4e21507bac15cbcf610a1382c39ef9_400x400.jpg"/>
                        <p>特润修护精华眼霜双支装</p>
                        <p className="allBuyPrice">￥680.00<del>￥1020.00</del></p>
                        <p><span>搭配专享</span><span>秘幂假日</span></p>
                    </div>
                    <div>
                        <img src="https://pic.cdfgsanya.com/assets/upload/product/ac4e21507bac15cbcf610a1382c39ef9_400x400.jpg"/>
                        <p>特润修护精华眼霜双支装</p>
                        <p className="allBuyPrice">￥680.00<del>￥1020.00</del></p>
                        <p><span>搭配专享</span><span>秘幂假日</span></p>
                    </div>
                    <div>
                        <img src="https://pic.cdfgsanya.com/assets/upload/product/ac4e21507bac15cbcf610a1382c39ef9_400x400.jpg"/>
                        <p>特润修护精华眼霜双支装</p>
                        <p className="allBuyPrice">￥680.00<del>￥1020.00</del></p>
                        <p><span>搭配专享</span><span>秘幂假日</span></p>
                    </div>
                </AllBuyList>
                {/* <h2>{shouyeList[0].name}</h2> */}
                {/* <button onClick={this.handleGetShouYeMessage.bind(this)}>点击获取信息</button>
                {
                    shouyeList.map((item,index)=>(
                        <div key={index}>
                            {item.name}
                        </div>
                    ))
                } */}
                <Up><span className="iconfont">&#xe62c;</span></Up>
            </Shouye>
        )
    }
}
