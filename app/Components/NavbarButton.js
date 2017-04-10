import React, {Component} from 'react'
import '../Css/navbarbutton.less'
import {
    Link
} from 'react-router-dom'
import store from '../Reducer/store'
import * as ItemAtions from '../Reducer/Action'
import * as URL from '../Static/Config'

class NavbarButton extends Component{

    onClickLink(url,e){
        //dispatch 一个actio携带需要跳转的url
        store.dispatch(ItemAtions.externalUrl(url));
    };
    render() {
        return (
            <div className="fixed-bottom">
                <ul>
                    <li className="nav-button">
                        <Link to="/"><img src={require("../image/主页.png")} alt=""/></Link>
                        <span>学做菜</span>
                    </li>

                    <li className="nav-button">
                        <Link to="/external" onClick={this.onClickLink.bind(this,URL.circleURL)}>
                            <img src={require("../image/icon_休闲食品.png")} alt="home"/>
                        </Link>
                        <span>美食圈</span>
                    </li>


                    <li className="nav-button">
                        <a href="#">
                            <img className="add" src={require("../image/加号.png")} alt="add"/>
                        </a>
                    </li>


                    <li className="nav-button">
                        <Link to="/message">
                            <img src={require("../image/消息.png")} alt="news"/>
                        </Link>
                        <span>消息</span>
                    </li>


                    <li className="nav-button">
                        <a href="#">
                            <img src={require("../image/我.png")} alt="myself"/>
                        </a>
                        <span>我的</span>
                    </li>
                </ul>
            </div>
        )
    }
}

export default NavbarButton