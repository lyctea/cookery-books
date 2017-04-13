import React, {Component} from 'react'
import '../Css/details.less'
import { connect } from 'react-redux';
import NavbarButton from '../Components/NavbarButton'
import { StorageGetter,StorageSetter} from '../Static/tool'

class Details extends Component{

    buttonClick(food,e){
        e.preventDefault();

        if (this.refs.favorite.src == require("../image/favorite_on.png")){
            this.refs.favorite.src = require("../image/favorite.png");
            //取消收藏 删除所有重复的food
            var localArr = StorageGetter("locallist");
            for (let i=0;i<localArr.length;i++){
                if (localArr[i].id == food.id){
                    localArr.splice(i,1);
                }
            }
            StorageSetter("locallist",localArr);
        }else {
            this.refs.favorite.src = require("../image/favorite_on.png");
            //增加收藏 先删除所有重复的food 在push新的food
            var localArr = StorageGetter("locallist");
            for (let i=0;i<localArr.length;i++){
                if (localArr[i].id == food.id){
                    localArr.splice(i,1);
                }
            }
            localArr.push(food);
            StorageSetter("locallist",localArr);
        }
    };

    render() {
        let food = this.props;
        var favIconUrl = require("../image/favorite.png");
        //判断是否已经被收藏
        var localList = StorageGetter("locallist");
        for (let i=0;i<localList.length;i++){
            if(localList[i].id == food.id){
                //在收藏列表里面有这个菜谱，则收藏图标点亮
                favIconUrl = require("../image/favorite_on.png");
            }
        }

        return (
            <div className="detailcontent">

                <div className="header">
                    <img src={food.albums} alt="albums"/>
                    <h3>{food.title}</h3>
                    <button onClick={this.buttonClick.bind(this,food)}>
                        <img ref="favorite" src={favIconUrl} alt="favorite"/>
                        <h5>收藏</h5>
                    </button>
                    <span>2546454 · 浏览</span>
                    <span>65461 · 收藏</span>
                </div>

                <div className="ingredients">
                    <span>主料:</span><span>{food.ingredients}</span>
                </div>
                <div className="burden">
                    <span>辅料:</span><span>{food.burden}</span>
                </div>

                <div className="steps">
                    {food.steps.map((item,index)=>{
                        return <div key={index}>
                            <h4>{item.step}</h4>
                            <img src={item.img} alt="#"/>
                        </div>
                    })}
                </div>
                <NavbarButton/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    let  result  = state.cookeryIdSearchState.result;
    return result.data[0];
}

export default connect(mapStateToProps,null)(Details)
