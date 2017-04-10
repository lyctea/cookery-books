import React, {Component} from 'react'
import '../Css/messagelistcell.less'

class MessageListCell extends Component{
    render() {
        let {picUrl,title,url,description,ctime} = this.props;
        return (
            <div className="message_list_cell">
                <div className="message_left">
                    <img src={picUrl} alt="messageImg"/>
                </div>
                <div className="message_right">
                    <a href={url} title="">{title}</a>
                    <span><i>来源：</i> {description}</span>
                    <span>{ctime}</span>
                    <div className="clear"></div>
                </div>
            </div>
        )
    }
}

export default MessageListCell