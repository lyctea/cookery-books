import React, {Component} from 'react'
import MyCarousel from '../Components/Carousel'
import MySearch from '../Components/SearchBar'
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
                    <MySearch history={this.props.history}/>
                    <ButtonGroups/>
                    <MyListView history={this.props.history}/>
                </div>
                <NavbarButton/>
            </div>
        )
    }
}
export default HomePage