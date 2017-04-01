import React, {Component} from 'react'
import MySearch from '../Components/Search'
import SearchListView from '../Containers/SearchListView'
import '../Css/category.less'
//从state中拿到json数据，展示成食谱列表

class SearchList extends Component{
    render() {
        return (
            <div>
                <div className="categoryHeader">
                    <div className="cateheader" >
                        <a href=""><img src={require("../image/back.png")} alt="back"/></a>
                        <span>菜谱列表</span>
                    </div>
                    <MySearch style={{display: "block"}}/>
                </div>
                <div className="searchlist-content">
                    <SearchListView/>
                </div>
            </div>
        )
    }
}

export default SearchList