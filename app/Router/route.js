import React,{ Component } from 'react'
import HomePage from '../Containers/HomePage'
import Category from '../Containers/Category'
import SearchList from '../Containers/SearchList'
import Details from '../Containers/Details'

import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory();

import {
    HashRouter as Router,
    Route,
} from 'react-router-dom'

const Root = ()=> (
    <Router history={history}>
        <div>
            <Route exact path="/" component={HomePage}/>
            <Route path="/searchlist" component={SearchList}/>
            <Route path="/category" component={Category}/>
            <Route path="/details" component={Details}/>
        </div>
    </Router>)

export default Root