import React, {Component} from 'react'
import data from '../Static/messageJSON.json'
import MessageList from '../Components/MessageList'
import NavbarButton from '../Components/NavbarButton'

class Message extends Component{
    render() {
        return (
            <div>
                <MessageList data={data} />
                <NavbarButton />
            </div>
        )
    }
}

export default Message


