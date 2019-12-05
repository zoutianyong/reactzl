import React, { Component } from 'react'
import {PageContainer} from "common/styled"
import {MineContainer} from "./style"
import {withRouter} from "react-router-dom"

@withRouter
class Mine extends Component {
    render() {
        return (
            <PageContainer>
                <MineContainer className="mine">
                    <div className="head">
                        <div className="user">
                            <div onClick={this.handleMessadeTo.bind(this)}>
                                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574956315083&di=b1d31e6868c67bbd2118067282e60982&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201704%2F27%2F20170427155254_Kctx8.thumb.700_0.jpeg"/>
                            </div>
                            <span>15738756127</span>
                        </div>
                    </div>
                    <div className="allbill">

                        <span >
                        <i className="iconfont">&#xe604;</i>全部订单
                        </span>
                        <span >
                       查询全部订单 >
                        </span>
                    </div>
                    <div className="navbar">
                        <div className="navbarsign">
                            <span>
                                <i className="iconfont">&#xe617;</i>
                            </span>
                                <span>待支付</span>
                        </div>
                        <div className="navbarsign">
                            <span>
                                <i className="iconfont">&#xe603;</i>
                            </span>
                                <span>待提货</span>
                        </div>
                        <div className="navbarsign">
                            <span>
                                <i className="iconfont">&#xe622;</i>
                            </span>
                                <span>已完成</span>
                        </div>
                        <div className="navbarsign">
                            <span>
                                <i className="iconfont">&#xe67b;</i>
                            </span>
                                <span>取消</span>
                        </div>
                    </div>
                     <div className="listsign">
                        <span className="center">
                        <i className="iconfont">&#xe63f;</i><span>我的优惠卷</span>
                        </span>
                        <span >
                       0张可用 >
                        </span>
                    </div>
                    <div className="listsign">
                        <span className="center">
                        <i className="iconfont">&#xe613;</i><span>我的收藏</span>
                        </span>
                        <span >
                       0 >
                        </span>
                    </div>
                    <div className="listsign">
                        <span className="center">
                        <i className="iconfont">&#xe60d;</i><span>浏览记录</span>
                        </span>
                        <span >
                       4 >
                        </span>
                    </div>

                
                    {/*  */}
                    <div className="listsign listtwo">
                        <span className="center">
                        <i className="iconfont">&#xe630;</i><span>我的提货人</span>
                        </span>
                        <span >
                       查询全部订单 >
                        </span>
                    </div>
                    <div className="listsign">
                        <span className="center">
                        <i className="iconfont">&#xe699;</i><span>账户安全</span>
                        </span>
                        <span >
                       查询全部订单 >
                        </span>
                    </div>
                    {/*  */}
                    <div className="listsign listtwo">
                        <span className="center">
                        <i className="iconfont">&#xeb95;</i><span>航班与火车机票更改</span>
                        </span>
                        <span >
                        >
                        </span>
                    </div>
                    <div className="listsign">
                        <span className="center">
                        <i className="iconfont">&#xe601;</i><span>联系我们</span>
                        </span>
                        <span >
                        >
                        </span>
                    </div>
                    <div className="listsign">
                        <span className="center">
                        <i className="iconfont">&#xe63b;</i><span>帮助中心</span>
                        </span>
                        <span >
                        >
                        </span>
                    </div>

                </MineContainer>

            </PageContainer>
        )
    }
    handleMessadeTo(){
         console.log(111);
        this.props.history.push("/message")
    }
}

export default Mine