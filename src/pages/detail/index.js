import React from "react";
import { connect } from "react-redux"
import { DetailContener } from "./style"
import { mapStateToProps, mapDispatchToProps } from "./mapstore"
import Item from "_antd-mobile@2.3.1@antd-mobile/lib/popover/Item";
@connect(mapStateToProps, mapDispatchToProps)
class Detail extends React.Component {
    constructor() {
        super()
    }
    render() {
        let obj = this.props.match.params
        let { detailList } = this.props
        return (
            <DetailContener className="detail">
                <div className="head">
                    <span>商品详情</span><span className="goback"><i className="iconfont">&#xe610;</i></span>
                </div>
                <div className="pic">
                    <img src={detailList.pics} />
                </div>
                <div className="info">
                    <div className="price">
                        <span>￥<strong>{parseInt(obj.newprice)}</strong></span><span><s>￥7800</s></span><span className="manjian">满减</span>
                    </div>
                    <h2>{obj.name}</h2>
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
                    <div className="buy" onClick={this.addProduct.bind(this,detailList.pics)}>立即购买</div>

                </div>
            </DetailContener>
        )
    }
    componentDidMount() {
        let mark = this.props.match.params.id
        this.props.getPic(mark)
    }
    addProduct(img){
        let name=this.props.match.params.name
        let price=this.props.match.params.newprice
        let num=1
        let imgs=img[0]

       
        let info={
            name,price,imgs,num
        }
        console.log(info)
        let car=localStorage.getItem("car")?JSON.parse(localStorage.getItem("car")):[]
       
        car.push(info)
            
        
        
        
        localStorage.setItem("car",JSON.stringify(car))
    }
}

export default Detail;


