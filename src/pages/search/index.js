import React from "react";
import "./index.css";

class Search extends React.Component{
    render(){
        return (
            <div className="search">
                <div className="searchTop">
                    <div className="searchLeft">
                        <span className="iconfont">&#xe610;</span>
                    </div>
                    <div className="searchCenter">
                        <div className="searchCenterLeft"><span className="iconfont">&#xe654;</span></div>
                        <input className="searchInput" placeholder="搜索:分类 品牌 系列 商品"></input>
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
            </div>
        )
    }
}

export default Search;