import React, { Component } from 'react'
import { ListContiner } from "./style"
import { connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from "./mapstore"
import { withRouter } from "react-router-dom";
@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class List extends Component {
    render() {
        let { shopList } = this.props
        console.log(shopList.recommendProducts, 111)
        return (

            <ListContiner>
                <div className="head">
                    <span>商品列表</span><span className="goback"><i className="iconfont">&#xe610;</i></span>
                </div>
                <div className="main">

                    {
                        shopList.recommendProducts ? shopList.recommendProducts.map((item, index) => (
                            <div className="product" key={index} onClick={this.handleClick.bind(this, item)}>
                                <img src={item.pic} />
                                <div>{item.name}</div>
                                <p>￥{parseInt(item.salesPrice.value)} </p>
                                <span>满减</span>
                                <div className="bottom"></div>
                                <div className="right"></div>
                            </div>)) : ""
                    }

                </div>
            </ListContiner>

        )
    }//
    handleClick(item) {
        this.props.history.push("/detail/" + item.id + "/" + item.salesPrice.value + "/" + item.name + "/" + item.pic)
    }

    componentDidMount() {
        this.props.handleList()
    }
}


export default List
