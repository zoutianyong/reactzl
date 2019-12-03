import React, { Component } from 'react'
import {Pinpai,AllPinPai,PinpaiList,PinpaiTitle,NameList} from "./styled"
import {withRouter} from "react-router-dom"
import {connect} from "react-redux"
import { mapStateToProps, mapDispatchToProps} from "./findStore"
@connect(mapStateToProps,mapDispatchToProps)
@withRouter
class Find extends Component {
    render() {
        let {findList}=this.props?this.props:"";
        let brands=findList.brands
        let pinpaiList=[]
        //console.log(brands)
        
        return (
            <Pinpai>
                {
                   brands?brands.map((item,index)=>{
                       
                    let letterFirst=item.initial;
                       if(this.isPinpaiList(letterFirst,pinpaiList)){
                        pinpaiList.push({index:letterFirst,list:[{id:item.id,name:item.name}]})
                       }else{
                        for(var j=0;j<pinpaiList.length;j++){
                            if(pinpaiList[j].index===letterFirst){
                                pinpaiList[j].list.push({id:item.id,name:item.name});
                                break;
                            }
                        }
                       }
                      
                   }):"",
                   //字典排序
                   pinpaiList.sort((a,b)=>{
                        if(a.index>b.index){
                            return 1;
                        }else{
                            return -1;
                        }
                   }),
                   console.log(pinpaiList)
               
                }
                <AllPinPai>
                    <div className="allCenter">
                        <span>全部品牌</span>
                    </div>
                    <div className="allSearch" onClick={this.handleClick.bind(this)}>
                        <span className="iconfont">&#xe654;</span>
                    </div>
                </AllPinPai>
                <PinpaiList>
                    <div className="imgList">
                        <div>
                        <img src="https://pic.cdfgsanya.com/assets/upload/img/bf18df746d6cf80d3ef3d2716ac9fca8.jpg" alt=""/>
                        <img src="https://pic.cdfgsanya.com/assets/upload/img/7bcd4fa71ada2216efd67a946ca5d890.jpg" alt=""/>
                        </div>
                        <div>
                        <img src="https://pic.cdfgsanya.com/assets/upload/img/0ea7d0b67fb9ab77200e99e898db85a5.jpg" alt=""/>
                        <img src="https://pic.cdfgsanya.com/assets/upload/img/cecde013b1a2a46fffd58008f4513c02.jpg" alt=""/>
                        </div>
                        <div>
                        <img src="https://pic.cdfgsanya.com/assets/upload/img/4b1b25451757fc7f1e42522860bfbc8a.jpg" alt=""/>
                        <img src="https://pic.cdfgsanya.com/assets/upload/img/8bdc978069ebd00e586266612cdc6065.jpg" alt=""/>
                        </div>
                        <div>
                        <img src="https://pic.cdfgsanya.com/assets/upload/img/c192085e61df87afbdbab7ff2159a0dd.jpg" alt=""/>
                        <img src="https://pic.cdfgsanya.com/assets/upload/img/efe370ab35a630ba446d8d403ab247db.jpg" alt=""/>
                        </div>
                        <div>
                        <img src="https://pic.cdfgsanya.com/assets/upload/img/ea580fc5797a3f78dbce727755f972b5.jpg" alt=""/>
                        <img src="https://pic.cdfgsanya.com/assets/upload/img/f2f8f78dab87d9007315164300278f36.jpg" alt=""/>
                        </div>
                    </div>
                    
                    <PinpaiTitle>
                        <div className="pinpaiLeft"></div>
                        <div className="pinpaiCenter">全部品牌</div>
                        <div className="pinpaiRight"></div>
                    </PinpaiTitle>
                    <NameList ref="nameList">
                        <div className="silderList">
                            {
                                pinpaiList.map((item,index)=>(
                                    <p key={Math.random()} onClick={this.handleClickUp.bind(this,index,item)}>{item.index}</p>
                                ))
                            }
                        </div>
                        
                        {
                            pinpaiList.map((item,index)=>(
                                <div className="one" id={item.index} key={Math.random()}>
                                <div className="nameTitle"><span key={Math.random()}>{item.index}</span></div>
                                {
                                    item.list.map((child)=>(
                                    <div className="titleList" key={child.name}><span>{child.name}</span></div>
                                    ))
                                }
                               
                                </div>
                            ))
                        }
                            
                    </NameList>
                </PinpaiList>
            </Pinpai>
        )
    }
    handleClick(){
        this.props.history.push("/search")
    }
    isPinpaiList(letterFirst,pinpaiList){
            var bStop=true;
            // console.log(pinpaiList)
            for(var i=0;i<pinpaiList.length;i++){
                if(pinpaiList[i].index===letterFirst){
                    bStop=false;
                    break;
                }
            }
            return bStop;
        }
        handleClickUp(index,item){
            //console.log(index);
           document.body.scrollTop=document.getElementById(item.index).offsetTop-100;
            //console.log(document.getElementById(item.index).offsetTop)
        }
    componentDidMount(){
        this.props.handleAsyncFind();
       
    }
}

export default Find;