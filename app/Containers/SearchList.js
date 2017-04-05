import React, {Component} from 'react'
import MySearch from '../Components/Search'
import SearchListView from '../Containers/SearchListView'
//从state中拿到json数据，展示成食谱列表

class SearchList extends Component{
    render() {
        return (
            <div>
                <MySearch/>
                <SearchListView/>
            </div>
        )
    }
}

export default SearchList