//菜谱搜索结果列表  cell组件只需要传入几个参数就能自动刷新了
import React, {Component} from 'react'
import SearchListViewCell from '../Components/SearchListViewCell'
import * as ItemsActions from '../Reducer/Action'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux';


class SearchListView extends Component{

    componentDidMount(){

    }

    render() {
        let result = this.props;
        console.log("搜索结果列表"+result);
        return (
            <div>
                {result.data.map((item,index)=>
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

const mapStateToProps = (state) => {
    let  result  = state.cookeryBookState.result;
    return result;
}

//通过mapDispatchToProps这个方法，把actionCreator变成方法赋值到props，每当调用这个方法，就会更新State
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(ItemsActions,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchListView)