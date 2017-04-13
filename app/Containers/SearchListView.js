//菜谱搜索结果列表  cell组件只需要传入几个参数就能自动刷新了
import React, {Component} from 'react'
import SearchListViewCell from '../Components/SearchListViewCell'
import * as ItemsActions from '../Reducer/Action'
import { connect } from 'react-redux';
import store from '../Reducer/store'


class SearchListView extends Component{
    listClick(id,e){
        e.preventDefault();
        //拿到子组件的id dispatch action
        store.dispatch(ItemsActions.getCookeryIdRequest(id));
        //需要注意的是history需要一级级的传递
        this.props.history.push("/details");
    };
    render() {
        let result = this.props;
        return (
            <div style={{paddingBottom:"1rem"}}>
                {result.data.map((item,index)=>
                        <SearchListViewCell key={index}
                                            albums={item.albums}
                                            title={item.title}
                                            ingredients={item.ingredients}
                                            id={item.id}
                                            target={item.tags}
                                            listClick={this.listClick}
                                            history={this.props.history}/>
                       )}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    let  result  = state.cookeryBookState.result;
    return result;
}

/*
* 首先mapStateToProps是必须需要的，这是一个把state绑定到组件的props的过程，如果没有这个函数，你的组件怎么接受数据。
* mapDispatchToProps可要可不要，这是个自动把dispatch绑定到ui组件的过程，不需要每次触发action都得发送一次
* */

export default connect(mapStateToProps,null)(SearchListView)