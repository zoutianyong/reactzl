import React, { Component } from 'react'
import {PageContainer} from "common/styled"
import {TypeConinter} from "./style";
import {connect}from "react-redux"
import {withRouter} from "react-router-dom"
import {mapStateToProps,mapDispatchToProps} from "./mapstore"

@withRouter
@connect(mapStateToProps,mapDispatchToProps)
 class Type extends Component {
     constructor(){
         super()
         this.state={
             color:0,
             pic:[
                "https://pic.cdfgsanya.com/assets/upload/img/45dfcf545905d4581d913c3848e62500.jpg",
                "https://pic.cdfgsanya.com/assets/upload/img/1ad72d76c95a7475d0e2a0976595edc1.jpg",
               
                "https://pic.cdfgsanya.com/assets/upload/img/b8de986e72ddd7b47a6479c2d2226700.jpg",
                "https://pic.cdfgsanya.com/assets/upload/img/b289fd3ac54f47bc3ec3d1c2e96be013.jpg",
                "https://pic.cdfgsanya.com/assets/upload/img/8e7e726361464960b35c26cf7e833a89.jpg",
                "https://pic.cdfgsanya.com/assets/upload/img/54207dc5547ddd54515dbfd1fb3abac5.jpg",
                "https://pic.cdfgsanya.com/assets/upload/img/54207dc5547ddd54515dbfd1fb3abac5.jpg",
             ],
             flag:0
         }
     }
    render() {
        let {color}=this.state
        let {tyofLIst}=this.props;
        let {pic}=this.state
        let {flag}=this.state
        return (
            <PageContainer>
                    <TypeConinter >
                <div className="head">
                    
                    <img alt="" src="https://pic.cdfgsanya.com/assets/upload/img/2e8a31ebeb903855d9b66212a02708f8.png" />
                    <div className="head_input">
                    <span className="iconfont searchIco">&#xe654;</span>
                        <span className="searchFont">搜索：分类 品牌 系列 商品</span>
                    </div>
                  
                </div>
                <div className="content">
                    <div className="left">
                        <ul>
                            <li onClick={this.props.changeRender.bind(this,225510,2)}><span onClick={this.handleChange.bind(this,0)} className={color===0?"color":""}> 美妆</span></li>
                            <li onClick={this.props.changeRender.bind(this,225509,2)}><span onClick={this.handleChange.bind(this,1)} className={color===1?"color":""}> 香水</span></li>
                            <li onClick={this.props.changeRender.bind(this,225511,2)}><span onClick={this.handleChange.bind(this,2)} className={color===2?"color":""}> 腕表</span></li>
                            <li onClick={this.props.changeRender.bind(this,225512,2)}><span onClick={this.handleChange.bind(this,3)} className={color===3?"color":""}> 箱包</span></li>
                            <li onClick={this.props.changeRender.bind(this,225513,2)}><span onClick={this.handleChange.bind(this,4)} className={color===4?"color":""}> 配饰</span></li>
                            <li onClick={this.props.changeRender.bind(this,225514,2)}><span onClick={this.handleChange.bind(this,5)} className={color===5?"color":""}> 鞋帽</span></li>
                            <li onClick={this.props.changeRender.bind(this,225515,2)}><span onClick={this.handleChange.bind(this,6)} className={color===6?"color":""}> 生活</span></li>
                            {/* {
                               tyofLIst.map((item,index)=>(
                               <li titpic={item.src} key={index}><span>{item.name}</span> </li>
                               )) 
                            } */}
                        </ul>
                    </div>
                    <div className="right">
                        <img alt="" src={pic[flag]}/>
                        <div>
                           
                           {
                               tyofLIst.map((item,index)=>(
                               <div key={index}> 
                                    <div className="title">
                                        <span>{item.name}</span>
                                        <span>查看全部 ></span>
                                    </div>
                                    <ul>
                                       
                                        {
                                            item.subNavigations.map((child)=>(
                                                <li key={child.id} onClick={this.handleClick.bind(this,child)}>
                                                    <img alt="" src={child.pic} />
                                                    <span>{child.name}</span>
                                                </li> 
                                            ))
                                        }
                                    </ul>
                               </div>
                               
                               )) 
                           }
                           
                        </div>
                        
                    </div>

                </div>
            </TypeConinter>
       
            </PageContainer>
        )
    }
    componentDidMount(){
        this.props.handleType()
    }
    handleChange(index){
        this.setState({
            color:index,
            flag:index
        })
    }
    handleClick(child){
        this.props.history.push("/list")
    }
}


export default Type