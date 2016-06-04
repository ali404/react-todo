import React from 'react'
import Base from './helpers/BaseComponent.react'

export default class CompletedItem extends Base {
    constructor() {
        super()
        this._bind('_uncompleteTodo')
    }

    render() {
        let todo = this.props.todo

        return (
            <div>
                <p>{todo.text}</p>
                <p>Date completed: {todo.dateCompleted.toString()}</p>
                <button onClick={this._uncompleteTodo}>Return to uncompleted todos</button>
            </div>
        )
    }

    _uncompleteTodo(e) {
        this.props.onUncompleteTodo(this.props.todo.id)
    }
}
