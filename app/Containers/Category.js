//分类页面,显示所有的类别
import React, {Component} from 'react'
import data from '../Static/category_juhe.json'
import CategoryList from '../Components/CategoryList'
import MySearch from '../Components/Search'
import NavbarButton from '../Components/NavbarButton'
import '../Css/category.less'

const resultArr = data.result;

class Category extends Component{

    render(){
        return (
            <div>
                <div className="categoryHeader">
                    <div className="cateheader" >
                        <a href=""><img src={require("../image/back.png")} alt="back"/></a>
                        <span>菜谱分类</span>
                    </div>
                    <MySearch style={{display: "block"}}/>
                </div>
                <div>
                    <CategoryList result={resultArr}/>
                </div>
                <NavbarButton/>
            </div>
        )
    }
}

export default Category
