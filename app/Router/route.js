import React,{ Component } from 'react'
import HomePage from '../Containers/HomePage'
import Category from '../Containers/Category'
import SearchList from '../Containers/SearchList'

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
                </div>
            </Router>
        )
    }
}

export default Root