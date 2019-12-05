import React, { Component } from 'react'
import {LoginContent} from "./style"



import { connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from "./mapstore"
import { withRouter } from "react-router-dom";
@withRouter
@connect(mapStateToProps, mapDispatchToProps)

 class Login extends Component {
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
                            <input type="text"  placeholder="请输入用户名" ref="username"/><br/>
                            <input type="text" placeholder="请输入用密码"  ref="password"/>

                        <p><span>没有账号？<u>请注册</u></span><span>忘记密码？<u>找回密码</u></span></p>    
                        <div className="btn" onClick={this.handleLogin.bind(this)}>登录</div>
                        </div>
                    </div>
                    <div className={flag===1?"active":""}>
                        <div className="input">
                            <input type="text"  placeholder="请输入用户名" ref="user" /><br/>
                            <input type="text" placeholder="请输入用密码" ref="pass" />

                        <p><span>没有账号？<u>请注册</u></span><span>忘记密码？<u>找回密码</u></span></p>    
                        <div className="btn" onClick={this.handleRegister .bind(this)}>注册</div>
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
    handleLogin(){
        let username=this.refs.username.value
        let password=this.refs.password.value
        this.props.sendLogin(username,password)
        //  

        setTimeout(()=>{
            this.props.history.push("/mine")
        },1000)
       
    }
    handleRegister(){
        let username=this.refs.user.value
        let password=this.refs.pass.value
        this.props.sendeRegister(username,password)
    }
}

export default Login
