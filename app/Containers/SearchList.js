import React, {Component} from 'react'
import MySearch from '../Components/Search'
import SearchListView from '../Containers/SearchListView'
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
