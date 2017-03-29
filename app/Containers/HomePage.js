import React, {Component} from 'react'
import MyCarousel from '../Components/Carousel'
import MySearch from '../Components/Search'


class HomePage extends Component{
    render (){
        return (
            <div style={{width: "100%"}}>
                <MyCarousel/>
                <MySearch/>
            </div>
        )
    }
}
export default HomePage