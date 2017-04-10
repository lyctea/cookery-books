import React,{ Component } from 'react'
import HomePage from '../Containers/HomePage'
import Category from '../Containers/Category'
import SearchList from '../Containers/SearchList'
import Details from '../Containers/Details'
import MeiShiQuan from '../Components/External'
import Message from '../Containers/Message'

import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory();

import {
    HashRouter as Router,
    Route
} from 'react-router-dom'

const Root = ()=> (
    <Router history={history}>
        <div>
            <Route exact path="/" component={HomePage}/>
            <Route path="/searchlist" component={SearchList}/>
            <Route path="/category" component={Category}/>
            <Route path="/details" component={Details}/>
            <Route path="/external" component={MeiShiQuan}/>
            <Route path="/message" component={Message}/>
        </div>
    </Router>)

export default Root