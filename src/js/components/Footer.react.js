import React from 'react'
import Base from './helpers/BaseComponent.react'
import TodoActions from '../actions/TodoActions'

import CompletedItem from './CompletedItem.react'


export default class Footer extends Base {
    constructor() {
        super()
        this._bind('_onUncompleteTodo')
    }

    render() {
        let allTodos = this.props.allTodos
        let completedTodos = []

        for(key in allTodos) {
            if(allTodos[key].complete) {
                completedTodos.push(allTodos[key])
            }
        }
        let todos = []

        for(var key in completedTodos) {
            todos.push(
                <CompletedItem
                    key={completedTodos[key].id}
                    todo={completedTodos[key]}
                    onUncompleteTodo={this._onUncompleteTodo}
                />
            )
        }

        let message

        if(todos.length === 0) {
            message = 'No completed todos'
        }
        else {
            message = 'Completed todos: '
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="ten columns centered">
                        <p>{message}</p>
                    </div>
                    <ul>{todos}</ul>
                </div>
            </div>
        )
    }

    _onUncompleteTodo(id) {
        TodoActions.toggleUncomplete(id)
    }
}
