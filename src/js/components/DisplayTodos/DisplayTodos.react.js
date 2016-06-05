import React from 'react'
import Base from '../_helpers/BaseComponent.react'

import TodoActions from '../../actions/TodoActions'
import TodoItem from '../TodoItem/TodoItem.react'

export default class DisplayTodos extends Base {
    constructor() {
        super()
        this._bind(
            '_onToggleComplete',
            '_onToggleUncomplete',
            '_onDestroy'
        )
    }

    render() {
        // allTodos depends on the props given
        // they may be completed or uncompleted todos
        let allTodos = this.props.allTodos
        let todos = []

        for(let key in allTodos) {
            todos.push(
                <TodoItem
                    key={allTodos[key].id}
                    todo={allTodos[key]}
                    onToggleUncomplete={this._onToggleUncomplete}
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

    _onToggleUncomplete(id) {
        TodoActions.toggleUncomplete(id)
    }

    _onDestroy(id) {
        TodoActions.destroy(id)
    }
}
