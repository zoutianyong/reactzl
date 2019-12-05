import React from "react";
import { connect } from "react-redux"
import { DetailContener } from "./style"
import { mapStateToProps, mapDispatchToProps } from "./mapstore"
import { withRouter } from "react-router-dom"
@withRouter
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
                    <span>商品详情</span><span className="goback" onClick={this.handleBack.bind(this)}><i className="iconfont">&#xe610;</i></span>
                </div>
                <div className="pic">
                    <img src={detailList.pics?detailList.pics:'https://pic.cdfgsanya.com/assets/upload/product/ac4e21507bac15cbcf610a1382c39ef9_400x400.jpg'} alt="" />
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
                    <span onClick={this.jump.bind(this)}>
                        <i className="iconfont">&#xe6d7;</i>
                        <p>购物袋</p>
                    </span>
                    <div className="add" onClick={this.addProduct.bind(this, detailList.pics)}>添加到购物车</div>
                    <div className="buy" >立即购买</div>
                </div>
            </DetailContener>
        )
    }
    componentDidMount() {
        let mark = this.props.match.params.id
        this.props.getPic(mark)
    }
    addProduct(img) {
        let name = this.props.match.params.name
        let price = this.props.match.params.newprice
        let num = 1
        let sign=true
        let imgs = img[0]
        let info = {
            name, price, imgs, num,sign
        }
        let car = localStorage.getItem("car") ? JSON.parse(localStorage.getItem("car")) : []

        var flag = true;
        for (let i = 0; i < car.length; i++) {
            if (car[i].name === info.name) {
                car[i].num++;
                flag = false;
            }
        }
        if (flag === true) {
            car.push(info)
        }
        localStorage.setItem("car", JSON.stringify(car))
    }
    jump() {
        this.props.history.push("/order")
    }
    handleBack(){
        this.props.history.go(-1);
    }
}
export default Detail;


