import React, { Component, Fragment } from 'react'
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { Shouye, Search, Banner, Navs, Line, BigImg, Year, YearList, StarList, AllBuy} from "./styled"
import { mapStateToProps, mapDispatchToProps } from "./homeStore"
@connect(mapStateToProps, mapDispatchToProps)
@withRouter
class Home extends Component {
    render() {
        let { homeList } = this.props ? this.props : '';
        console.log(homeList.floors)
        return (
             <Shouye>

                {/* <h2>ShouYe</h2> */}
                <Search>

                    <div className="logo">
                        <img src="https://pic.cdfgsanya.com/assets/upload/img/692db2e3ff8fbf29f725bf328844abf3.png" alt="" />
                    </div>
                    <div className="searchBox" onClick={this.handleSearch.bind(this)}>
                        <span className="iconfont searchIco">&#xe654;</span>
                        <span className="searchFont">搜索：分类 品牌 系列 商品</span>
                    </div>

                </Search>
                <Banner>
                    <img src="https://pic.cdfgsanya.com/assets/upload/img/74d958a45aa646d08a1848c25a24eab1.jpg" alt="true" />
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
                        {
                            homeList.boards ? homeList.boards.map((item, index) => (
                                <div key={item.pic}><img src={item.pic} alt="" /></div>
                            )) : ""
                        }

                    </div>

                </Line>
                <BigImg>
                    {
                        homeList.big_boards ? homeList.big_boards.map((item, index) => (
                            <div key={item.pic}><img src={item.pic} alt="" /></div>
                        )) : ""
                    }

                </BigImg>
                {
                    homeList.floors ? homeList.floors.map((item, index) => (
                        <Fragment key={Math.random()}>
                            <Year>
                                <span className="yearLeft"></span>
                                <span className="yearCenter" key={item.title}>{item.title}</span>
                                <span className="yearRight"></span>
                            </Year>
                            <YearList key={item.billboard.pic}>
                                <img src={item.billboard.pic} key={item.billboard.pic} alt="" />
                                <div className="List_One">
                                    <ul>
                                        {
                                            item.products ? item.products.map((child, index) => (
                                                <li key={index} onClick={this.handleLiClick.bind(this,child)}>
                                                    <img src={child.pic} key={child.pic} alt="" />
                                                    <p key={child.brand}>{child.brand}</p>
                                                    <p className="over" key={child.name}>{child.name}</p>
                                                   
                                                 <p>促销价:￥{child.contrastPrice?child.contrastPrice.value:""}</p>

                                                <span className="ls" key={child.salesCount}>立省:￥{child.discountPrice?child.discountPrice.value:"0.00"}</span>
                                                </li>
                                            )) : ""
                                        }

                                    </ul>
                                </div>
                            </YearList>
                        </Fragment>
                    )) : ""
                }

                <StarList>
                    <div className="starListTop">
                        <div className="startLeft"></div>
                        <div className="startCenter">秘幂假日明星套装 惊喜上线</div>
                        <div className="startRight"></div>
                    </div>
                    <img src="https://pic.cdfgsanya.com/assets/upload/img/75641b676f6408cac73d5d0bb26fbcf8.jpg" alt="" />
                </StarList>
                <StarList>
                    <div className="starListTop">
                        <div className="startLeft"></div>
                        <div className="startCenter">秘幂假日明星套装 惊喜上线</div>
                        <div className="startRight"></div>
                    </div>
                    <img src="https://pic.cdfgsanya.com/assets/upload/img/03b6e3615156e37f19c35b0585e1e854.png" alt="" />
                </StarList>
                <AllBuy>
                    <div className="allBuyLeft"></div>
                    <div className="allBuyCenter" onClick={this.handleClick.bind(this)}>已到底部</div>
                    <div className="allBuyRight"></div>
                </AllBuy>
                {/* <Up><span className="iconfont" onClick={this.handleClick.bind(this)}>&#xe62c;</span></Up> */}
            </Shouye>
        )
    }
    handleSearch() {
      
        this.props.history.push("/search")
    }
    handleClick(){
        // document.body.scrollTop=0;
        // console.log(111);
    }
    handleLiClick(child){
        this.props.history.push("/detail/" + child.id + "/" + child.contrastPrice.value + "/" + child.name + "/" + child.pic)
        //console.log(222);
    }
    componentDidMount() {
        this.props.handleAsyncHome();
    }
}

export default Home;
