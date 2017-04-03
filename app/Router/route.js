import React,{ Component } from 'react'
import HomePage from '../Containers/HomePage'
import Category from '../Containers/Category'
import SearchList from '../Containers/SearchList'
import Details from '../Containers/Details'

import {
    HashRouter as Router,
    Route,
    Link            //点击Link实现跳转
} from 'react-router-dom'

 class Root extends Component{
    render(){
        return (
            <Router>
                <div>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/searchlist" component={SearchList}/>
                    <Route path="/category" component={Category}/>
                    <Route path="/details" component={Details}/>
                </div>
            </Router>
        )
    }
}

export default Root