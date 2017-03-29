import React, {Component} from 'react'
import Input from 'antd/lib/input'
import 'antd/lib/input/style/index.less'
const Search = Input.Search;
import '../Css/mysearch.less'

class MySearch extends Component{
    render (){
        return (
               <div className="content">
                   <Search placeholder="input search text"
                           onSearch={value => console.log(value)}/>
                   <a  href="#" onClick={e => console.log(e)}><img className="myimg" src={require("../image/search.png")} alt="search"/></a>
               </div>
        )
    }
}
export default MySearch