import React, { Component } from 'react'
import {LoginContent} from "./style"
export default class Login extends Component {
    constructor(){
        super()
        this.state={
            flag:1,
        }
    }
    render(){
        let {flag}=this.state
        return (
            <LoginContent>
               <div className="head">
                    <span >登录/注册</span><span className="goback"><i className="iconfont">&#xe610;</i></span>
                </div>
                <div className="login">
                    <div className="change">
                        <span onClick={this.hanleChange.bind(this,1)} className={flag===0?"actives":""}>用户登录</span><span className={flag===1?"actives":""} onClick={this.hanleChange.bind(this,0)}>用户注册</span>
                    </div>
                    <div className={flag===0?"active":""}>
                        <div className="input">
                            <input type="text"  placeholder="请输入用户名" /><br/>
                            <input type="text" placeholder="请输入用密码" />

                        <p><span>没有账号？<u>请注册</u></span><span>忘记密码？<u>找回密码</u></span></p>    
                        <div className="btn">登录</div>
                        </div>
                    </div>
                    <div className={flag===1?"active":""}>
                        <div className="input">
                            <input type="text"  placeholder="请输入用户名" /><br/>
                            <input type="text" placeholder="请输入用密码" />

                        <p><span>没有账号？<u>请注册</u></span><span>忘记密码？<u>找回密码</u></span></p>    
                        <div className="btn">注册</div>
                        </div>
                    </div>    
                   
                </div>
            </LoginContent>
        )
    }
    hanleChange(index){
        this.setState({
            flag:index
        })
    }
}
