//菜谱搜索结果列表  cell组件只需要传入几个参数就能自动刷新了
import React, {Component} from 'react'
import SearchListViewCell from '../Components/SearchListViewCell'
import data from '../Static/category_search_juhe.json'

var resultObject = data.result;

class SearchListView extends Component{
    render() {
        return (
            <div>
                {resultObject.data.map((item,index)=>
                    <SearchListViewCell key={index}
                                        albums={item.albums}
                                        title={item.title}
                                        ingredients={item.ingredients}
                                        author="天天小菜谱"/>)
                }
            </div>
        )
    }
}

export default SearchListView