//分类页面,显示所有的类别
import React, {Component} from 'react'
import data from '../Static/category_juhe.json'
import CategoryList from '../Components/CategoryList'
import MySearch from '../Components/Search'
import NavbarButton from '../Components/NavbarButton'

const resultArr = data.result;

class Category extends Component{

    render(){
        return (
            <div>
                <MySearch history={this.props.history}/>
                <CategoryList result={resultArr}/>
                <NavbarButton/>
            </div>
        )
    }
}

export default Category
