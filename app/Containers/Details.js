import React, {Component} from 'react'
import '../Css/details.less'
import { connect } from 'react-redux';
import NavbarButton from '../Components/NavbarButton'


class Details extends Component{

    buttonClick(food,e){
        console.log(food)
        if (this.refs.favorite.src == require("../image/favorite_on.png")){
            this.refs.favorite.src = require("../image/favorite.png");
            //dispatch 取消收藏

        }else {
            this.refs.favorite.src = require("../image/favorite_on.png");
            //dispatch 增加收藏

        }
    };

    render() {
        let food = this.props;
        return (
            <div className="detailcontent">
                <button onClick={this.buttonClick.bind(this,food)}><img ref="favorite" src={require("../image/favorite.png")} alt="favorite"/></button>

                <div className="header">
                    <img src={food.albums} alt="albums"/>
                    <div>
                        <h3>{food.title}</h3>
                        <span>2546454 · 浏览</span>
                        <span>65461 · 收藏</span>
                    </div>
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
