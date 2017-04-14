import React, {Component} from 'react'
import MySearch from '../Components/SearchBar'
import SearchListView from '../Components/SearchListView'
import NavbarButton from '../Components/NavbarButton'

class SearchList extends Component{
    render() {
        return (
            <div>
                <MySearch history={this.props.history}/>
                <SearchListView history={this.props.history} />
                <NavbarButton/>
            </div>
        )
    }
}


export default SearchList
