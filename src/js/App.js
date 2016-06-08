import React from 'react'
import ReactDOM from 'react-dom'
import  {Router, Route, IndexRoute, Link, browserHistory} from 'react-router'

import App from './routes/App.route'
import Home from './routes/Home.route'
import TodoSingle from './routes/TodoSingle.route'
import Todos from './routes/Todos.route'

let routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="/todos" component={Todos} />
            <Route path="/:todoId" component={TodoSingle} />
        </Route>
    </Router>
)

ReactDOM.render(routes, document.getElementById('todo-app'))
