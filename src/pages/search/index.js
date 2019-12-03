import React from "react";
import "./index.css";
import {withRouter} from "react-router-dom"
@withRouter

class Search extends React.Component{
    render(){
        return (
            <div className="search">
                <div className="searchTop">
                    <div className="searchLeft" onClick={this.handleBack.bind(this)}>
                        <span className="iconfont">&#xe610;</span>
                    </div>
                    <div className="searchCenter">
                        <div className="searchCenterLeft"><span className="iconfont">&#xe654;</span></div>
                        <input className="searchInput" placeholder="搜索:分类 品牌 系列 商品" onChange={this.handleSearch.bind(this)}></input>
                    </div>
                    <div className="searchRight">
                        <span>搜索</span>
                    </div>
                </div>
                <div className="hotSearch">
                    <span>热门搜索</span>
                </div>
                <div className="hotList">
                    <span>口红</span>
                    <span>眼霜</span>
                    <span>洗面奶</span>
                    <span>防晒</span>
                    <span>面膜</span>
                    <span>护肤</span>
                </div>
                <div className="searchList">
                    <ul>
                        <li>
                            <p>迪奥999</p>
                        </li>
                        <li><p>迪奥999</p></li>
                        <li><p>迪奥999</p></li>
                        <li><p>迪奥999</p></li>
                        <li><p>迪奥999</p></li>
                        <li><p>迪奥999</p></li>
                        <li><p>迪奥999</p></li>
                        <li><p>迪奥999</p></li>
                        <li><p>迪奥999</p></li>
                        <li><p>迪奥999</p></li>
                    </ul>
                </div>
            </div>
        )
    }
    handleBack(){
        this.props.history.go(-1);
    }
    handleSearch(){
        console.log(this.value);
    }
}

export default Search;