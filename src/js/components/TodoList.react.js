import React from 'react'
import TodoItem from './TodoItem.react'

import Base from './helpers/BaseComponent.react'
import TodoActions from '../actions/TodoActions'

export default class TodoList extends Base {
    constructor() {
        super()
        this._bind(
            '_onToggleComplete',
            '_onDestroy')
    }

    render() {
        let allTodos = this.props.allTodos
        console.log(allTodos)
        let uncompletedTodos = [];

        for(let key in allTodos) {
            if(!allTodos[key].complete) {
                uncompletedTodos.push(allTodos[key])
            }
        }

        let todos = []

        for(let key in uncompletedTodos) {
            todos.push(
                <TodoItem
                    key={key}
                    todo={uncompletedTodos[key]}
                    onToggleComplete={this._onToggleComplete}
                    onDestroy={this._onDestroy}
                />
            )
        }

        return (
            <div className="container">
                <div className="row">
                    <ul>{todos}</ul>
                </div>
            </div>
        )
    }

    _onToggleComplete(id) {
        TodoActions.toggleComplete(id)
    }

    _onDestroy(id) {
        TodoActions.destroy(id)
    }
}
