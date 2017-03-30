import React, {Component} from 'react'
import MyCarousel from '../Components/Carousel'
import MySearch from '../Components/Search'
import ButtonGroups from '../Components/ButtonGroups'

class HomePage extends Component{
    render (){
        return (
            <div style={{width: "100%"}}>
                <MyCarousel/>
                <MySearch/>
                <ButtonGroups/>
            </div>
        )
    }
}
export default HomePage