import React, {Component} from 'react'
import '../Css/buttongruops.less'
import { Link } from 'react-router-dom'

class ButtonGroups extends Component{
    render(){
        return (
            <div className="Grid">
                <div className="Grid-cell"><Link to="category"><img src={require("../image/Category.png")} alt="Category"/></Link><span>食谱分类</span></div>
                <div className="Grid-cell"><a href="http://so.iqiyi.com/so/q_%E5%81%9A%E8%8F%9C?source=input&sr=264337732980"><img src={require("../image/vedio.png")} alt="vedio"/></a><span>视频</span></div>
                <div className="Grid-cell"><a href="http://weibo.com/meishi?refer_flag=1001030102_&is_hot=1"><img src={require("../image/food.png")} alt="food"/></a><span>美食</span></div>
                <div className="Grid-cell"><a href="http://gz.meituan.com/category/meishi?mtt=1.index%2Ffloornew.nc.1.j1ac0u1t"><img src={require("../image/商城.png")} alt="商城"/></a><span>商城</span></div>
            </div>
        )
    }
}

export default ButtonGroups