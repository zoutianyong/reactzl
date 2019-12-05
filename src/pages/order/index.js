import React, { Component } from 'react'
import { PageContainer } from "common/styled"
import { CareConinter } from "./style"
import {connect} from "react-redux"
import {mapStateToProps,mapDispatchToProps} from "./mapstore"
@connect(mapStateToProps,mapDispatchToProps)
 class Order extends Component {
    render() {
        let arr = JSON.parse(localStorage.getItem("car"))
        
        return (
            <PageContainer>
                <CareConinter className="car">
                    <div className="head">
                        <span>我的购物袋</span><span className="goback"><i className="iconfont">&#xe610;</i></span>
                    </div>
                    <div className="main">
                        {
                            arr.map((item, index) => (
                                <div className="product" key={index}>
                                    <input type="checkbox" checked={item.sign} onChange={this.handStateChange.bind(this,index)} />  {/* onClick={this.onlyCheck.bind(this,index)}  */}
                                    <img alt="" src={item.imgs} />
                                    <div className="info">
                                        <p>{item.name}</p>
                                        <p>促销价：<span>￥{parseInt(item.price)}</span></p>
                                        <s>免税价：996</s>
                                        <div className="btn">
                                            <span className="btn2">
                                                <button onClick={this.handleReducer.bind(this,index)}>-</button><input type="text" placeholder={item.num} />
                                                <button onClick={this.handleAdd.bind(this,index)}>+</button>
                                            </span>
                                            <span onClick={this.handleDelete.bind(this,index)}>删除</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="complate">
                        <div className="allcheck">
                            <span><input type="checkbox" ref="allcheck" onClick={this.handleCheckedAll.bind(this)} />全选</span>
                        </div>
                        <div className="money">
                            应付金额：￥<span ref="price">0</span>
                        </div>
                        <div className="sum">
                            去结算(<span ref="sums">0</span>)
                        </div>
                    </div>
                </CareConinter>
            </PageContainer>
        )
    }
    handleAdd(index){
        let arr = JSON.parse(localStorage.getItem("car"))
        arr[index].num++;
        localStorage.setItem("car", JSON.stringify(arr))
        this.pricefunction()
        this.forceUpdate()
    }
    handleReducer(index){
        let arr = JSON.parse(localStorage.getItem("car"))
        if(arr[index].num>1){
            arr[index].num--;
        }else{
            arr[index].num=1
        }
        
        localStorage.setItem("car", JSON.stringify(arr))
        this.pricefunction()
        this.forceUpdate()
    }
    handleDelete(index){
        let arr = JSON.parse(localStorage.getItem("car"))
        arr.splice(index,1)
        localStorage.setItem("car", JSON.stringify(arr))
        this.pricefunction()
        this.forceUpdate()
    }
    
    onlyCheck(index){
       
        this.props.checkOnly(index)
    }



    handStateChange(index){
        let arr = JSON.parse(localStorage.getItem("car"))
        arr[index].sign=!arr[index].sign;
        localStorage.setItem("car", JSON.stringify(arr))
        var mark=true
        for(let i=0;i<arr.length;i++){
            if(arr[i].sign===false){
                mark=false
                break;
            }
        }
        if(mark===true){
            this.refs.allcheck.checked=true
        }else{
            this.refs.allcheck.checked=false
        }
        this.pricefunction()
        this.forceUpdate()
    }
    handleCheckedAll(){ 
        let arr = JSON.parse(localStorage.getItem("car"))
        this.refs.allcheck.checked=this.refs.allcheck.checked //!!!!!!!!!!!!
       
        for(let i=0;i<arr.length;i++){
            arr[i].sign=this.refs.allcheck.checked      
        }
        localStorage.setItem("car", JSON.stringify(arr))
        this.pricefunction()
        this.forceUpdate()
    }
    componentDidMount(){
        let arr = JSON.parse(localStorage.getItem("car"))
        localStorage.setItem("car", JSON.stringify(arr))
        var mark=true;
        let allprice=0;
        for(let i=0;i<arr.length;i++){
            if(arr[i].sign===false){
                mark=false
               
            }else{
                allprice=allprice+parseInt(arr[i].price)
            }
        }
        if(mark===true){
            this.refs.allcheck.checked=true
        }else{
            this.refs.allcheck.checked=false
        }
        console.log(this.refs.price.innerHTML)
        
    }
    pricefunction(){
        let arr = JSON.parse(localStorage.getItem("car"))
        let allprice=0;
        let sums=0;
        for(let i=0;i<arr.length;i++){
            if(arr[i].sign===false){
              
               
            }else{
                allprice=allprice+parseInt(arr[i].price)
                sums=sums+arr[i].num
            }
        }
        this.refs.price.innerHTML=allprice
        this.refs.sums.innerHTML=sums
    }
}

export default  Order
