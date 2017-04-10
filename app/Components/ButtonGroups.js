import React, {Component} from 'react'
import '../Css/buttongruops.less'
import { Link } from 'react-router-dom'
import store from '../Reducer/store'
import * as ItemAtions from '../Reducer/Action'
import * as URL from '../Static/Config'

class ButtonGroups extends Component{

    onClickLink(url,e){
        //dispatch 一个actio携带需要跳转的url
        store.dispatch(ItemAtions.externalUrl(url));
    };

    render(){
        return (
            <div className="Grid">

                <div className="Grid-cell">
                    <Link to="category"><img src={require("../image/Category.png")} alt="Category"/>
                    </Link>
                    <span>食谱分类</span>
                </div>


                <div className="Grid-cell">
                    <Link to="/external" onClick={this.onClickLink.bind(this,URL.vedioURL)}>
                        <img src={require("../image/vedio.png")} alt="vedio"/>
                    </Link>
                    <span>视频</span>
                </div>


                <div className="Grid-cell">
                    <Link to="/external" onClick={this.onClickLink.bind(this,URL.foodURL)}>
                        <img src={require("../image/food.png")} alt="food"/>
                    </Link>
                    <span>美食</span>
                </div>


                <div className="Grid-cell">
                    <a href="">

                    </a>
                    <Link to="/external" onClick={this.onClickLink.bind(this,URL.storeURL)}>
                        <img src={require("../image/商城.png")} alt="商城"/>
                    </Link>
                    <span>商城</span>
                </div>


            </div>
        )
    }
}

export default ButtonGroups