import React from 'React'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import Todo from '../todo/todo'
import About from '../about/about'

export default props => (
    <Router history={hashHistory}>
        <Router path='/todos' component={Todo}/>
        <Route path='/about' component={About}/>
        <Redirect from='*' to='/todos'/>
    </Router>
)