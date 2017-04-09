import React, {Component} from 'react'
import '../Css/navbarbutton.less'

class NavbarButton extends Component{
    render() {
        return (
            <div className="fixed-bottom">
                <ul>
                    <li className="nav-button"><a href="#"><img src={require("../image/主页.png")} alt=""/></a><span>学做菜</span></li>
                    <li className="nav-button"><a href="http://www.mafengwo.cn/cy/10088/13452.html"><img src={require("../image/icon_休闲食品.png")} alt="home"/></a><span>美食圈</span></li>
                    <li className="nav-button"><a href="#"><img className="add" src={require("../image/加号.png")} alt="add"/></a></li>
                    <li className="nav-button"><a href="#"><img src={require("../image/消息.png")} alt="news"/></a><span>消息</span></li>
                    <li className="nav-button"><a href="#"><img src={require("../image/我.png")} alt="myself"/></a><span>我的</span></li>
                </ul>
            </div>
        )
    }
}

export default NavbarButton