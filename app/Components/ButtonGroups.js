import React, {Component} from 'react'
import '../Css/buttongruops.less'

class ButtonGroups extends Component{
    render(){
        return (
            <div className="Grid">
                <div className="Grid-cell"><a href=""><img src={require("../image/Category.png")} alt="Category"/></a><span>食谱分类</span></div>
                <div className="Grid-cell"><a href=""><img src={require("../image/vedio.png")} alt="vedio"/></a><span>视频</span></div>
                <div className="Grid-cell"><a href=""><img src={require("../image/food.png")} alt="food"/></a><span>美食</span></div>
                <div className="Grid-cell"><a href=""><img src={require("../image/商城.png")} alt="商城"/></a><span>商城</span></div>
            </div>
        )
    }
}

export default ButtonGroups