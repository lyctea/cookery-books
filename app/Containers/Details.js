import React, {Component} from 'react'
import '../Css/details.less'
import data from '../Static/category_search_juhe.json'

var food = data.result.data[0];
var steps = food.steps;

class Details extends Component{
    render() {
        return (
            <div className="detailcontent">
                {/*导航头部*/}
                <div className="cateheader" >
                    <a href=""><img src={require("../image/back.png")} alt="back"/></a>
                    <span>★★★★★</span>
                </div>

                {/*头部标题关注*/}
                <div className="header">
                    <img src={food.albums} alt="albums"/>
                    <div>
                        <h3>{food.title}</h3>
                        <span>2546454 · 浏览</span>
                        <span>65461 · 收藏</span>
                    </div>
                </div>
                {/*食材配料*/}
                <div className="ingredients">
                    <span>主料:</span><span>{food.ingredients}</span>
                </div>
                <div className="burden">
                    <span>辅料:</span><span>{food.burden}</span>
                </div>
                {/*详细步骤*/}
                <div className="steps">
                    {/*遍历steps数组，返回包含每个步骤的div*/}
                    {steps.map((item,index)=>{
                        return <div key={index}>
                            <h4>{item.step}</h4>
                            <img src={item.img} alt="#"/>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default Details