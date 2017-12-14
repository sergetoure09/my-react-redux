import React , {Component} from 'react'
import ReactDOM  , {render} from 'react-dom'
import App from './components/app.js'
import Story from './components/story.js'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom'
import {Provider} from 'react-redux'
import '../../scss/style.scss'
import Store from '../store/store.js'



const Root=()=>(
    <Provider store={Store}>
    <Router>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/story" component={Story}/>
        </Switch>
    </Router>
    </Provider>
)
export default Root