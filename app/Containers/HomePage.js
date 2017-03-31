import React, {Component} from 'react'
import MyCarousel from '../Components/Carousel'
import MySearch from '../Components/Search'
import ButtonGroups from '../Components/ButtonGroups'
import MyListView from '../Components/ListView'
import NavbarButton from '../Components/NavbarButton'
import '../Css/homepage.less'

class HomePage extends Component{
    render (){
        return (
            <div className="homepage">
                <div className="main-content">
                    <MyCarousel/>
                    <MySearch/>
                    <ButtonGroups/>
                    <MyListView/>
                </div>
                <NavbarButton/>
            </div>
        )
    }
}
export default HomePage