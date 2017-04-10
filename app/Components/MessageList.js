import React, {Component} from 'react'
import MessageListCell from './MessageListCell'

const bg = {
    paddingBottom: "1rem",
    color: "#481e41",
};
class MessageList extends Component{
    render() {
        let data = this.props.data;
        return (
            <div style={bg}>
                {data.newslist.map((item,index)=>
                    <MessageListCell key={index}
                                     picUrl={item.picUrl}
                                     title={item.title}
                                     url={item.url}
                                     description={item.description}
                                     ctime={item.ctime}/>
                )}
                
            </div>
        )
    }
}

export default MessageList