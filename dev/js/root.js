import React , {Component} from 'react'
import ReactDOM  , {render} from 'react-dom'
import App from './app.js'
import Story from './story.js'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom'


const Root=()=>(
    <Router>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/story" component={Story}/>
        </Switch>
    
    </Router>
)
export default Root