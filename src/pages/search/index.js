import React,{Component} from "react";
import {SearchStyle} from "./style";
import "./index.css";
import {connect} from "react-redux";
import {mapStateToProps,mapDispatchToProps} from "./searchStore";
import {withRouter} from "react-router-dom"

@withRouter
@connect(mapStateToProps,mapDispatchToProps)
class Search extends Component{
    render(){
        let {searchList}=this.props;
        // console.log(this.props);
        return (
            <SearchStyle>
                <div className="searchTop">
                    <div className="searchLeft" onClick={this.handleBack.bind(this)}>
                        <span className="iconfont">&#xe610;</span>
                    </div>
                    <div className="searchCenter">
                        <div className="searchCenterLeft"><span className="iconfont">&#xe654;</span></div>
                        <input className="searchInput" onChange={this.handleSearch.bind(this)} placeholder="搜索:分类 品牌 系列 商品" onChange={this.handleSearch.bind(this)}></input>
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
                {
                <div className="searchList" style={ searchList ?  {display: 'block'} : { display: 'none'}}>
                    
                    <ul>
                        {
                            searchList?searchList.map((item,index)=>(
                            <li key={item.name}><p>{item.name}</p></li>
                            )):""
                        }                        
                    </ul>
                    
                </div>
                }
            </SearchStyle>
        )
    }
    handleBack(){
        this.props.history.go(-1);
    }
    handleSearch(e){
        let val=e.target.value;
        this.props.changeSearchRender(val)
    }
}

export default Search;