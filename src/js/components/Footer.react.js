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

        return (
            <div>
                <hr />
                <ul>{todos}</ul>
            </div>
        )
    }

    _onUncompleteTodo(id) {
        TodoActions.toggleUncomplete(id)
    }
}
