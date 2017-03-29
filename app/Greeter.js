import React, {Component} from 'react'
import config from './config.json'
import style from './Greeter.css'

import 'antd/lib/radio/style/index.less'
import Radio from 'antd/lib/radio'

class Greeter extends Component{
    render(){
        return (
            <div className={style.root}>
                <h1>hello world!</h1>
                <Radio/>
                {config.greetText}
            </div>
        )
    }
}

export default Greeter