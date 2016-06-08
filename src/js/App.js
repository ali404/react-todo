import React from 'react'
import ReactDOM from 'react-dom'
import  {Router, Route, IndexRoute, Link, browserHistory} from 'react-router'

import App from './routes/App.route'
import Home from './routes/Home.route'

import Stories from './routes/Stories.route'
import StoriesSingle from './routes/StoriesSingle.route'

let routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="/stories" component={Stories} />
            <Route path="/stories/:storyId" component={StoriesSingle} />
        </Route>
    </Router>
)

ReactDOM.render(routes, document.getElementById('todo-app'))
