import React from 'react'
import ReactDOM from 'react-dom'
import  {Router, Route, IndexRoute, Link, hashHistory} from 'react-router'

import App from './routes/App.route'
import Home from './routes/Home.route'
import TodoSingle from './routes/TodoSingle.route'

let routes = (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
        </Route>
    </Router>
)

ReactDOM.render(routes, document.getElementById('todo-app'))
