import React, {Component} from 'react'
import MessageListCell from './MessageListCell'
import Pagination  from 'antd/lib/pagination'
import 'antd/lib/pagination/style/index.less'

import * as ItemActions from '../Reducer/Action'
import store from '../Reducer/store'
import { connect } from 'react-redux';


const listStyle = {
    paddingBottom: "1rem",
    color: "#481e41",
};
const pageStyle = {
    padding: "0 0 0.2rem 0",
};
class MessageList extends Component{
    changePage(e,page){
        store.dispatch(ItemActions.getPageMessageRequest(page,10));
    };

    render() {
        var {data} = this.props;
        return (
            <div style={listStyle}>
                {data.newslist.map((item,index)=>
                    <MessageListCell key={index}
                                     picUrl={item.picUrl}
                                     title={item.title}
                                     url={item.url}
                                     description={item.description}
                                     ctime={item.ctime}/>
                )}
                <div style={pageStyle}>
                    <Pagination  defaultCurrent={1} total={100} onChange={page=>this.changePage(this,page)}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.messagePageState
    };
}

export default connect(mapStateToProps,null)(MessageList)
