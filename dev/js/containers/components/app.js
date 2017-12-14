import React , {Component} from 'react'
import ReactDOM  , {render} from 'react-dom'
import {
   
    Link
} from 'react-router-dom'

const App=()=>
<div>
<h1><Link to='/story'>Hello Serguey</Link></h1>
<h2>User list:</h2>
<hr/>
<h2>User details:</h2>
</div>

export default App