import React, {Component} from 'react'
import Input from 'antd/lib/input'
import 'antd/lib/input/style/index.less'
const Search = Input.Search;
import '../Css/mysearch.less'

import * as ItemsActions from '../Reducer/Action'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux';


class MySearch extends Component{
    serchMenu(e){
        e.preventDefault();
        this.refs.search.onSearch();
    };

    render (){
        return (
               <div className="mysearch">
                   <a href="#" onClick={this.serchMenu.bind(this)}><img src={require("../image/search.png")} alt="#"/></a>
                   <Search ref="search"  placeholder="搜食谱、菜谱等"
                           onSearch={value => {this.props.actions.getMenuRequest(value),
                                                this.props.history.location.pathname == "/searchlist"?"":this.props.history.push("/searchlist")}}
                   />
               </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

//通过mapDispatchToProps这个方法，把actionCreator变成方法赋值到props，每当调用这个方法，就会更新State
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(ItemsActions,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MySearch)