import React, {Component} from 'react'
import Input from 'antd/lib/input'
import 'antd/lib/input/style/index.less'
const Search = Input.Search;
import '../Css/mysearch.less'

class MySearch extends Component{
    render (){
        return (
               <div className="content">
                   <a href=""><img src={require("../image/search.png")} alt=""/></a>
                   <Search type="search" placeholder="搜食谱、菜谱等"
                           onSearch={value => console.log(value)}
                   />
               </div>
        )
    }
}
export default MySearch