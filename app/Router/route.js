import React,{ Component } from 'react'
import HomePage from '../Containers/HomePage'
import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom'

 class Root extends Component{
    render(){
        return (
            <Router>
                <div>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/about" component={About}/>
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