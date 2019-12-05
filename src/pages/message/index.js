import React, { Component } from 'react'
import {PageContainer} from "common/styled"
import {MessageCenter} from "./style"
import {withRouter} from "react-router-dom"
import { mapStateToProps, mapDispatchToProps } from "./mapstore"
import { connect } from "react-redux"
import ImagePickerExample from "common/imagepicker"

@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class Message extends Component {
    render() {
        return (
            <PageContainer>
               {/* <div>message</div> */}
               
                <MessageCenter>
                    <div className="header">
                        <div className="headerLeft" onClick={this.handleMessageBack.bind(this)}><span className="iconfont">&#xe610;</span></div>
                        <div className="headerCenter"><span>我的账户</span></div>
                    </div>
                    
                    <div className="message">
                        <div className="tx">
                       
                        {/* <input type="file" value="上传"/> */}
                        {/* <input type="file" id="file" multiple="multiple" onchange="handleFile()" /> */}
                            <div className="txLeft"><span>头像</span></div>
                            <div className="textRight">
                            <ImagePickerExample length="1"></ImagePickerExample>
                               
                            </div>
                           
                        </div>
                        <div className="nc">
                        <div className="ncLeft"><span>昵称</span></div>
                        <div className="ncRight"><span>12345678912</span><span className="iconfont span">&#xe61b;</span></div>
                        </div>
                        <div className="zh">
                        <div className="zhLeft"><span>账户安全</span></div>
                        <div className="zhRight"><span className="iconfont">&#xe61b;</span></div>
                        </div>
                    </div>
                    <div className="back"> <span>退出当前账户</span></div>
                </MessageCenter>
            </PageContainer>
        )
    }
    handleMessageBack(){
        this.props.history.go(-1);
    }
}

export default Message