import React, {Component} from 'react'
import config from './config.json'
import style from './Greeter.css'


import MyCarousel from './Components/Carousel'

class Greeter extends Component{
    render(){
        return (
            <div className={style.root}>
                <MyCarousel/>
                {config.greetText}
            </div>
        )
    }
}

export default Greeter