import React,{ Component } from 'react'
import HomePage from '../Containers/HomePage'
import Category from '../Containers/Category'
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
                    <Route path="/about" component={About}/>
                    <Route path="/category" component={Category}/>
                </div>
            </Router>
        )
    }
}

const About = () => (
    <div>
        <h2>About</h2>
    </div>
)

export default Root