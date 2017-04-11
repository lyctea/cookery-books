import React, {Component} from 'react'
import '../Css/messagelistcell.less'
import { Link } from 'react-router-dom'
import store from '../Reducer/store'
import * as ItemAtions from '../Reducer/Action'

class MessageListCell extends Component{

    onClickLink(url,e){
        store.dispatch(ItemAtions.externalUrl(url));
    }

    render() {
        let {picUrl,title,url,description,ctime} = this.props;
        return (
            <div className="message_list_cell">
                <div className="message_left">
                    <img src={picUrl} alt="messageImg"/>
                </div>
                <div className="message_right">
                    <Link to="/external" onClick={this.onClickLink.bind(this,url)} title={title}>{title}</Link>
                    <span><i>来源：</i> {description}</span>
                    <span>{ctime}</span>
                    <div className="clear"></div>
                </div>
            </div>
        )
    }
}

export default MessageListCell