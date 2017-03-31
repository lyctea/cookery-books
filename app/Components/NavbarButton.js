import React, {Component} from 'react'
import '../Css/buttongruops.less'

class NavbarButton extends Component{
    render() {
        return (
            <div className="fixed-bottom">
                <div className="nav-button"><a href="#"><img src={require("../image/主页.png")} alt=""/></a><span>学做菜</span></div>
                <div className="nav-button"><a href="#"><img src={require("../image/icon_休闲食品.png")} alt="home"/></a><span>美食圈</span></div>
                <div className="nav-button"><a href="#"><img style={{background:"red",width: "50%",marginTop: "20%"}} src={require("../image/加号.png")} alt="add"/></a></div>
                <div className="nav-button"><a href="#"><img src={require("../image/消息.png")} alt="news"/></a><span>消息</span></div>
                <div className="nav-button"><a href="#"><img src={require("../image/我.png")} alt="myself"/></a><span>我的</span></div>
            </div>

        )
    }
}

export default NavbarButton